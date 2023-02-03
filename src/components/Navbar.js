import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import pic from '../media/white-planet.png';

function Navbar() {
  return (
    <nav className="navbar-main-container">
      <div className="logo-container">
        <img className="logo-navbar" alt="Logo" src={pic} />
        <h1>Rocket Mission</h1>
      </div>
      <div>
        <ul className="nav-items">
          <li><NavLink to="/RocketsContainer" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
          <li><NavLink to="/Missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink></li>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
