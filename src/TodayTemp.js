import React from "react";
import "./todaytemp.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcons"
import DegreesTemperature from "./DegreesTemperature";

export default function TodayTemp(props) {

    return (
        <div className="today-temp">
            <p className="today" id="todays-date">
               <FormattedDate date={props.data.date}/>
             </p>
            <div className="mainTemp">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-3">
                        <span className="maindegrees">
                        <DegreesTemperature celsius={props.data.temperature} />
                        </span>
                    </div>
                    <div className="col-2" id="icon">
                        <WeatherIcon code={props.data.icon} />
                    </div>
                    <div className="col-4" id="two-temps">
                        <p>
                            High: {Math.round(props.data.hightemp)}
                            <span id="celsius-symbol">ºC</span>
                            <br />
                            Low: {Math.round(props.data.lowtemp)}
                            <span id="celsius-symbol-low">ºC</span>
                        </p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <div className="weatherDes">
                <p>
                    {props.data.description}
                </p>
            </div>
          <div class="descriptives">
            <p class="descriptive">Humidity = {props.data.humidity}%</p>
            <p class="descriptive">Wind Speed = {props.data.wind} m/s</p>
          </div>
        </div>
    );

}
