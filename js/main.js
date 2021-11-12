var navbarLinks = document.querySelectorAll(".navbar_links ul li a");
var subMenu = document.getElementById("sub_menu");

navbarLinks.forEach((el) => {
  document.addEventListener("mouseenter", el, showSubMenu);
});

function showSubMenu() {
  subMenu.style.display = "block";
}
function hideSubMenu() {
  setTimeout(() => {
    subMenu.style.display = "none";
  }, 200);
}
// console.log(navbarLinks);
