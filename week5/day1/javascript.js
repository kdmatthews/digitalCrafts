const searchContainer = document.querySelector(".main");
const searchButton = document. querySelector(".search-button")
const apikey = `AIzaSyB5C4BKB9gVxy93aRG6oJkqUw25PqZYA7Y`

async function searchBooks(){
    searchContainer.innerHTML = ""
    const searchInput = document.querySelector(".input").value;

    const bookData = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyB5C4BKB9gVxy93aRG6oJkqUw25PqZYA7Y`)
    const bookDataJson = await bookData.json();
    
    
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
        console.log(item.saleInfo.buyLink)
        const buyLink = document.createElement('a')
        buyLink.href = item.saleInfo.buyLink
        buyLink.innerHTML = "Buy Book Here"
        console.log(buyLink)

       
       
        bookDataContainer.append(title, imageLink, authors, buyLink);
        searchContainer.append(bookDataContainer);
        
    }
}
       
searchButton.addEventListener("click", () => searchBooks());

// const getBooks = document.querySelector('.getBooks')
// async function getSpecificBooks(){
//     const book1 = await fetch (`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${apikey}`)
// }