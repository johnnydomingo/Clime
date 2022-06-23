import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { getAllCities } from "./services/city";
import PopularCities from "./components/PopularCities";
// import CityWeather from "./components/CityWeather";
import Results from "./screens/Results";
import axios from "axios";
import Nav from "./components/Nav";

export default function App() {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      const cityList = await getAllCities();
      setCities(cityList);
      // console.log(cityList);
    };
    fetchCities();
  }, []);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf`;

  const searchForLocation = (ev) => {
    if (ev.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      setLocation((prevLocation) => (prevLocation = ""));
    }
  };
  return (
    <div className="app">
      <Nav
        location={location}
        setLocation={setLocation}
        searchForLocation={searchForLocation}
        // render={() => <Navigate to="/results" />}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PopularCities cities={cities} data={data} />}
          ></Route>
          <Route
            path="/results"
            element={<Results data={data} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
