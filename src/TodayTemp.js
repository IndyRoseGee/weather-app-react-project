import React from "react";
import "./todaytemp.css";
import bigEmoji from "./media/01d.png";
import FormattedDate from "./FormattedDate";

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
                        <span className="maintemp" id="main-temperature">
                            {Math.round(props.data.temperature)}
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
