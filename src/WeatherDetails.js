import React from "react";
import "./weatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <div>5° / 12°</div>
      <div>Precipitation: 3%</div>
      <div>Humidity: 65%</div>
      <div>Wind: 18km/h</div>
    </div>
  );
}
