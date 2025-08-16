//GSAP FOG

// This sets the initial state of the element with the class “fog”.
gsap.set(".fog",{
    scale: 1.25,
    y: "0",
});

// This animates the fog element by moving it up and slightly shrinking it, and it loops infinitely.
gsap.to(".fog", {
    duration: 10,
    y: "-=30",
    scale: 1.1,
    repeat: -1,
    ease: "linear"
},{
    duration: 10,
    scale: 1.5,
    ease: "linear"
});

// OVERLAY MENU

// These variables target elements used for the overlay menu.
const menu = document.querySelector(".js-menu");
const menu_open = document.querySelector(".js-menu-open");
const menu_closed = document.querySelector(".js-menu-close");
const menu_links = document.querySelectorAll(".js-menu a");

// These are event listeners that make the overlay mobile/tablet menu work.
// When the menu open icon is clicked, the "open" class is added to display the menu, which "opens" it.
menu_open.addEventListener("click", () => {
	menu.classList.add("open");
});

// When the close icon is clicked, the "open" class is removed to hide the menu.
menu_closed.addEventListener("click", () => {
	menu.classList.remove("open");
});

// When any menu link is clicked, the "open" class is also removed to close the menu.
menu_links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});