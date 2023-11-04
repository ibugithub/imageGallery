// This moudle is for handling all the drag and drop operations

import itemData from "./items";
import { useState } from "react";
import UnHover from "./unHover";

export const DragFunctions = () => {
  const [items, setItems] = useState(itemData);
  const [dragItem, setDragItem] = useState(null);

  const handleDrag = (e) => {
    setDragItem(e.target);
    if (e.target.classList.contains("firstItem")) {
      e.target.classList.add("first-to-other");
    }
    UnHover();
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, targetItemId) => {
    e.preventDefault();
    dragItem.classList.add("dragging-div");
    const sourceItemId = dragItem.id;
    const updatedItems = [...items];

    const sourceItem = updatedItems.find((item) => item.id === sourceItemId);
    const targetItem = updatedItems.find((item) => item.id === targetItemId);
    const sourceIndex = updatedItems.indexOf(sourceItem);
    const targetIndex = updatedItems.indexOf(targetItem);

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
    UnHover,
  };
};
