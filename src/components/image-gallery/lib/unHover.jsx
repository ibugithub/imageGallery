const UnHover = () => {
  const checkedItem = document.querySelector(".empty-checkbox");
  if (checkedItem != null) {
    document
      .querySelector(`.empty-checkbox`)
      .classList.remove("empty-checkbox");
  }
};

export default UnHover;