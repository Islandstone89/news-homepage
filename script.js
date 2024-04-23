
/* Select open menu button */
let menuBtnOpen = document.querySelector(".js-menu-btn-open");

/* Select close menu button */
let menuBtnClose = document.querySelector(".js-menu-btn-close");

/* Select overlay */
let overlay = document.querySelector(".overlay");

/* Function for opening the menu */
function openMenu() {
    menuBtnOpen.setAttribute("aria-expanded", "true")
    menuBtnClose.setAttribute("aria-expanded", "true")
}

/* Function for closing the menu */
function closeMenu() {
    menuBtnOpen.setAttribute("aria-expanded", "false")
    menuBtnClose.setAttribute("aria-expanded", "false")
}

/* Add event listener on open menu button */
menuBtnOpen.addEventListener("click", openMenu);

/* Add event listener on close menu button */
menuBtnClose.addEventListener("click", closeMenu); 

/* Add event listener on overlay */
overlay.addEventListener("click", closeMenu);