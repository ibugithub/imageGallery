// This component will show the main image gallery

import "./im-gallery.css";
import { useState } from "react";
import { DragFunctions } from "./lib/dragFunctions";
import checkImg from "./assets/check.png";
import bin from "./assets/bin.png";
import box from "./assets/box.png";

const Gallery = () => {
  const { items, setItems, handleDrag, handleDragOver, handleDragEnter, handleDrop, handleDragEnd } =
    DragFunctions();
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function to handle selecting/deselecting an item
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

  // Function to handle deleting selected items
  const handleBin = () => {
    const updatedItems = items.filter((item) => !selectedItems.includes(item));
    setItems(updatedItems);
    setSelectedItems([]);
  };

  return (
    <>
      <div
        className={` flex justify-between px-20 pb-10 pt-5 items-end ${
          selectedItems <= 0 ? "invisible" : ""
        } `}
      >
        <div className="selection-container flex gap-2  items-center font-serif relative">
          <div
            className={`${
              selectedItems.length > 1
                ? "hide"
                : "bg-gray w-5 rounded-sm  h-5 bg-[#adebbd]"
            }`}
            onClick={() => {
              setSelectedItems(items.slice(0, items.length - 1));
            }}
          ></div>
          <img
            src={checkImg}
            alt="this is the check iamge"
            className={`${
              selectedItems.length > 1 ? " bg-[#adebbd] w-5 h-5" : "hide"
            }`}
            onClick={() => {
              setSelectedItems([]);
            }}
          />

          <div className="counter text-[#07110a]">{selectedItems.length}</div>
          <div className="msg text-[#43a05c] text-xl ">Images Selected</div>
        </div>
        <div className="delete-button ">
          <img
            className="h-10 cursor-pointer animate-bounce"
            alt="delete button"
            src={bin}
            onClick={handleBin}
          />
        </div>
      </div>
      <div
        draggable={false}
        className="px-20 grid grid-cols-5 grid-flow-row gap-6 text-center max-sm:grid-cols-2 max-sm:p-10 cursor-pointer pb-40"
      >
        {items.map((item, index) => (
          <div
            draggable={index === items.length - 1 ? false : true}
            key={item.id}
            id={index === items.length - 1 ? 'last-el' : item.id}
            className={`${
              index === 0 ? "col-span-2 row-span-2 firstItem " : ""
            } flex justify-center items-center card-container relative ${
              items.length === 1 ? "animate-bounce " : ""
            } `}
            onDragOver={(e) => {
              handleDragOver(e, item.id);
            }}
            onDragStart={(e) => handleDrag(e, item.id)}
            onDragEnd={(e) => handleDragEnd(e)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => {
              setHoveredItem(null);
            }}
            onClick={() => {
              if (items.length === 1) {
                console.log("last item clicked", items);
                setSelectedItems(items.slice(0, items.length - 1));
                window.location.reload();
              }
            }}
          >
            <img
              className={`cardImg  ${
                index === items.length - 1 ? "max-h-[4rem]" : "img"
              }`}
              src={item.content}
              alt=""
              draggable={false}
            />
            <div
              className={`${
                hoveredItem === item.id && index !== items.length - 1
                  ? "empty-checkbox"
                  : ""
              }`}
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
        <div className="flex justify-center items-center pt-5">
          <img
            className="h-[4rem] cursor-pointer animate-bounce hidden"
            id="box"
            alt="delete button"
            src={box}
            onClick={handleBin}
            onDrop={(e) => {
              handleDrop(e);
            }}
            onDragOver={(e, id) => {
              handleDragOver(e, id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
