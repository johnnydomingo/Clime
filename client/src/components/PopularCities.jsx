import React, { useState } from 'react'
import axios from 'axios';

export default function PopularCities({cities}) {
  const [cityWeather, setCityWeather] = useState([]);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const units = "&units=imperial";
  const API_KEY = "&appid=872d49cf6965f95f7752a583eac1b02c";

const fetchCity = async () => {
        // let city = cities[0].location;
        let city = 'Dubai';
  
  //       const newCity = await axios.get(`${API_URL}${city}${units}${API_KEY}`);
  // setCityWeather((prevState) => [...prevState, newCity])
  // console.log(cityWeather)

    };
// fetchCity();

  return (
    <div>Popular Cities</div>
  )
}
