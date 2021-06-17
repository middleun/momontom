const COORDS = "coords"
const API_KEY = "d95b371efa19fc428f354437b400ca86"

const weatherIcon = document.querySelector(".weather-sec img");
const weatherSpan = document.querySelector(".weather-sec span:nth-of-type(1)");
const regionSpan = document.querySelector(".weather-sec span:nth-of-type(2)");
// console.log (weatherIcon, weatherSpan, regionSpan, tempSpan);

// get weather when coords value is
function getWeather(lat, lon){
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(URL);

    // fetch is kind of promise. it takes some time. 
    // we're gonna fetch URL, then get respose, get the json of the response
    fetch(URL)
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data.name);
        const region = data.name;
        const temperature = data.main.temp;
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
        // console.log(iconURL);
        weatherSpan.innerText = `${weather} / ${temperature}ºC`;
        regionSpan.innerText = `${region}`;
        weatherIcon.src = `${iconURL}`;
    });
    
}

// save coords to localstorage
// prevent to get coords when refresh
function saveCoords(crdsObj){
    localStorage.setItem(COORDS, JSON.stringify(crdsObj));
}

// when loading geolocation is success
function successGeo(position){
    // console.log(position);
    let latitude = position. coords.latitude;
    let longitude = position.coords.longitude;
    // console.log(latitude, longitude);
    let coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

// when loading geolocation is error
function errorGeo(){
    alert("i can't find where you are");
}

// ask coords when coords value isn't
function getCoords(){
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
}

// load coords from local storage
function loadCoords(){
    const coordsValue = localStorage.getItem(COORDS);
    if(coordsValue === null){
        getCoords();
    }else{
        const parsedCoords = JSON.parse(coordsValue);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();
