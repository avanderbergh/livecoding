import { key } from "./keys.js";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchButton = document.querySelector("#search-button");
const currentLocationButton = document.querySelector("#current-location-button");


searchButton.addEventListener("click", e => {
    const city = document.querySelector("#city").value
    fetch(`${baseURL}q=${city}&appid=${key}`)
        .then(response => response.json())
        .then(result => displayWeather(result));
})

currentLocationButton.addEventListener("click", e => {
    navigator.geolocation.getCurrentPosition(async geo => {
        const response = await fetch(`${baseURL}lat=${geo.coords.latitude}&lon=${geo.coords.longitude}&appid=${key}`)
        const result = await response.json();
        displayWeather(result);
    });
});

const displayWeather = result => {
    const currentWeatherContainer = document.querySelector("#current-weather-container");
    console.log(result);
    
    const icon = result.weather[0].icon
    document.querySelector("img").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
}