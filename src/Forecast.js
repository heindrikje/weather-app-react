import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecastDay">
        Thu <br /> 2° / 9°
      </div>
      <div className="forecastDay">
        Fri <br />
        4° / 12°
      </div>
      <div className="forecastDay">
        Sat <br />
        -1° / 8°
      </div>
      <div className="forecastDay">
        Sun <br />
        3° / 10°
      </div>
      <div className="forecastDay">
        Mon <br />
        6° / 15°
      </div>
    </div>
  );
}
