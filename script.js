import { weatherData } from "./type.js";
let buttonEl = document.getElementById("btn");
let inputEl = document.getElementById("inputVal");
let weatherDiv = document.getElementById("weather");
let searchBox = document.querySelector(".searchBox");
let arrSrchRes = [];
////
buttonEl.onclick = async () => {
  let inputValue = inputEl.value;
  if (inputValue.length === 0) {
    alert("You have to type city name or country name");
  } else {
    buttonEl.remove();
    inputEl.remove();
    const url =
      "http://api.weatherapi.com/v1/forecast.json?key=78e3688d63364827a4a204236223110&q=" +
      inputValue +
      "&aqi=no";
    const res = await fetch(url);
    const data = await res.json();
    weatherDiv.innerHTML = `
      <img width="150" height="150" alt="typeofweather" src="${data.forecast.forecastday[0].day.condition.icon}"/>
      <p id="nameCity"> Coutry : ${data.location.country}</p>
      <p id="nameCity"> City : ${data.location.name}</p>
      <p id="nameCity"> Type : ${data.forecast.forecastday[0].day.condition.text}</p>
      <p id="nameCity"> Humidity : ${data.current.humidity}</p>
      <p id="nameCity">T.Celsius : ${data.current.temp_c}</p>
      <p id="nameCity">T.Fahrenheit : ${data.current.temp_f}</p>
    `;
    weatherData.forEach((element) => {
      if (element.type === data.forecast.forecastday[0].day.condition.text) {
        document.body.style.backgroundColor = element.color;
        const audio = new Audio(element.audio);
        const buttonPlay = document.createElement("button");
        searchBox.append(buttonPlay);
        buttonPlay.textContent = "play";

        buttonPlay.onclick = () => {
          audio.play();
          buttonPlay.disabled = true;
          buttonPlay.style.backgroundColor = "blue";
          buttonStop.style.backgroundColor = "red";
        };
        const buttonStop = document.createElement("button");
        searchBox.append(buttonStop);
        buttonStop.textContent = "pause";
        buttonStop.style.backgroundColor = "#59FFA0";
        buttonPlay.style.backgroundColor = "red";
        buttonStop.onclick = () => {
          audio.pause();
          buttonPlay.disabled = false;
          buttonPlay.style.backgroundColor = "red";
          buttonStop.style.backgroundColor = "blue";
        };
        const buttonReset = document.createElement("button");
        searchBox.append(buttonReset);
        buttonReset.textContent = "Search another place";
        buttonReset.style.backgroundColor = "lightblue";
        buttonReset.onclick = () => {
          window.location.reload();
        };
      }
    });
    const objData = {
      url: `${data.current.condition.icon}`,
      country: `${data.location.country}`,
      city: `${data.location.name}`,
      type: `${data.current.condition.text}`,
      humidity: `${data.current.humidity}`,
      tcel: `${data.current.temp_c}`,
      tfar: `${data.current.temp_f}`,
    };
    arrSrchRes.push(objData);
    inputEl.value = "";
  }
};
