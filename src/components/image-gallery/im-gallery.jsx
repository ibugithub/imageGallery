import "./im-gallery.css";
import { useState } from "react";
import { DragFunctions } from "./lib/dragFunctions";
import checkImg from "./assets/check.png";

const Gallery = () => {
  const { items, handleDrag, handleDragOver, handleDragEnd} = DragFunctions();
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleClick = (item) => {
    const itemIndex = selectedItems.indexOf(item);
    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(itemIndex, 1);
      setSelectedItems(updatedItems);
    }
  };

  return (
    <div
      draggable={false}
      className="p-20 grid grid-cols-5 grid-flow-row gap-6 text-center max-sm:grid-cols-2 max-sm:p-10 cursor-pointer"
    >
      {items.map((item, index) => (
        <div
          draggable={true}
          key={item.id}
          id={item.id}
          className={`${
            index === 0 ? "col-span-2 row-span-2 firstItem" : ""
          } flex justify-center items-center card-container relative`}
          onDragOver={(e) => {
            handleDragOver(e, item.id);
          }}
          onDragStart={(e) => handleDrag(e, item.id)}
          onDragEnd={(e) => handleDragEnd(e)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => {
            setHoveredItem(null);
          }}
        >
          <img className="img cardImg" src={item.content} alt="" draggable={false} />
          <div
            className={`${hoveredItem === item.id ? "empty-checkbox" : ""}`}
            onClick={() => handleClick(item)}
          ></div>
          <img src={checkImg} alt="this is the check iamge" className={`${selectedItems.includes(item) ? "clicked" : "hide"}`} onClick={() => handleClick(item)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
