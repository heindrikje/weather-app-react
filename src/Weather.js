import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import ForecastIcon from "./ForecastIcon";
import "./weather.css";

export default function Weather(props) {
  const [info, setInfo] = useState({ loaded: false });

  function showInfo(response) {
    setInfo({
      loaded: true,
      city: response.data.name,
      temp: response.data.main.temp,
      descriptipn: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  let form = (
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control search-bar"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search 🔎"
            className="btn btn-secondary w-100 search-button"
          />
        </div>
      </div>
    </form>
  );

  if (info.loaded) {
    return (
      <div className="Weather">
        <div className="SearchForm">{form}</div>
        <div className="row">
          <div className="col-6">
            <div className="card mainInfo">
              <h2>{info.city}</h2>
              <h1>{Math.round(info.temp)}°C</h1>
              <div>
                Wed, 05.01.21 <br /> 13:29
              </div>
            </div>
          </div>
          <div className="col-6 iconAndDescription">
            <div className="icon">🌤</div>
            <div className="description">{info.description}</div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6 weatherDetails">
            <div>5° / 12°</div>
            <div>Precipitation: 3%</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Wind: {info.wind}km/h</div>
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
  } else {
    const apiKey = "203fa770242fcd2b9555d832a88ea567";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showInfo);
    return <div>The App is loading...</div>;
  }
}
