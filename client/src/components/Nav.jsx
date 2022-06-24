import '../css/Nav.css'
import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
export default function Nav({ location, setLocation, searchForLocation }) {
  return (
    
    <div className="nav">
      <a href="/">
      <img src={logo} className="logo" alt="clime-logo"></img>
      </a>
      <h1 className="clime">Clime</h1>
      <div className="search">
        <input
          value={location}
          onChange={ev => setLocation(ev.target.value)}
          onKeyPress={searchForLocation}
          placeholder='Search by city'
          type="text" />
      </div>
    </div>
          
  )
}