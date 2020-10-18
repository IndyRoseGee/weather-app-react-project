import React, { useState } from "react";
import axios from "axios";
import "./forecast.css";
import FormattedForecast from "./FormattedForecast";
import Loader from 'react-loader-spinner';



export default function Forecast(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  //Code to get forecast
  function getForecast(result) {
    setForecast(result.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.longitude === forecast.lon &&
    props.latitude === forecast.lat
  ) {
    return (
      <div class="small-temps" id="forecast">
        <div class="row">
          <FormattedForecast index={1} data={forecast.daily} />
          <FormattedForecast index={2} data={forecast.daily} />
          <FormattedForecast index={3} data={forecast.daily} />
          <FormattedForecast index={4} data={forecast.daily} />
          <FormattedForecast index={5} data={forecast.daily} />
        </div>
      </div>
    );
  } else {
    const apiKey = "5e479c0f3c564141872dc35a4d10e84c";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,hourly,current&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(getForecast);
   
    return     (<div className="loading"><Loader type="ThreeDots" color="darkgrey" height={80} width={80} /></div>)
;
  }
}