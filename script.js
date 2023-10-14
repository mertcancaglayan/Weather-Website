let weatherImage = document.querySelector(".weather-image")
let searchElement = document.querySelector(".search-input");
let searchButtonElement = document.querySelector(".search-button");
let searchFormElement = document.querySelector(".search");


const apiKey = "98d1da12c9a9a314ccfffb4f465d98d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    let data = await response.json();
    searchFormElement.reset()

    if (data.name === undefined) {
        return alert("Invalide Location Name")
    } 
    
    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".current-degree").innerHTML = `${Math.round(data.main.temp)}°`;
    document.querySelector(".humidity").innerHTML = `% ${data.main.humidity}`;
    document.querySelector(".wind-speed").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".current-status").innerHTML = data.weather[0].main;

    if (data.weather[0].main === "Clear") {
        weatherImage.src = "images/sunny.png"
    } else if (data.weather[0].main === "Clouds"){
        weatherImage.src = "images/cloudy.png"
    } else if ((data.weather[0].main === "Rain" || "Drizzle")){
        weatherImage.src = "images/rainy.png"
    }else if (data.weather[0].main === "Mist"){
        weatherImage.src = "images/fog.png"
    }else if (data.weather[0].main === "Snow"){
        weatherImage.src = "images/snowy.png"
    }
}


searchButtonElement.addEventListener("click", (event) => {
    event.preventDefault()
    checkWeather(searchElement.value)
})




