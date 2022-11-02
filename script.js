let buttonEl = document.getElementById("btn");
let inputEl = document.getElementById("inputVal");
let weatherDiv = document.getElementById("weather");
let bgcolor = ["#006E90", "#F18F01", "#ADCAD6", "#99C24D", "#41BBD9"];
let selClr = Math.floor(Math.random() * bgcolor.length) + 1;
let arrSrchRes = [];
////
buttonEl.onclick = () => {
  document.body.style.backgroundColor = bgcolor[selClr];
  let inputValue = inputEl.value;
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=78e3688d63364827a4a204236223110&q=" +
    inputValue +
    "&aqi=no";
  async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    weatherDiv.innerHTML = `
    <img width="150" height="150" alt="typeofweather" src="${data.current.condition.icon}"/>
    <p id="nameCity"> Coutry : ${data.location.country}</p>
    <p id="nameCity"> City : ${data.location.name}</p>
    <p id="nameCity"> Type : ${data.current.condition.text}</p>
    <p id="nameCity"> Humidity : ${data.current.humidity}</p>
    <p id="nameCity">T.Celsius : ${data.current.temp_c}</p>
    <p id="nameCity">T.Fahrenheit : ${data.current.temp_f}</p>
    `;
    console.log(data);
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
    console.log(arrSrchRes);
  }

  inputEl.value = "";

  getData();
};
