// mobile view and system view
var body = document.querySelector("body");
var navbar = document.querySelector(".nav");
var menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("scroll")
  menu.classList.toggle("active");
});
