
/* Select open menu button */
let menuBtnOpen = document.querySelector(".js-menu-btn-open");

/* Select close menu button */
let menuBtnClose = document.querySelector(".js-menu-btn-close");

/* Add event listener on open menu button*/
menuBtnOpen.addEventListener("click", (e) => {
    menuBtnOpen.setAttribute("aria-expanded", "true")
    menuBtnClose.setAttribute("aria-expanded", "true")
})

/* Add event listener on close menu button*/
menuBtnClose.addEventListener("click", (e) => {
    menuBtnOpen.setAttribute("aria-expanded", "false")
    menuBtnClose.setAttribute("aria-expanded", "false")
})