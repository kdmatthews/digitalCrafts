
const mainContainer = document.querySelector(".main-container")

const searchButton = document.querySelector(".search-button");
async function weatherWidget(){
    mainContainer.innerHTML="";
    const city = document.querySelector(".input").value;
    const apiKey = "ff1cadec65d9f10c3aafc2a01b14612c"
    const weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`; 

    const weatherData = await fetch(weatherurl +`&q=${city}`);
    const jsonWeatherData = await weatherData.json();
    const tempdiv = document.createElement('div');
    tempdiv.className = "tempdiv";
    const temp = document.createElement('h2');
    temp.innerHTML = `Temperature in ${city}:   ${jsonWeatherData.main.temp}`;
    const feelsLike = document.createElement('h2');
    feelsLike.innerHTML = `Feels Like:   ${jsonWeatherData.main.feels_like}`;


    mainContainer.append(tempdiv)
    tempdiv.append(temp, feelsLike)
    
    
       
 }

    
 
        
        

searchButton.addEventListener("click", () => weatherWidget());
