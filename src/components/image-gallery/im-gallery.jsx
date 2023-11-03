import "./im-gallery.css"
import { DragFunctions } from "./lib/dragFunctions";

const Gallery = () => {
  const { items, handleDrag, handleDragOver, handleDragEnd } = DragFunctions();
  return (
    <div
      draggable={false}
      className="p-28 grid grid-cols-5 grid-flow-row gap-6 text-center max-sm:grid-cols-2 max-sm:p-10 cursor-grab"
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
