// Dependencies
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// CSS
import "../css/PopularCities.css";

export default function PopularCities({ cities }) {
  // const [cityWeather, setCityWeather] = useState([]);

  // useEffect(() => {
  //   const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  //   const units = "&units=imperial";
  //   const API_KEY = "&appid=13d18577b2830ec2f799fbc8d0818acf";
  //   // const cityWeather = [];

  //   const setHomeWeathers = (cities) => {
  //     for (let i = 0; i < cities.length; i++) {
  //       let city = cities[i].location;
  //       let newCity = axios.get(`${API_URL}${city}${units}${API_KEY}`).then((response) => {
  //         cityWeather.push(response.data.main.temp);
  //         setHomeWeathers(cities);
  //         setCityWeather(cityWeather);
  //       }
  //       //  setCityWeather((prevState) => [...prevState, newCity])
  //     }, []);
  return (
    <div className="home-container">
      <div className="heading">Popular Cities</div>
      <section className="city-card">
        <div className="popular-searches">
          {cities.map((city, index) => (
            <div className="city-info" key={index}>
              <div className="name-temp">
                <p className="city-name" id="city-name">
                  {city.location}
                </p>
                {/* <p className="location-temp">{cityWeather[index]}°F</p> */}
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
      </section>
    </div>
  );
}
