const apiKey = "c3ed5183";
const omdburl = `https://www.omdbapi.com/?apikey=${apiKey}`;

const mainContainer = document.querySelector('.main-container')
const searchButton = document.querySelector('.search-button')

const movieContainer = document.createElement("div")
movieContainer.className = movieContainer
const movieLocation = document.querySelector(".movieContainer")

async function movieSearch(){
    const input = document.querySelector(".input").value;
    const fetchMovies = await fetch(omdburl + `&s=${input}`);
    const jsonMovies = await fetchMovies.json();
    console.log("hello");

    for (const movie of jsonMovies.Search){
        // const movieDiv = document.createElement("div")
        const titleMovie = document.createElement('h2');
        titleMovie.innerText = movie.Title;
        
        const posterMovie = document.createElement('img');
        posterMovie.src = movie.Poster;

        const yearMovie = document.createElement('h4');
        yearMovie.innerText = movie.Year;

        mainContainer.append(titleMovie, posterMovie, yearMovie)
    }
}

searchButton.addEventListener("click", () => movieSearch());