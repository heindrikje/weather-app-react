import React from "react";
import Temp from "./Temp";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherGirl from "./WeatherGirl";
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
            <div className="temp">
              <Temp celsius={props.data.temp} />{" "}
              <div className="tempMinMax">
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
              </div>
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

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-droplet-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>{" "}
            {props.data.humidity}% Humidity
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-wind"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
            </svg>{" "}
            {props.data.wind} km/h
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-clouds"
              viewBox="0 0 16 16"
            >
              <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z" />
              <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z" />
            </svg>{" "}
            {props.data.clouds} %
          </div>
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
