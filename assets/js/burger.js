let burger = document.getElementById("burger");
console.log(burger)
let burgerList = document.getElementById("burgerList");


function displayNav() {

    burgerList.classList.remove("dNone");
}


burger.addEventListener("click", displayNav);