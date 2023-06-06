let menuBars = document.querySelector(".fa-bars");
let closeBars = document.querySelector(".fa-circle-xmark");
let menu = document.querySelector(".main-list");
let stockVal = document.querySelector(".stock-val");
menuBars.addEventListener("click", () => {
    menu.classList.toggle("active")
})
closeBars.addEventListener("click", () => {
    menu.classList.remove("active")
})