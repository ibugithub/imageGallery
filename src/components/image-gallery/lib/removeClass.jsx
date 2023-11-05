// This module is for removing class from class list
const RemoveClass = (cls) => {
  const clss = cls.split (' ');
  clss.forEach(cls => {
    const item = document.querySelector(`.${cls}`);
    if (item != null) {
      item.classList.remove(cls);
    }
  } );
};

export default RemoveClass;