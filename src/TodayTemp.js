import React, { useState } from "react";
import "./todaytemp.css";
import bigEmoji from "./media/01d.png";
import Date from "./Date";
import Axios from "axios";

export default function TodayTemp() {
    const [ready, setReady] = useState(false);
    const[weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            city: response.data.name,
        })
    }

    if (ready) {
    return (
        <div className="today-temp">
            <p className="today" id="todays-date">
                <Date/>
             </p>
            <div className="mainTemp">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-3">
                        <span className="maintemp" id="main-temperature">
                            {Math.round(temperature)}{" "}
                        </span>
                        <span className="maindegrees">
                            <a href="#/" className="active" id="celsius-link">
                                ºC
              </a>{" "}
              |
              <a href="#/" id="fahrenheit-link">
                                ºF{" "}
                            </a>
                        </span>
                    </div>
                    <div className="col-2" id="icon">
                        <img src={bigEmoji} alt="Sun" />
                    </div>
                    <div className="col-4" id="two-temps">
                        <p>
                            High: <span id="high-temp">-</span>{" "}
                            <span id="celsius-symbol">ºC</span>
                            <br />
              Low: <span id="low-temp">-</span>{" "}
                            <span id="celsius-symbol-low">ºC</span>
                        </p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <div className="weatherDes">
                <p>
                    {weatherData.description}
                </p>
            </div>

            <div className="descriptives">
               <p> {weatherData.humidity}%
        </p>
             <p>   {weatherData.wind} m/s
        </p>
            </div>
        </div>
    );

} else {
    const apiKey = "5e479c0f3c564141872dc35a4d10e84c";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    Axios.get(apiUrl).then(handleResponse);

    return "Loading..."; }}
