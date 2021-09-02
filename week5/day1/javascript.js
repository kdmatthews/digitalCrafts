
// Inputting HTML 
const searchContainer = document.querySelector(".main");
const searchButton = document. querySelector(".search-button")
const apikey = `AIzaSyB5C4BKB9gVxy93aRG6oJkqUw25PqZYA7Y`

// Here I am creating an async/await function so I can fetch from the google books api
async function searchBooks(){
    searchContainer.innerHTML = ""
    const searchInput = document.querySelector(".input").value;

    const bookData = await fetch (`https://www.googleapis.com/books/v1/volumes?q=kindergarten${searchInput}&key=AIzaSyB5C4BKB9gVxy93aRG6oJkqUw25PqZYA7Y`)
    const bookDataJson = await bookData.json();
    
// This for of loop will allow the users search to be added to the HTML.    
    for (const item of bookDataJson.items){
        const bookDataContainer = document.createElement('div')
        bookDataContainer.className = "book-data"
        const volumeInfo = item.volumeInfo
        const title = document.createElement('h2')
        title.innerHTML = volumeInfo.title
        const authors = document.createElement('h3')
        authors.innerHTML = volumeInfo.authors
        console.log(item)
        const imageLink = document.createElement('img')
        imageLink.src = volumeInfo.imageLinks.thumbnail
        

       
       
        bookDataContainer.append(title, imageLink, authors);
        const buyLink = document.createElement('a')
        buyLink.href = item.saleInfo.buyLink
        
        console.log(buyLink)
//         When fetching from the API I am allowing the link to buy the books to appear. However, many of the books from Google Books API do not have a functional
//         link. This if statement will make it so only the books with the ability to go to a link to purchase will add the buyLink HTML to the document.
        const window = "window.location.href"
        if (buyLink.href != `https://kdmatthews.github.io/KindergartenResources/undefined`){
            buyLink.innerHTML = "Buy Book Here"
            bookDataContainer.append(buyLink)
        }
        searchContainer.append(bookDataContainer);
        
    }
}
// This event listener is where the function is called.
       
searchButton.addEventListener("click", () => searchBooks());


