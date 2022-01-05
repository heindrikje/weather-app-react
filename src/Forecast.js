import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecastDays">
        <div>
          Thu 🌥 <br /> 2° / 9°
        </div>
        <div>
          Fri 🌥 <br /> 4° / 12°
        </div>
        <div>
          Sat 🌧 <br /> -1° / 8°
        </div>
        <div>
          Sun 🌤 <br /> 3° / 10°
        </div>
        <div>
          Mon 🌤 <br /> 6° / 15°
        </div>
      </div>
    </div>
  );
}
