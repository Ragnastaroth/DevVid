const showsContainer = document.getElementById("showsContainer");
const dramasContainer = document.getElementById("dramaContainer");
const sfsContainer = document.getElementById("sfsContainer");
const thrillersContainer = document.getElementById("thrillersContainer");

async function showsFetch() {
    let response = await fetch("https://api.tvmaze.com/shows");
    if(response.ok === true) {
        let shows = await response.json();
        return shows;
    }
}

function displayShows(shows) {

    shows.forEach(show =>{

    const showContainer = document.createElement("div");
    showContainer.classList.add("showContainer");

    let showTitle = document.createElement("h3");
    let showTitleContent = document.createTextNode(show.name);
    showTitle.appendChild(showTitleContent);
    
    let showImg = document.createElement("img");
    showImg.setAttribute("src", show.image.medium);

    let showBtn = document.createElement("button");
    let showBtnContent = document.createTextNode("En savoir plus");
    showBtn.setAttribute("value", show.id)
    showBtn.appendChild(showBtnContent);

    showContainer.appendChild(showTitle);
    showContainer.appendChild(showImg);
    showContainer.appendChild(showBtn);
    showsContainer.appendChild(showContainer);

    function displayShowPage() {
        let value = show.id;
        localStorage.setItem("showId", value);
        document.location.href = "show.html";
    }

    showBtn.addEventListener("click", displayShowPage);
    })
}


showsFetch().then(show => displayShows(show));