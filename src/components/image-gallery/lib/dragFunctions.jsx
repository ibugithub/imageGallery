import itemData from "./items";
import { useState } from "react";

export const DragFunctions = () => {
  const [items, setItems] = useState(itemData);
  const [dragItem, setDragItem] = useState(null);

  const handleDrag = (e) => {
    setDragItem(e.target);
    if (e.target.classList.contains("firstItem")) {
      e.target.classList.add("first-to-other");
    }
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, targetItemId) => {
    e.preventDefault();
    dragItem.classList.add("dragging-div");
    const sourceItemId = dragItem.id;
    const updatedItems = [...items];

    const sourceItem = updatedItems.find(
      (item) => item.id === parseInt(sourceItemId, 10)
    );
    const targetItem = updatedItems.find(
      (item) => item.id === parseInt(targetItemId, 10)
    );

    const sourceIndex = updatedItems.indexOf(sourceItem);
    const targetIndex = updatedItems.indexOf(targetItem);
    console.log('source index is ', sourceIndex);
    console.log('targetIndex: ', targetIndex);

    if (sourceItem && targetItem && sourceIndex !== -1 && targetIndex !== -1) {
      updatedItems.splice(sourceIndex, 1);
      updatedItems.splice(targetIndex, 0, sourceItem);
      setItems(updatedItems);
    }
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("dragging-div");
    e.target.classList.remove("first-to-other");
    e.target.classList.remove("other-to-first");
  };

  return {
    items,
    dragItem,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  };
};
