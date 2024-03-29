const URL = (cityName) => {
  return `https://api.weatherapi.com/v1/forecast.json?key=df9e1320bb9e4a5093e113615242803&q=${cityName}&days=14&aqi=no&alerts=no`;
};

export const fetchWeatherData = async (cityName) => {
  const response = await fetch(URL(cityName));
  const data = await response.json();

  if (data === null || data === undefined) return;

  const currentData = data.forecast.forecastday.shift();

  return {
    current: {
      location: data.location.name,
      date: currentData.date,
      temp: currentData.day.avgtemp_c,
      wind: currentData.day.maxwind_mph,
      humidity: currentData.day.avghumidity,
      condition: currentData.day.condition,
    },
    four_futures: data.forecast.forecastday.splice(0, 4).map((w) => {
      return {
        location: data.location.name,
        date: w.date,
        temp: w.day.avgtemp_c,
        wind: w.day.maxwind_mph,
        humidity: w.day.avghumidity,
        condition: w.day.condition,
      };
    }),
    rest_futures: data.forecast.forecastday.map((w) => {
      return {
        location: data.location.name,
        date: w.date,
        temp: w.day.avgtemp_c,
        wind: w.day.maxwind_mph,
        humidity: w.day.avghumidity,
        condition: w.day.condition,
      };
    }),
  };
};
