import { useState } from "react";
import fruit1 from "./assets/fruit1.jpg";
import fruit2 from "./assets/fruit2.jpg";
import fruit3 from "./assets/fruit3.jpg";
import fruit4 from "./assets/fruit4.jpg";
import fruit5 from "./assets/fruit5.jpg";
import fruit6 from "./assets/fruit6.jpg";
import fruit7 from "./assets/fruit7.jpg";
import fruit8 from "./assets/fruit8.jpg";
import fruit9 from "./assets/fruit9.jpg";
import fruit10 from "./assets/fruit10.jpg";

const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, content: fruit4 },
    { id: 2, content: fruit2 },
    { id: 3, content: fruit3 },
    { id: 4, content: fruit1 },
    { id: 5, content: fruit5 },
    { id: 6, content: fruit6 },
    { id: 7, content: fruit7 },
    { id: 8, content: fruit8 },
    { id: 9, content: fruit9 },
    { id: 10, content: fruit10 },
  ]);
  const [dragItem, setDragItem] = useState(null);

  const handleDrag = (e) => {
    console.log("handleDrag called and the target element is", e.target);
    setDragItem(e.target); 
    e.target.classList.add('first-to-other');
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, targetItemId) => {
    e.preventDefault();
    console.log("DragOver called and the target element is", targetItemId);
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

    if (sourceItem && targetItem && sourceIndex !== -1 && targetIndex !== -1) {
      console.log("DragOver on matched. the target element is", targetItemId);
      updatedItems.splice(sourceIndex, 1);
      updatedItems.splice(targetIndex, 0, sourceItem);
      setItems(updatedItems);
    }
  };

  const handleDragEnd = (e) => {
    console.log("DragEnd called. the e.target element is", e.target);
    e.target.classList.remove("dragging-div");
    e.target.classList.remove("first-to-other");
  };

  return (
    <div
      draggable={false}
      className="p-5 grid grid-cols-4 grid-flow-row gap-6 text-center  cursor-grab"
    >
      {items.map((item, index) => (
        <div
          draggable={true}
          key={item.id}
          id={item.id}
          onDragOver={(e) => {
            handleDragOver(e, item.id);
          }}
          onDragStart={(e) => handleDrag(e, item.id)}
          onDragEnd={(e) => handleDragEnd(e)}
          className={`${
            index == 0 ? "col-span-2 row-span-2 firstItem" : ""
          } flex justify-center items-center`}
        >
          <img src={item.content} alt="" draggable={false} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
