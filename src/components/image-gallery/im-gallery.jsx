import { useState } from "react";
import dragImage from "./assets/drag.png";

const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, content: "item 1" },
    { id: 2, content: "item 2" },
    { id: 3, content: "item 3" },
    { id: 4, content: "item 4" },
    { id: 5, content: "item 5" },
    { id: 6, content: "item 6" },
    { id: 7, content: "item 7" },
    { id: 8, content: "item 8" },
    { id: 9, content: "item 9" },
    { id: 10, content: "item 10" },
  ]);

  const handleDrag = (e, itemId) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", itemId);
  };

  const handleDrop = (e, targetItemId) => {
    e.preventDefault();
    const sourceItemId = e.dataTransfer.getData("text/plain");
    const updatedItems = [...items];

    const sourceItem = updatedItems.find((item) => item.id === parseInt(sourceItemId, 10));
    const targetItem = updatedItems.find((item) => item.id === parseInt(targetItemId, 10));

    const sourceIndex = updatedItems.indexOf(sourceItem);
    const targetIndex = updatedItems.indexOf(targetItem);

    if (sourceItem && targetItem && sourceIndex !== -1 && targetIndex !== -1) {
      updatedItems.splice(sourceIndex, 1);
      updatedItems.splice(targetIndex, 0, sourceItem);
      setItems(updatedItems);
    }
  };

  return (
    <div className="grid grid-flow-row grid-cols-4 p-5 text-center gap-1 max-sm:grid-cols-2 cursor-grab">
      {items.map((item, index) => (
        <div
          key={item.id}
          id={item.id}
          draggable
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => handleDrop(e, item.id)}
          onDragStart={(e) => handleDrag(e, item.id)}
          className={`h-32 flex justify-center items-center border border-sky-500 bg-gray-800 ${
            index === 0 ? "col-span-2 row-span-2 h-[16.4rem]" : ""
          }`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
