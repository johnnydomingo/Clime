import '../css/Nav.css'
import React from 'react';
export default function Nav({ location, setLocation, searchForLocation }) {
  return (
    <div className="nav">
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