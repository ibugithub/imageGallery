// This moudle is for handling all the drag and drop operations

import itemData from "./items";
import { useState } from "react";
import RemoveClass from "./removeClass";

export const DragFunctions = () => {
  const [items, setItems] = useState(itemData);
  const [dragItem, setDragItem] = useState(null);

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
    e.dataTransfer.effectAllowed = "move";
  };

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

  const handleDragEnd = (e) => {
    RemoveClass('first-to-other dragging-div');
    e.target.children[0].classList.add('img')
    if (e.target.children[2].classList.contains("pickMe")) {
      e.target.children[2].classList.add("clicked");
      e.target.children[2].classList.remove("hide");
    }
  };

  return {
    items,
    setItems,
    dragItem,
    handleDrag,
    handleDragOver,
    handleDragEnd,
    RemoveClass,
  };
};
