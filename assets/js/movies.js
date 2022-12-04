const moviesContainer = document.getElementById("moviesDisplay");

import movies from './movieList.js';

function displayMoviesByGenre() {

    movies.forEach((movie, k) =>{

        let movieContainer = document.createElement("article");
        movieContainer.classList.add("movieContainer");

        let movieGenre = document.createElement("h2");
        let movieGenreContent = document.createTextNode(movie.cat);
        movieGenre.appendChild(movieGenreContent);

        let movieTitle = document.createElement("h3");
        let movieTitleContent = document.createTextNode(movie.name);
        movieTitle.appendChild(movieTitleContent);

        let moviePic = document.createElement("img");
        moviePic.setAttribute("src", movie.img);
        moviePic.setAttribute("value", movie.id)

        moviesContainer.appendChild(movieGenre);
        moviesContainer.appendChild(movieContainer);
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(moviePic);      
        
        function displayMoviePage() {

            let id = k;
            localStorage.setItem("movieId", id);
            document.location.href = "moviePage.html";
        }

        moviePic.addEventListener("click", displayMoviePage);
    })

}

displayMoviesByGenre();


