// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Travel Desk</div>
      <div className="header-buttons">
        <Link to="/" className="button">Home</Link>
        <Link to="/services" className="button">Services</Link>
        <Link to="/admin" className="button">Admin</Link>
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
        <Link to="/contact" className="button">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
