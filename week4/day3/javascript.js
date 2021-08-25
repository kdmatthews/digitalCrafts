async function getPics(){
    const pics = await fetch("https:/cataas.com/cat?json=true");
    const jsonPics = await pics.json();
    const catPic = document.createElement("img");

    const container = document.querySelector(".images");
    catPic.src = ("https:/cataas.com" + jsonPics.url);
    container.append(catPic);
    console.log(jsonPics);
    return jsonPics;


}
const button = document.querySelector(".random-cat");
button.addEventListener("click", () => getPics());
