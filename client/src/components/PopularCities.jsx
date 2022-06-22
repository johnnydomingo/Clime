// Dependencies
import React from "react";
// import { getAllCities } from "../services/city";

export default function PopularCities({cities}) {

  return (
    <div>
      <section className="city-card">
        <div className="popular-searches">
          {cities?.map((city) => (
          <div className="city-info">
          <p>{city.location}</p>
              <img src={city.image} alt="skyline" />
              </div>
          ))}
        </div>
      </section>
    </div>
  )
}