//GSAP FOG

gsap.set(".fog",{
    scale: 1.25,
    y: "0",
});

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

// Variables

const menu = document.querySelector(".js-menu");
const menu_open = document.querySelector(".js-menu-open");
const menu_closed = document.querySelector(".js-menu-close");
const menu_links = document.querySelectorAll(".js-menu a");

// Event Listeners

menu_open.addEventListener("click", () => {
	menu.classList.add("open");
});

menu_closed.addEventListener("click", () => {
	menu.classList.remove("open");
});

menu_links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});