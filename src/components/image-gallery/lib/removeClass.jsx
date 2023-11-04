const RemoveClass = (cls) => {
  console.log ('the cls is', cls);
  const clss = cls.split (' ');
  clss.forEach(cls => {
    const item = document.querySelector(`.${cls}`);
    console.log ('the item is', item);
    if (item != null) {
      item.classList.remove(cls);
    }
  } );
};

export default RemoveClass;