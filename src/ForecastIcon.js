import React from "react";
import "./forecastIcon.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastIcon() {
  return (
    <div className="ForecastIcon">
      <WeatherIcon code="01d" size={32} />{" "}
    </div>
  );
}
