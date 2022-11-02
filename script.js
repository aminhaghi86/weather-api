let buttonEl = document.getElementById("btn");
let inputEl = document.getElementById("inputVal");
let weatherDiv = document.getElementById('weather')
buttonEl.onclick = () => {
  let inputValue = inputEl.value;
  const url = 'http://api.weatherapi.com/v1/current.json?key=78e3688d63364827a4a204236223110&q='+inputValue+'&aqi=no';
  async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    weatherDiv.innerHTML = `
    <img width="150" height="150" alt="typeofweather" src="${data.current.condition.icon}"/>
    <p id="nameCity"> Coutry : ${data.location.country}</p>
    <p id="nameCity"> City : ${data.location.name}</p>
    <p id="nameCity"> Type : ${data.current.condition.text}</p>
    <p id="nameCity"> Humidity : ${data.current.humidity}</p>
    <p id="nameCity">Celsius : ${data.current.temp_c}</p>
    <p id="nameCity">Fahrenheit : ${data.current.temp_f}</p>
    `;
    console.log(data);
  }

  getData();
};
