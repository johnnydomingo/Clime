import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { getAllCities } from "./services/city";
import PopularCities from "./components/PopularCities";
import CityWeather from "./components/CityWeather";
import axios from "axios";
import Nav from "./components/Nav";

export default function App() {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');


  useEffect(() => {
    const fetchCities = async () => {
      const cityList = await getAllCities();
      setCities(cityList);
      // console.log(cityList);
    };
    fetchCities();
  }, []);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f0f89e0388f82c90f094a7a9a8675497`
  
  const searchForLocation = (ev) => {
    if (ev.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="app">
      
      <Nav location={location} setLocation={setLocation} searchForLocation={searchForLocation} />
        <Router>
        <Routes>
          <Route path="/" element={<PopularCities cities={cities} />}></Route>
          <Route path="/result" element={<CityWeather data={data} />}></Route>
          </Routes>
        </Router>
          
      
    </div>
  );
}
