let userName = document.getElementById("name");
let pw = document.getElementById("pw");
let loginBtn = document.getElementById("loginBtn");
let loginPop = document.getElementById("loginPop");
let loginContainer = document.getElementById("loginContainer");
let userNameDisplay = document.getElementById("userNameDisplay");

function displayLogin() {
    formContainer.classList.toggle("dNone");
}

loginPop.addEventListener("click", displayLogin);


function accAuth() {

    if(userName.value === "admin" && pw.value === "admin") {

        window.location.href = "admin.html";
    }

    else {

        userNameDisplay.classList.remove("dNone");
        loginContainer.classList.add("dNone");
        let userNameDisplayed = document.createElement("p");
        let userNameContent = document.createTextNode("Bienvenue "+userName.value +" :)");
        userNameDisplayed.appendChild(userNameContent);
        userNameDisplay.appendChild(userNameDisplayed);
    }
}

loginBtn.addEventListener("click", accAuth);


