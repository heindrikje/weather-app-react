import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      {day()}
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <br /> <strong>{Math.round(props.data.temp.max)}°</strong> /{" "}
      {Math.round(props.data.temp.min)}°
    </div>
  );
}
