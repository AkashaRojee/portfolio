const mobileMenuIcon = document.querySelector(".mobil-menu-icon");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

mobileMenuIcon.addEventListener("click", (e) => {
  document.getElementById("mobile-menu").classList.add("display-unset");
});

mobileMenuClose.addEventListener("click", (e) => {
  document.getElementById("mobile-menu").classList.remove("display-unset");
});
