// src/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://raw.githubusercontent.com/Azar54/images/main/PERFECT%20PETS%20final.png"
            width="250"
            height="110"
            className="d-inline-block align-top"
            alt="Pet Shop Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/products/dog-supplies">Dog Supplies</Link>
                <Link className="dropdown-item" to="/products/cat-supplies">Cat Supplies</Link>
                <Link className="dropdown-item" to="/products/bird-supplies">Bird Supplies</Link>
                <Link className="dropdown-item" to="/products/fish-supplies">Fish Supplies</Link>
                <Link className="dropdown-item" to="/products/small-pets">Small Pets</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                <Link className="dropdown-item" to="/service/grooming">Grooming</Link>
                <Link className="dropdown-item" to="/service/training">Training</Link>
                <Link className="dropdown-item" to="/service/veterinary">Veterinary</Link>
                <Link className="dropdown-item" to="/service/boarding">Boarding</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
