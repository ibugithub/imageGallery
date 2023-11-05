// This moudle is for handling all the drag and drop operations

import itemData from "./items";
import { useState } from "react";
import RemoveClass from "./removeClass";

export const DragFunctions = () => {
  const [items, setItems] = useState(itemData);
  const [dragItem, setDragItem] = useState(null);

  // this function will be triggered when the drag operation is started and handle the start of the drag operation
  const handleDrag = (e) => {
    e.target.children[0].classList.remove('img')
    RemoveClass('empty-checkbox');
    setDragItem(e.target);
    if (e.target.classList.contains("firstItem")) {
      if (e.target.children[2].classList.contains("clicked")) {
        e.target.children[2].classList.remove("clicked");
        e.target.children[2].classList.add("hide");
        e.target.children[2].classList.add("pickMe");
      }
      e.target.classList.add("first-to-other");
    }
    document.querySelector("#last-el").classList.add("hidden");
    document.querySelector("#box").classList.remove("invisible");
    e.dataTransfer.effectAllowed = "move";
  };

// This function handles drag-over events
  const handleDragOver = (e, targetItemId) => {
    e.preventDefault();
    RemoveClass('empty-checkbox');
    dragItem.classList.add("dragging-div");
    const sourceItemId = dragItem.id;
    const updatedItems = [...items]; 
    const sourceItem = updatedItems.find((item) => item.id === sourceItemId);
    const targetItem = updatedItems.find((item) => item.id === targetItemId);
    const sourceIndex = updatedItems.indexOf(sourceItem);
    const targetIndex = updatedItems.indexOf(targetItem);
    if (targetIndex === items.length - 1) { return }
    if (sourceItem && targetItem && sourceIndex !== -1 && targetIndex !== -1) {
      updatedItems.splice(sourceIndex, 1);
      updatedItems.splice(targetIndex, 0, sourceItem);
      setItems(updatedItems);
    }
  };

   // This function handles the Drop of the drag operation
  const handleDrop = (e) => {
    if (e.target.id === 'box' ){
      console.log('source item is', dragItem);
      console.log('target item is', e.target );
      // const updatedItems = [...items]
      const updatedItems = items.filter(item => item.id != dragItem.id);
      setItems(updatedItems);
      console.log('updated items are', updatedItems);
    }
  };

  // This function handles the end of the drag operation
  const handleDragEnd = (e) => {
    RemoveClass('first-to-other dragging-div');
    e.target.children[0].classList.add('img')
    if (e.target.children[2].classList.contains("pickMe")) {
      e.target.children[2].classList.add("clicked");
      e.target.children[2].classList.remove("hide");
    }
    document.querySelector("#box").classList.add("invisible");
    document.querySelector("#last-el").classList.remove("hidden");
  };

  return {
    items,
    setItems,
    dragItem,
    handleDrag,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    RemoveClass,
  };
};
