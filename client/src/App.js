// Dependencies
import { Route, Routes, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";

// Screens/Services
import { getAllCities } from "./services/city";
import Results from "./screens/Results";
import Home from "./screens/Home";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import WeatherTest from "./components/WeatherTest";

export default function App() {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      const cityList = await getAllCities();
      setCities(cityList);
    };
    fetchCities();
  }, []);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=13d18577b2830ec2f799fbc8d0818acf`;
  let navigate = useNavigate();
  const searchForLocation = (ev) => {
    if (ev.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        navigate("/results");
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
      />
      <Routes>
        <Route
          path="/"
          element={<Home cities={cities} setCities={setCities} data={data} />}
        ></Route>
        <Route path="/results" element={<Results data={data} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
