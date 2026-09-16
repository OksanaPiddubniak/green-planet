import "./style.css";

const headerNav = document.querySelector(".header-nav");
const menuOpen = document.querySelector(".menu-open");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("active-menu");
  headerNav.classList.toggle("active");
});
