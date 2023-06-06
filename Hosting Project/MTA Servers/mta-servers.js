let menuBars = document.querySelector(".fa-bars");
let closeBars = document.querySelector(".fa-circle-xmark");
let menu = document.querySelector(".main-list");
let stockVal = document.querySelector(".stock-val");
if(stockVal.textContent <= 0){
    document.getElementById("stock-info").style = "color: #FF0800"
    document.getElementById("stock-info").innerHTML = "Stock Off : " + stockVal.textContent
}else{
    document.getElementById("stock-info").style = "color: #39FF14"
    document.getElementById("stock-info").innerHTML = "Stock On : " + stockVal.textContent 
}
menuBars.addEventListener("click", () => {
    menu.classList.toggle("active")
})
closeBars.addEventListener("click", () => {
    menu.classList.remove("active")
})