let outerGrid = document.querySelector(".outer-grid");
let nav = document.querySelector(".hide-nav");
let key = true;
function toggleNav() {
  outerGrid.classList.toggle("outer-grid-expanded");
  nav.classList.toggle("hide-nav");
}
