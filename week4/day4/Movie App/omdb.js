const apiKey = "c3ed5183";
const omdburl = `https://www.omdbapi.com/?apikey=${apiKey}`;

const mainContainer = document.querySelector('.main-container')
const searchButton = document.querySelector('.search-button')


const movieLocation = document.querySelector(".movieContainer")

async function movieSearch(){
    mainContainer.innerHTML = "";
    const input = document.querySelector(".input").value;
    const fetchMovies = await fetch(omdburl + `&s=${input}`);
    const jsonMovies = await fetchMovies.json();
    console.log("hello");
    
   
    for (const movie of jsonMovies.Search){
        
        const movieContainer = document.createElement("div")
        movieContainer.className = "movieContainer";
        const titleMovie = document.createElement('h2');
        
        
        const posterMovie = document.createElement('img');
        posterMovie.innerHTML = "";
        

        const yearMovie = document.createElement('h4');
        yearMovie.innerHTML = "";
        movieContainer.append(titleMovie, posterMovie, yearMovie);

        titleMovie.innerText = movie.Title;
        posterMovie.src = movie.Poster;
        yearMovie.innerText = movie.Year;
        

        movieContainer.append(titleMovie, posterMovie, yearMovie);
        mainContainer.append(movieContainer);
        
    }
}



searchButton.addEventListener("click", () => movieSearch());
