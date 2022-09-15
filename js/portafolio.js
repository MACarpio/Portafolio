const $ = (id) => document.querySelector(id);
const $$ = (id) => document.querySelectorAll(id);

const btnMenu = $("#btn-menu");
const menu = $("#menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
