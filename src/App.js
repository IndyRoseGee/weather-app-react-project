import React from "react";
import "./contents.css";

import CitySearch from "./CitySearch";
import TodayTemp from "./TodayTemp";
import Forecast from "./Forecast";
import Footer from "./Footer";
import background from "./media/01d.mp4";

export default function App() {
  return (
    <div className="app">
      <div className="section">
        <div className="vids">
          <div id="video">
            <video autoPlay loop muted id="vids">
              <source src={background} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="container">
          <span className="main-content">
            <CitySearch />
            <br />
            <TodayTemp />
            <hr />
            <Forecast />
            <br />
            <Footer />
          </span>
        </div>
      </div>
    </div>
  );
}
