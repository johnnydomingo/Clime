// Dependencies
import React from "react";


export default function PopularCities({cities}) {

  return (
    <div className="home-feed">
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