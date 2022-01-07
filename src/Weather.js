import React from "react";
import SearchForm from "./SearchForm";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import ForecastIcon from "./ForecastIcon";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchForm />
      <div className="row">
        <div className="col-6">
          <div className="card mainInfo">
            <h2>Heidelberg</h2>
            <h1>10 °C</h1>
            <div>
              Wed, 05.01.21 <br /> 13:29
            </div>
          </div>
        </div>
        <div className="col-6 iconAndDescription">
          <div className="icon">🌤</div>
          <div className="description">Partly cloudy</div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6 weatherDetails">
          <WeatherDetails />
        </div>
        <div className="col-3 forecast">
          <Forecast />
        </div>
        <div className="col-3 forecastIcon">
          <ForecastIcon />
        </div>
      </div>
    </div>
  );
}
