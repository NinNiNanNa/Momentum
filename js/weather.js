const API_KEY = "f43f749c9070eba5c3d65948a60aff3c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather img");
    const temp = document.querySelector("#weather span.temp");
    const city = document.querySelector("#weather span.city");
    const weatherImg = data.weather[0].id;
    console.log(weatherImg);
      if (weatherImg < 300) {
        weather.src = "img/thunderstorm.png";
      } else if (weatherImg < 600) {
        weather.src = "img/rainy.png";
      } else if (weatherImg < 700) {
        weather.src = "img/snow.png";
      } else if (weatherImg === 800) {
        weather.src = "img/sun.png";
      } else if (weatherImg <= 804) {
        weather.src = "img/cloudy.png";
      }
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}`;
    });
}
function onGeoError() {
  const weatherWrap = document.querySelector("#weather");
  const p = document.createElement("p");
  p.innerText = "Can't find you. No weather for you.";

  weatherWrap.appendChild(p);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)