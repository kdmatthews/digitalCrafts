console.log('hello')
async function getFoxPics(){
    // 1. create a variable
    const foxPics = await fetch("https://randomfox.ca/floof/");
    const jsonFox = await foxPics.json();
    const foxParagraph = document.createElement('a');
    const foxPic = document.createElement("img");
    const foxContainer = document.querySelector(".fox-images");
   
    foxParagraph.href = jsonFox.link;
    foxParagraph.innerText = "Fox Pic";
    foxPic.src = jsonFox.image;
    foxPic.height = "400";
    foxPic.width = "600";
    foxContainer.append(foxPic, foxParagraph);
    
    console.log(jsonFox);
    return jsonFox;
}

const foxButton = document.querySelector(".get-fox-button");
foxButton.addEventListener("click", () => getFoxPics());


