import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import ForecastIcon from "./ForecastIcon";
import "./weather.css";

export default function Weather(props) {
  const [info, setInfo] = useState({ loaded: false });

  function showInfo(response) {
    console.log(response.data);

    setInfo({
      loaded: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
    });
  }

  if (info.loaded) {
    return (
      <div className="Weather">
        <SearchForm />
        <div className="row">
          <div className="col-6">
            <div className="card mainInfo">
              <h2>{info.city}</h2>
              <h1>{info.temp}°C</h1>
              <div>
                Wed, 05.01.21 <br /> 13:29
              </div>
            </div>
          </div>
          <div className="col-6 iconAndDescription">
            <div className="icon">🌤</div>
            <div className="description text-capitalize">
              {info.description}
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6 weatherDetails">
            <div>
              {info.tempMin}° | <strong>{info.tempMax}</strong>°
            </div>
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
    const apiKey = "3b805b8ea6935d84ecc7cdd3c562894e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showInfo);
    return <div>The App is loading...</div>;
  }
}
