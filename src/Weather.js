import React from "react";
import Date from "./Date";
import Forecast from "./Forecast";
import ForecastIcon from "./ForecastIcon";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="card mainInfo">
            <h2>{props.info.city}</h2>
            <h1>{props.info.temp}°C</h1>
            <Date date={props.info.date} />
          </div>
        </div>
        <div className="col-6 iconAndDescription">
          <div className="icon">🌤</div>
          <div className="description text-capitalize">
            {props.info.description}
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6 weatherDetails">
          <div>
            {props.info.tempMin}° | <strong>{props.info.tempMax}</strong>°
          </div>
          <div>Humidity: {props.info.humidity}%</div>
          <div>Wind: {props.info.wind}km/h</div>
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
