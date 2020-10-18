
import React from "react";


export default function WeatherVideos(props) {
  const codeMapping = {
    "01d": "./media/01d.mp4",
    "01n": "./media/01n.mp4",
    "02d": "./media/02d.mp4",
    "02n": "./media/02n.mp4",
    "03d": "./media/03d.mp4",
    "03n": "./media/03n.mp4",
    "04d": "./media/04d.mp4",
    "04n": "./media/04n.mp4",
    "09d": "./media/09d.mp4",
    "09n": "./media/09n.mp4",
    "10d": "./media/10d.mp4",
    "10n": "./media/10n.mp4",
    "11d": "./media/11d.mp4",
    "11n": "./media/11n.mp4",
    "13d": "./media/13d.mp4",
    "13n": "./media/13n.mp4",
    "50d": "./media/50d.mp4",
    "50n": "./media/50n.mp4"
  };

    return (
        <video autoPlay loop muted id="vids">
            <source src={codeMapping[props.vid]} type="video/mp4" />
        </video>
  );
}
