// Dependencies
import { React, useState, useEffect } from "react";
import axios from "axios";
import "../css/PopularCities.css";

export default function PopularCities({ cities }) {
  const [cityWeather, setCityWeather] = useState([]);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const units = "&units=imperial";
    const API_KEY = "&appid=f0f89e0388f82c90f094a7a9a8675497";
  const fetchCity = async () => {
          let city = cities[0].location;
          // const newCity = await axios.get(`${API_URL}${city}${units}${API_KEY}`);
          setCityWeather((prevState) => [...prevState, newCity])
      };
  // fetchCity();
  // console.log(cityWeather)
  useEffect(() => {
    // const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    // const units = "&units=imperial";
    // const API_KEY = "&appid=13d18577b2830ec2f799fbc8d0818acf";
    // const setHomeWeathers = (cities) => {
      //     let newCity = axios.get(`${API_URL}${city}${units}${API_KEY}`).then((response) => {
        // for (let i = 0; i < cities.length; i++) {
      //   const fetchCity = async (cities) => {
      //       // let city = cities[i].location;
      //       // const newCity = await axios.get(`${API_URL}${city}${units}${API_KEY}`);
      //       const newCity = await axios.get('https://dog.ceo/api/breeds/image/random');
      //     setCityWeather((prevState) => [...prevState, newCity])
      //   };
      //   fetchCity(cities);   
          console.log('testing')
      // }
      // cityWeather.push(response.data.main.temp);
      // console.log(cityWeather);
      // setCityWeather(cityWeather);
      // });
    // };
    // if (cityWeather === undefined) {
      //   return <>Still loading...</>;
      // }
      // setHomeWeathers(cities);
    }, [cities, cityWeather]);
    // console.log(cityWeather)
    // console.log(cities)
  return (
    <div className="home-container">
      {/* <section className="city-card">
        <div className="popular-searches">
          {cityWeather && cities?.map((city, index) => (
            <div className="city-info" key={index}>
              <div className="name-temp">

              <p className="city-name" id="city-name">
                {city.location}
              </p>
           
              <p className="location-temp">{cityWeather[index]}°F</p>
              </div>
              <img
                className="skyline"
                id="city-skyline"
                src={city.image}
                alt="skyline"
                />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
