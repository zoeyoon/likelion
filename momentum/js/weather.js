const API_KEY = "64cd17e3435142bb37c86893283bdefe";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weathers = document.querySelector("#weathers span:first-child");
      const weather = data.weather[0].main;
      const city = data.name;
      const temperature = Math.floor(data.main.temp);
      weathers.innerText = `${city} \n ${temperature} ℃ ${weather} `;
    });
}

function onGeoError() {
  alaert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
