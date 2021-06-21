const hamburgerButton = document.querySelector("nav button");
const menu = document.querySelector(".menu");
const closeButton = menu.querySelector("button");
let activeMenuButton = document.querySelector(".menu-button");
let menuItems;

//When mobile menu is expanded/collapsed, style menu items in h3/span respectively
function styleMenuItems(newElement, oldElement) {
  menuItems = menu.querySelectorAll(oldElement);
  menuItems.forEach(menuItem => {
    const element = document.createElement(newElement);
    element.textContent = menuItem.textContent;
    menuItem.replaceWith(element);
  });
}

// When mobile menu is collapsed/expanded, the active menu button (i.e. the button that should receive action) is the hamburger/close button respectively.
function switchActiveMenuButton() {
  menu.classList.toggle("mobile-menu");
  activeMenuButton.classList.toggle("menu-button");
  if (activeMenuButton == closeButton) {
    hamburgerButton.classList.toggle("menu-button");
    styleMenuItems("span", "h3");
  } else {
    closeButton.classList.toggle("menu-button");
    styleMenuItems("h3", "span");
  }
  activeMenuButton = document.querySelector(".menu-button")
  activeMenuButton.addEventListener("click", switchActiveMenuButton);
}

activeMenuButton.addEventListener("click", switchActiveMenuButton);

