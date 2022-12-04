let usersContainer = document.getElementById("usersContainer");
let moviesContainer = document.getElementById("moviesContainer");
import movies from "./movieList.js";
import users from "./usersList.js";

function displayMovies() {

    movies.forEach(movie =>{

        let movieContainer = document.createElement("article");
        movieContainer.classList.add("movieContainer");

        let movieTitle = document.createElement("h3");
        let movieTitleContent = document.createTextNode(movie.name);
        movieTitle.appendChild(movieTitleContent);

        let moviePic = document.createElement("img");
        moviePic.setAttribute("src", movie.img);

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("adminBtn");
        removeBtn.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';

        let modifyBtn = document.createElement("button");
        modifyBtn.classList.add("adminBtn");
        modifyBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'

        moviesContainer.appendChild(movieContainer);
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(moviePic);
        movieContainer.appendChild(removeBtn);
        movieContainer.appendChild(modifyBtn);

        function removeMovie() {
            movieContainer.remove();
        }

        removeBtn.addEventListener("click", removeMovie);
        
    })

}



function displayUsers() {

    users.forEach(user =>{

        let userContainer = document.createElement("article");
        userContainer.classList.add("userContainer");

        let userfName = document.createElement("h3");
        let userfNameContent = document.createTextNode(user.fname);
        userfName.appendChild(userfNameContent);

        let userlName = document.createElement("h3");
        let userlNameContent = document.createTextNode(user.lname);
        userlName.appendChild(userlNameContent);

        let userPic = document.createElement("span");
        userPic.innerHTML = '<i class="fa-solid fa-user"></i>'
        userPic.classList.add("userPic");

        let userMail = document.createElement("h3");
        let userMailContent = document.createTextNode(user.mail);
        userMail.appendChild(userMailContent);

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("adminBtn");
        removeBtn.classList.add("adminBtn");
        removeBtn.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';

        let modifyBtn = document.createElement("button");
        modifyBtn.classList.add("adminBtn");
        modifyBtn.classList.add("adminBtn");
        modifyBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'

        usersContainer.appendChild(userContainer);
        userContainer.appendChild(userfName);
        userContainer.appendChild(userlName);
        userContainer.appendChild(userPic);
        userContainer.appendChild(userMail);
        userContainer.appendChild(removeBtn);
        userContainer.appendChild(modifyBtn);

        function removeUser() {
            userContainer.remove();
        }

        removeBtn.addEventListener("click", removeUser);
        
    })

}


displayMovies();
displayUsers();