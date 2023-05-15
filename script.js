const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-toggle i");
const menuDrop = document.querySelector(".menu-drop");

menuToggle.onclick = () => {
  menuDrop.classList.toggle("active");

  const isOPen = menuDrop.classList.contains("active");
  menuIcon.classList = isOPen ? "fa fa-bars" : "fa fa-close";
};
