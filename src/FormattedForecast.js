import React from "react";
import "./forecast.css";
import WeatherIcon from "./WeatherIcons";


export default function FormattedForecast(props) {
  //code to transform next days into text
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  function nextDays(i) {
    let nextDay = [];
    let nextDayIndex = now.getDay() + i;
    if (nextDayIndex > 6) {
      nextDayIndex = now.getDay() + i - 7;
    }
    nextDay[i - 1] = days[nextDayIndex];
    return nextDay;
  }

  return (
<div className="col">
    <div className="card">
        <div className="card-body">
            <p className="day" id="day-one">
                {nextDays(props.index)}
            </p>
            <span id="day-one-box">
                <p className="small-t-emoji">
                    <WeatherIcon code={props.data[props.index].weather[0].id}/>
                </p>
                <p>
                    <span className="daytemp" id="highFiveDayTemp">
                        {Math.round(props.data[props.index].temp.max)}
                    </span>º
                    <span className="nighttemp" id="lowFiveDayTemp">
                        | {Math.round(props.data[props.index].temp.min)}
                    </span>º
                </p>
            </span>
        </div>
    </div>
</div>
  );
}

