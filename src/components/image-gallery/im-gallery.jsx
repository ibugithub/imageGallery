import "./im-gallery.css";
import { useState } from "react";
import { DragFunctions } from "./lib/dragFunctions";
import checkImg from "./assets/check.png";
import bin from "./assets/box.png";

const Gallery = () => {
  const { items, setItems, handleDrag, handleDragOver, handleDragEnd } = DragFunctions();
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
  const handleBin = () => { 
    const updatedItems = items.filter((item) => !selectedItems.includes(item));
    setItems(updatedItems);
    setSelectedItems([]);
  }

  return (
    <>
      <div className= {` flex justify-between px-20 py-10 items-end ${selectedItems <= 0 ? "invisible" : ""} `}>
        <div className="selection-container flex gap-1 text-xl">
          <div className="counter text-[#41a3bb]">{selectedItems.length}</div>
          <div className="msg text-[#d89365]">Images Selected</div>
        </div>
        <div className="delete-button ">
          <img className="h-10 cursor-pointer" alt="delete button" src={bin}  onClick={handleBin}/>
        </div>
      </div>
      <div
        draggable={false}
        className="px-20 grid grid-cols-5 grid-flow-row gap-6 text-center max-sm:grid-cols-2 max-sm:p-10 cursor-pointer"
      >
        {items.map((item, index) => (
          <div
          draggable={index === items.length -1 ? false : true}
            key={item.id}
            id={item.id}
            className={`${
              index === 0 ? "col-span-2 row-span-2 firstItem " : ""
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
            <img
              className={`cardImg ${index === items.length - 1 ? "max-h-[100px]" : "img" }`}
              src={item.content}
              alt=""
              draggable={false}
            />
            <div
              className={`${hoveredItem === item.id && index !== items.length - 1 ? "empty-checkbox" : ""}`}
              onClick={() => handleClick(item)}
            ></div>
            <img
              src={checkImg}
              alt="this is the check iamge"
              className={`${selectedItems.includes(item) ? "clicked" : "hide"}`}
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
