import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div>
        <h1>Rocket Mission</h1>
      </div>
      <div>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
          <li><NavLink to="/Missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
