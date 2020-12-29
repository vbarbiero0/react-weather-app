import React, {useState} from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast(props){

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    
    return (

      <div className="week-container">
        <ul className="week-list">
          <li className="week">
        <WeatherForecastPreview data={forecast.list[5]} />
          </li>
        <li className="week">
        <WeatherForecastPreview data={forecast.list[14]} />
          </li>
        <li className="week">
        <WeatherForecastPreview data={forecast.list[22]} />
          </li>
        <li className="week">
        <WeatherForecastPreview data={forecast.list[28]} />
          </li>
       
        </ul>
      </div>
    );

  } else {

  const apiKey = "45e0d74a1bc7be61b894ed215a9def13";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);

  return null;
  }
} 