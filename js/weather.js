const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "fbce689a808768c408d044a9f6272c39";

//api.openweathermap.org/data/3.0/weather?lat=37&lon=28&appid=fbce689a808768c408d044a9f6272c39&units=metric

https: function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `City : ${data.name}`;
      weather.innerText = `Weather : ${data.weather[0].main} / Temp. : ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
