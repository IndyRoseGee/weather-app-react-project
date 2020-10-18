import React from "react";
import "./contents.css";

import Weather from "./Weather";
import Footer from "./Footer";

import WeatherVideos from "./WeatherVideos";

export default function App(props) {
  return (
    <div className="app">
      <div className="section">
        <div className="vids">
          <div id="video">
       
              <WeatherVideos vid={props.data.icon}/>
         
          </div>
        </div>
        <div className="container" max-width="600px">
          <div className="main-content">
            <Weather defaultCity="London"/>
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}