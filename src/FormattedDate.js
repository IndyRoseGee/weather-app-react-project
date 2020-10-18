import React from "react";

export default function FormattedDate(props) {

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let day = days[props.date.getDay()];

   let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()]

  let year = props.date.getFullYear();
  let date = props.date.getDate();
  
  let hours = props.date.getHours(0, 0, 0, 0);
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
return (
            <div>
                Today {hours}:{minutes} | {day} {date} {month} {year}
      </div>
      );
}