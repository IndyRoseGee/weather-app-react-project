import React from "react";
import "./contents.css";

import Weather from "./Weather";
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
        <div className="container" >
          <div className="main-content">
            <Weather defaultCity="London"/>
            <hr />
            <Forecast />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
