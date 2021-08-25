async function getPics(){
    const pics = await fetch("https://ghibliapi.herokuapp.com");
    const jsonPics = await pics.json();

    console.log(jsonPics)
    return jsonPics;


}