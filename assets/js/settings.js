let sliders = document.querySelectorAll(".slider");

function activateSetting(sliders) {

    for( i = 0 ; i < sliders.length ; i++) {

        sliders[i].classList.toggle("green");
    }
}

sliders.addEventListener("click", activateSetting);



