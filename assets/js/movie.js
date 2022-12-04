let id = localStorage.getItem("movieId");
import movies from "./movieList.js";
let movieDetails = document.getElementById("movieDetails");

function displayMovie(movies) {

    for(let key of id){

    let movieTitle = document.createElement("h2");
    let movieTitleContent = document.createTextNode(key.name)
    console.log(id.name)
    movieTitle.appendChild(movieTitleContent);


    movieDetails.appendChild(movieTitle);
    }
}

displayMovie();