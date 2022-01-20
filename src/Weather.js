import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherGirl from "./WeatherGirl";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import DarkMode from "./DarkMode";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="card mainInfo">
            <h2>
              {props.data.city}, {props.data.country}
            </h2>
            <div>
              <span>
                <h1>{props.data.temp}</h1>
                <span className="celsius">°C</span>
              </span>
              <span className="tempMinMax">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-thermometer-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
                  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                </svg>
                <strong>{props.data.tempMax}</strong>° / {props.data.tempMin}°
              </span>
            </div>
            <Date date={props.data.date} />
          </div>
        </div>
        <div className="col-6 iconAndDescription">
          <div className="icon">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={100}
            />
          </div>
          <div className="description text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6 weatherDetails">
          <WeatherGirl />
          <WeatherDetails info={props.data} />
          <DarkMode />
        </div>
        <div className="col-6 forecast">
          <Forecast coordinates={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}
