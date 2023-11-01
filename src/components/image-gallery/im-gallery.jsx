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
    { id: 1, content: fruit1 },
    { id: 2, content: fruit2 },
    { id: 3, content: fruit3 },
    { id: 4, content: fruit4 },
    { id: 5, content: fruit5 },
    { id: 6, content: fruit6 },
    { id: 7, content: fruit7 },
    { id: 8, content: fruit8 },
    { id: 9, content: fruit9 },
    { id: 10, content: fruit10 },
  ]);
  const [Id, setId] = useState(null);

  const handleDrag = (e, itemId) => {
    setId(e.target.id)
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", itemId);
  };

  const handleDragOver = (e, targetItemId) => {
    e.preventDefault();
    // console.log("the e.target is", e.target);

    const sourceItemId = Id
    // console.log("the sourceItemId is", sourceItemId);
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
            handleDragOver(e, item.id);
          }}
          // onDrop={(e) => handleDrop(e, item.id)}
          onDragStart={(e) => handleDrag(e, item.id)}
          className={`h-32 flex justify-center items-center border border-sky-500 bg-gray-800 ${
            index === 0 ? "col-span-2 row-span-2 h-[16.4rem]" : ""
          }`}
        >
          <img id={item.id} src={item.content} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
