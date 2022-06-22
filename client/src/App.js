import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { getAllCities } from "./services/city";
import PopularCities from "./components/PopularCities";
import Layout from "./components/Layout";

export default function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const cityList = await getAllCities();
      setCities(cityList);
      console.log(cityList);
    };
    fetchCities();
  }, []);

  return (
    <div className="app">
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<PopularCities cities={cities} />}></Route>
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}
