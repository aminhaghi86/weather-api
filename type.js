let weatherData = [
  {
    audio: "./audio/nature.mp3",
    id: 1,
    type: "Partly cloudy",
    color: "#006E90",
  },

  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 2,
    type: "Sunny",
    color: "#006E90",
  },

  {
    audio: "./audio/Autumn-Relaxing.mp3",
    id: 3,
    type: "Cloudy",
    color: "#006E90",
  },

  { audio: "./audio/gahtre.mp3", id: 4, type: "Overcast", color: "#006E90" },

  {
    audio: "./audio/Autumn-Relaxing.mp3",
    id: 5,
    type: "Mist",
    color: "#006E90",
  },

  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 6,
    type: "Patchy rain possible",
    color: "#F18F01",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 7,
    type: "Patchy snow possible",
    color: "#F18F01",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 8,
    type: "Patchy freezing drizzle possible",
    color: "#F18F01",
  },
  {
    audio: "./audio/Autumn-Relaxing.mp3",
    id: 9,
    type: "Thundery outbreaks possible",
    color: "#F18F01",
  },
  {
    audio: "./audio/Autumn-Relaxing.mp3",
    id: 10,
    type: "Blowing snow",
    color: "#F18F01",
  },
  {
    audio: "./audio/Autumn-Relaxing.mp3",
    id: 11,
    type: "Blizzard",
    color: "#ADCAD6",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 12,
    type: "Fog",
    color: "#ADCAD6",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 13,
    type: "Freezing fog",
    color: "#ADCAD6",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 14,
    type: "Patchy light drizzle",
    color: "#ADCAD6",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 15,
    type: "Light drizzle",
    color: "#ADCAD6",
  },
  {
    audio: "./audio/Birds-Relaxing.mp3",
    id: 16,
    type: "Freezing drizzle",
    color: "#99C24D",
  },
  {
    audio: "./audio/gahtre.mp3",
    id: 17,
    type: "Heavy freezing drizzle",
    color: "#99C24D",
  },
  {
    audio: "./audio/gahtre.mp3",
    id: 18,
    type: "Patchy light rain",
    color: "#99C24D",
  },
  { audio: "./audio/gahtre.mp3", id: 19, type: "Light rain", color: "#99C24D" },
  {
    audio: "./audio/gahtre.mp3",
    id: 20,
    type: "Moderate rain at times",
    color: "#99C24D",
  },
  {
    audio: "./audio/gahtre.mp3",
    id: 21,
    type: "Moderate rain",
    color: "#41BBD9",
  },
  {
    audio: "./audio/gahtre.mp3",
    id: 22,
    type: "Heavy rain at times",
    color: "#41BBD9",
  },
  { audio: "./audio/gahtre.mp3", id: 23, type: "Heavy rain", color: "#41BBD9" },
  {
    audio: "./audio/nature.mp3",
    id: 24,
    type: "Light freezing rain",
    color: "#41BBD9",
  },
  {
    audio: "./audio/gahtre.mp3",
    id: 25,
    type: "Moderate or heavy freezing rain",
    color: "#41BBD9",
  },
  {
    audio: "./audio/nature.mp3",
    id: 26,
    type: "Light sleet",
    color: "#F7CB15",
  },
  {
    audio: "./audio/nature.mp3",
    id: 27,
    type: "Moderate or heavy sleet",
    color: "#F7CB15",
  },
  {
    audio: "./audio/nature.mp3",
    id: 28,
    type: "Patchy light snow",
    color: "#F7CB15",
  },
  { audio: "./audio/nature.mp3", id: 29, type: "Light snow", color: "#F7CB15" },
  {
    audio: "./audio/nature.mp3",
    id: 30,
    type: "Patchy moderate snow",
    color: "#F7CB15",
  },
  {
    audio: "./audio/nature.mp3",
    id: 31,
    type: "Moderate snow",
    color: "#41BBD9",
  },
  {
    audio: "./audio/nature.mp3",
    id: 32,
    type: "Patchy heavy snow",
    color: "#41BBD9",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 33,
    type: "Ice pellets",
    color: "#41BBD9",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 34,
    type: "Light rain shower",
    color: "#41BBD9",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 35,
    type: "Moderate or heavy rain shower",
    color: "#F9B9F2",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 36,
    type: "Torrential rain shower",
    color: "#F9B9F2",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 37,
    type: "Light sleet showers",
    color: "#F9B9F2",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 38,
    type: "Moderate or heavy sleet showers",
    color: "#F9B9F2",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 39,
    type: "Light snow showers",
    color: "#F9B9F2",
  },
  {
    audio: "./audio/Water-Relaxing.mp3",
    id: 40,
    type: "Moderate or heavy snow showers",
    color: "#FFD3E8",
  },
  {
    audio: "./audio/yaredabestani.mp3",
    id: 41,
    type: "Light showers of ice pellets",
    color: "#FFD3E8",
  },
  {
    audio: "./audio/yaredabestani.mp3",
    id: 42,
    type: "Moderate or heavy showers of ice pellets",
    color: "#FFD3E8",
  },
  {
    audio: "./audio/yaredabestani.mp3",
    id: 43,
    type: "Patchy light rain with thunder",
    color: "#FFD3E8",
  },
  {
    audio: "./audio/yaredabestani.mp3",
    id: 44,
    type: "Moderate or heavy rain with thunder",
    color: "#FFD3E8",
  },
  {
    audio: "./audio/yaredabestani.mp3",
    id: 45,
    type: "Patchy light snow with thunder",
    color: "#D66BA0",
  },
  {
    audio: "./audio/yaredabestani.mp3",
    id: 46,
    type: "Moderate or heavy snow with thunder",
    color: "#D66BA0",
  },
];

export { weatherData };
