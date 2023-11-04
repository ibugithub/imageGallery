import "./im-gallery.css";
import { useState } from "react";
import { DragFunctions } from "./lib/dragFunctions";

const Gallery = () => {
  const { items, handleDrag, handleDragOver, handleDragEnd, UnHover } = DragFunctions();
  const [clickedItem, setClickedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleClick = (item) => {
    setClickedItem(item);
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
          onMouseLeave={() => { UnHover(); setHoveredItem(null);}}
        >
          {/* <div
            draggable={false}
            className={`image-container relative h-full flex justify-center items-center ${clickedItem === item ? "clicked" : ""}`}
            onClick={() => handleClick(item)}
          > */}
          <img src={item.content} alt="" draggable={false} />
          <div
            className={`${hoveredItem === item.id ? "empty-checkbox" : ""}`}
          ></div>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
