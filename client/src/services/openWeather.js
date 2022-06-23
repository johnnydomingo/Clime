const API_KEY = "f0f89e0388f82c90f094a7a9a8675497";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const weatherData = async (infoType, searchParams) => {
//   const weatherURL = new URL(BASE_URL + "/" + infoType);
//   weatherURL.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

//   const resp = await fetch(weatherURL);
//   return await resp.json();
// };

// const currentWeather = (data) => {
//   const {
//     coord: { lat, lon },
//     main: { temp, feels_like, temp_min, temp_max, humidity, uvi },
//     name,
//     dt,
//     sys: { country, sunrise, sunset },
//     weather,
//   } = data;
//   const { main: description, icon } = weather[0];

//   return {
//     lat,
//     lon,
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     humidity,
//     name,
//     dt,
//     country,
//     sunrise,
//     sunset,
//     description,
//     icon,
//   };
// };

// const weatherForecast = (data) => {
//   let { daily } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp,
//       icon: d.weather[0].icon,
//     };
//   });
//   return { timezone, daily };
// }

// const getWeatherData = async (searchParams) => {
//   const currentWeatherData = await getData(
//     "weather",
//     searchParams
//   ).then(currentWeather);

//   const { lat, lon } = currentWeatherData;

//   const weatherForecastData = await getData("onecall",
//     {
//       lat,
//       lon,
//       exclude: "current, minutely, alerts",
//       units: searchParams.units,
//     }).then(weatherForecast);
  
//   return {...currentWeatherData, ...weatherForecastData}
// }

// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "cccc, dd LL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// export default getWeatherData;
// export { formatToLocalTime };