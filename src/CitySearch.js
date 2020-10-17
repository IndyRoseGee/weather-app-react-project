import React from "react";
import "./citysearch.css";

export default function CitySearch() {
  return (
    <div className="city-search">
      <div className="navbar-css">
        <nav className="navbar navbar-light bg-light">
          <h1 id="navbarCity">London, UK</h1>
          <form className="form-inline" id="search-form">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search City"
              aria-label="Search City"
              id="city-search"
            />
            <button
              id="button"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button
              id="current-location"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Current Location
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}
