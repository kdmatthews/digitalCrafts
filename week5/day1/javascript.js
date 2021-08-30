const searchContainer = document.querySelector(".search-books");
const searchButton = document. querySelector(".search-button")

async function searchBooks(){
    searchContainer.innerHTML = ""
    const searchInput = document.querySelector(".input").value;
    const apikey = `AIzaSyB5C4BKB9gVxy93aRG6oJkqUw25PqZYA7Y`
    const bookData = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyB5C4BKB9gVxy93aRG6oJkqUw25PqZYA7Y`)
    const bookDataJson = await bookData.json();
    
    
    for (const item of bookDataJson.items){
        
        const volumeInfo = item.volumeInfo
        const title = document.createElement('h2')
        title.innerHTML = volumeInfo.title
        const authors = document.createElement('h3')
        authors.innerHTML = volumeInfo.authors
        console.log(volumeInfo)
        const imageLink = document.createElement('img')
        imageLink.src = volumeInfo.imageLinks.thumbnail
        

        searchContainer.append(title, authors, imageLink)
        
    }
}
       

searchButton.addEventListener("click", () => searchBooks());
