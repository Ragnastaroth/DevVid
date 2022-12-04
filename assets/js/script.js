import movies from './movieList.js';

const suggestionContainer = document.getElementById("suggestionContainer");
const newsContainer = document.getElementById("newsContainer");
const classicContainer = document.getElementById("classicContainer");
const newShowContainer = document.getElementById("newShowContainer");
const loginPop = document.getElementById("loginPop");
const formContainer = document.getElementById("formContainer");


function showSuggestion() {
    
    movies.forEach(movie =>{

        let suggestion = document.createElement("div");
        suggestion.classList.add("suggestion")

        let titleContainer = document.createElement("h3");
        let titleContent = document.createTextNode(movie.name)
        titleContainer.appendChild(titleContent);

        let imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", movie.img);

        suggestion.appendChild(titleContainer);
        suggestion.appendChild(imgContainer);
        suggestionContainer.appendChild(suggestion);
    })
}

function showNews() {
    
    movies.forEach(movie =>{

        let news = document.createElement("div");
        news.classList.add("news")

        let titleContainer = document.createElement("h3");
        let titleContent = document.createTextNode(movie.name)
        titleContainer.appendChild(titleContent);

        let imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", movie.img);

        news.appendChild(titleContainer);
        news.appendChild(imgContainer);
        newsContainer.appendChild(news);
    })
}

function showClassics() {
    
    movies.forEach(movie =>{

        let classics = document.createElement("div");
        classics.classList.add("classics")

        let titleContainer = document.createElement("h3");
        let titleContent = document.createTextNode(movie.name)
        titleContainer.appendChild(titleContent);

        let imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", movie.img);

        classics.appendChild(titleContainer);
        classics.appendChild(imgContainer);
        classicContainer.appendChild(classics);
    })
}

async function fetchShows() {
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
    showImg.classList.add("showPic");

    showContainer.appendChild(showTitle);
    showContainer.appendChild(showImg);
    newShowContainer.appendChild(showContainer);

    })
}

showSuggestion();

showNews();

showClassics();

fetchShows().then(show => displayShows(show));