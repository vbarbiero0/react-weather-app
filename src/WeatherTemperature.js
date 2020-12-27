import React, {useState} from "react";

export default function WeatherTemperature(props) {
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
    <div className="WeatherTemperature">
      <h1 className="weather-temp">
              <span className="temperature"> {Math.round(props.celcius)}°
              </span>
              &nbsp;
            <span className="alternate" id="alternate">
                  <span className="active">
                  °C
                  </span> |
                  <a href="/" onClick={showFahrenheit}>
                  °F
                  </a>
            </span>
        </h1>
    </div>  
  ); 

} else {

  let fahrenheit = (props.celcius * 9/5) +32;

  return (
    <div className="WeatherTemperature">
      <h1 className="weather-temp">
              <span className="temperature">{Math.round(fahrenheit)}°
              </span>
              &nbsp;
            <span className="alternate" id="alternate">
                  <a href="/" onClick={showCelsius}>
                  °C
                  </a> |
                  <span className="active" >
                  °F
                  </span>
            </span>
        </h1>
    </div>  
  ); 
}
}