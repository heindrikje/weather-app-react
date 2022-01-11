import React from "react";

export default function Date(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes <= 9) minutes = `0${minutes}`;
  let currentDate = props.date.getDate();
  if (currentDate <= 9) currentDate = `0${currentDate}`;
  let month = props.date.getMonth() + 1;
  if (month <= 9) month = `0${month}`;
  let year = props.date.getFullYear();
  return (
    <div className="Date">
      {day}, {currentDate}.{month}.{year} <br /> Updated at {hours}:{minutes}
    </div>
  );
}
