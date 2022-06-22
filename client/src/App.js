import './App.css';
import { React, useState, useEffect } from 'react'
import { getAllCities } from './services/city';
import PopularCities from './components/PopularCities';


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
    <div>
      App
    <div>
        <PopularCities
          cities={cities}
        />
          {/* {cities?.map((city) => (
            <p>{city.location}</p>
          ))} */}
        </div>
      </div>
  )
}

