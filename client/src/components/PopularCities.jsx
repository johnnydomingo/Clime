// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "../css/PopularCities.css";

export default function PopularCities({ cities }) {
  const [city1, setCity1] = useState([]);
  const [city2, setCity2] = useState([]);
  const [city3, setCity3] = useState([]);
  const [city4, setCity4] = useState([]);
  const [city5, setCity5] = useState([]);

  const first_url =
    "https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf";

  const second_url =
    "https://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf";

  const third_url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf";

  const fourth_url =
    "https://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf";

  const fifth_url =
    "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf";

  useEffect(() => {
    axios.get(first_url).then((response) => {
      setCity1(response.data.main.temp.toFixed());
      // console.log(response.data);
    });
    axios.get(second_url).then((response) => {
      setCity2(response.data.main.temp.toFixed());
      // console.log(response.data);
    });
    axios.get(third_url).then((response) => {
      setCity3(response.data.main.temp.toFixed());
      // console.log(response.data);
    });
    axios.get(fourth_url).then((response) => {
      setCity4(response.data.main.temp.toFixed());
      // console.log(response.data);
    });
    axios.get(fifth_url).then((response) => {
      setCity5(response.data.main.temp.toFixed());
      // console.log(response.data);
    });
  }, []);
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
        <div className="home-temp">
          <h3 className="dubai">{[city1]}°F</h3>
          <h3 className="los-angeles">{[city2]}°F</h3>
          <h3 className="london">{[city3]}°F</h3>
          <h3 className="new-york">{[city4]}°F</h3>
          <h3 className="paris">{[city5]}°F</h3>
        </div>
      </section>
    </div>
  );
}
