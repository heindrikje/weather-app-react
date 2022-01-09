import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchForm(props) {
  const [info, setInfo] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showInfo(response) {
    setInfo({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3b805b8ea6935d84ecc7cdd3c562894e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (info.loaded) {
    return (
      <div className="SearchForm">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control search-bar"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search 🔍"
                className="btn btn-secondary w-100 search-button"
              />
            </div>
          </div>
        </form>
        <Weather data={info} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
