// Dependencies
import { NavLink } from "react-router-dom";
import React from "react";

// CSS
import "../css/Nav.css";

// Assets
import logo from "../assets/Logo.png";

export default function Nav({ location, setLocation, searchForLocation }) {
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={logo} className="logo" alt="clime-logo"></img>
      </NavLink>
      <h1 className="clime">Clime</h1>
      <div className="search">
        <input
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
          onKeyPress={searchForLocation}
          placeholder="Search by city"
          type="text"
        />
      </div>
    </div>
  );
}
