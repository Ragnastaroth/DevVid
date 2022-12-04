let id = localStorage.getItem("showId");

let showTitle = document.getElementById("showTitle");
let showImg = document.getElementById("showImg");
let showRating = document.getElementById("showRating");
let showResumeContainer = document.getElementById("showResume");
let showGenre = document.getElementById("showGenre");
let showSeasons = document.getElementById("showSeasons");
let seasonsBtn = document.getElementById("seasonBtn");
let showSeasonsDisplayer = document.getElementById("showSeasonsDisplayer");
let showEpisodes = document.getElementById("showEpisodes");
let showEpisodesDisplayer = document.getElementById("showEpisodesDisplayer");



async function showFetchById() {
    let response = await fetch("https://api.tvmaze.com/shows/"+id);
    if(response.ok === true) {
        let show = await response.json();
        return show;
    }
}

function showInfosDisplay(show) {

    let showTitleContent = document.createTextNode(show.name)
    showTitle.appendChild(showTitleContent);

    showImg.setAttribute("src", show.image.original)

    let showRatingContent = document.createTextNode(show.rating.average)
    showRating.appendChild(showRatingContent);

    let showGenreContent = document.createTextNode(show.genres);
    showGenre.appendChild(showGenreContent);

    showResumeContainer.innerHTML = show.summary;
}



async function fetchShowSeasons() {
    let seasonsApi = await fetch("https://api.tvmaze.com/shows/"+ id +"/seasons");
    if(seasonsApi.ok === true) {
        let seasons = await seasonsApi.json();
        return seasons;
    }
}




function displaySeasonsInfos(seasons) {


    seasons.forEach(season =>{
        let seasonContainer = document.createElement("div");
        seasonContainer.classList.add("seasonContainer");

        let seasonImg = document.createElement("img");
        seasonImg.setAttribute("src", season.image.medium);

        let seasonEpisodeCount = document.createElement("span");
        let seasonEpisodeCountContent = document.createTextNode(season.episodeOrder + " épisodes dans cette saison");
        seasonEpisodeCount.appendChild(seasonEpisodeCountContent);

        let episodeBtn = document.createElement("button");
        let episodeBtnContent = document.createTextNode("Voir les épisodes de cette saison");
        episodeBtn.classList.add("episodesBtn");
        episodeBtn.value = season.id;
        episodeBtn.appendChild(episodeBtnContent);

        seasonContainer.appendChild(seasonImg);
        seasonContainer.appendChild(seasonEpisodeCount);
        seasonContainer.appendChild(episodeBtn);
        showSeasons.appendChild(seasonContainer);
})

    function displaySeasons() {
    showSeasonsDisplayer.classList.toggle("dNone");
    }

    seasonsBtn.addEventListener("click", displaySeasons);

    let episodesBtns = document.querySelectorAll('.episodesBtn');

    function displayEpisodes() {
        showEpisodesDisplayer.classList.toggle("dNone");
    }

   
    episodesBtns.forEach( (btn) =>{
        btn.addEventListener("click", ()=>{
            fetchEpisodesBySeason(btn.value).then(episodes => displayEpisodesBySeason(episodes));
        }) 
        btn.addEventListener("click", displayEpisodes);
    })

    
}

async function fetchEpisodesBySeason(btnValue) {
    // let episodesApi = '';
    episodesApi = await fetch("https://api.tvmaze.com/seasons/"+ btnValue +"/episodes");
    if(episodesApi.ok === true) {
        // let episodes = '';
        episodes = await episodesApi.json();
        console.log(episodes)
        return episodes;
    }
}

function displayEpisodesBySeason(episodes) {
    showEpisodes.innerHTML = ''; // string vide pour reset le contenu !!!
    episodes.forEach(episode =>{

    let episodeContainer = document.createElement("div");
    episodeContainer.classList.add("episodeContainer");

    let episodeTitle = document.createElement("h3");
    let episodeTitleContent = document.createTextNode(episode.name)
    episodeTitle.appendChild(episodeTitleContent);

    let episodeImg = document.createElement("img");
    episodeImg.setAttribute("src", episode.image.medium);

    let episodeSummary = document.createElement("p");
    episodeSummary.innerHTML = episode.summary;

    let watchBtn = document.createElement("button");
    let watchBtnContent = document.createTextNode("Regarder cet épisode");
    watchBtn.appendChild(watchBtnContent);
    watchBtn.classList.add("watchBtn");

    showEpisodes.appendChild(episodeContainer);
    episodeContainer.appendChild(episodeImg);
    episodeContainer.appendChild(episodeTitle);
    episodeContainer.appendChild(episodeSummary);
    episodeContainer.appendChild(watchBtn);

    })
}

showFetchById().then(show => showInfosDisplay(show));
fetchShowSeasons().then(seasons => displaySeasonsInfos(seasons));
