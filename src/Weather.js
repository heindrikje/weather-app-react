import React from "react";
import Temp from "./Temp";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
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
            <Temp celsius={props.data.temp} />
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
          <div>
            <strong>{props.data.tempMax}</strong>° / {props.data.tempMin}°
          </div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind} km/h</div>
          <div className="darkMode">
            <DarkMode />
          </div>
        </div>
        <div className="col-6 forecast">
          <Forecast coordinates={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}

//pressure, visibility (?), clouds (?), sunrise/sunset
