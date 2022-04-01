const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const WEATHER_API_KEY = config.apikey;

function onGeoSuccess(positionInfo){
    const lat = positionInfo.coords.latitude;
    const lon = positionInfo.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find u");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);