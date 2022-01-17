import React from "react";
import "./forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data.daily);
  }

  const apiKey = "3b805b8ea6935d84ecc7cdd3c562894e";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="forecastDay">
        Thu <br /> <strong>9°</strong> / 2°
      </div>
    </div>
  );
}
