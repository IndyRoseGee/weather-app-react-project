import React, {useState} from "react";
import TodayTemp from "./TodayTemp";
import "./weather.css";
import axios from "axios";
import Loader from 'react-loader-spinner';



export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);

    const[weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            city: response.data.name,
            hightemp: response.data.main.temp_max,
            lowtemp: response.data.main.temp_min,
        })
    }

    function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5e479c0f3c564141872dc35a4d10e84c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div className="weather">
    <div className="city-search">
      <div className="navbar-css">
        <nav className="navbar navbar-light bg-light">
          <h1>{weatherData.city}</h1>
          <form className="form-inline"  onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search City"
              aria-label="Search City"
              onChange={handleCityChange}
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
    <br />
      <TodayTemp data={weatherData} />
    </div>
  );
  } else {
    search();
    return (
    <div className="loading"><Loader type="ThreeDots" color="darkgrey" height={80} width={80} /></div>
    );}
}
