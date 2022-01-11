import React, { useState } from "react";
import "./temp.css";

export default function Temp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="Temp">
        <h1>
          {props.celsius}
          <span className="celsius unit">°C | </span>
          <span className="fahrenheit unit">
            <a href="/" onClick={showFahrenheit}>
              F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temp">
        <h1>
          {Math.round(fahrenheit)}°
          <span className="celsius unit">
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            |
          </span>{" "}
          <span className="fahrenheit unit">F</span>
        </h1>
      </div>
    );
  }
}
