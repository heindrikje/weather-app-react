import React from "react";
import Temp from "./Temp";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import ForecastIcon from "./ForecastIcon";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="card mainInfo">
            <h2>{props.data.city}</h2>
            <Temp celsius={props.data.temp} />
            <Date date={props.data.date} />
          </div>
        </div>
        <div className="col-6 iconAndDescription">
          <div className="icon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="description text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6 weatherDetails">
          <div>
            {props.data.tempMin}° | <strong>{props.data.tempMax}</strong>°
          </div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind}km/h</div>
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
