import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
  ];
    let currentDay = days[date.getDay()];
    
    return `${currentDay}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div>
      <span className="day-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
        </span>
      <span className="day-time">{day()}</span>
      <span className="day-temp">
        {temperature()}
        </span>
     
    </div>
  );
}