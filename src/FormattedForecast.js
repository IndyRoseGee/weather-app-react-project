import React from "react";
import "./forecast.css";
import WeatherIcon from "./WeatherIcons";


export default function FormattedForecast(props) {
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
  let date = new Date(props.data.dt * 1000);

  return (
    <div className="col boxes">
      <p>
  {nextDays(props.index)} {props.date}</p>
      <p>
      <WeatherIcon
        code={props.data[props.index].weather[0].icon}
        
      />
      </p>
      <p>
        {Math.round(props.data[props.index].temp.max)}º |{" "}
        {Math.round(props.data[props.index].temp.min)} º
      </p>

    </div>
  );
}

