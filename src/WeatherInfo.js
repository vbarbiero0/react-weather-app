import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {

  return (
      <div className="weather-side" >
        <div className="date-container">
          
              <FormattedDate date={props.data.date} />
            
          <h6 className="location">
            <img className="resize" 
                  src="https://img.icons8.com/material-sharp/24/ffffff/marker.png"
                  id="location-img" 
                  alt="current location"
          />
            <span className="city" id="city">
              {props.data.city}
            </span> , &nbsp; 
            <span className="country" id="country-input">
              {props.data.country}
            </span>
          </h6>
        </div>


      <div className="weather-container">
        <div className="weather-icon">
          <img src={props.data.iconUrl} alt= {props.data.description} id="icon" width="125px" float="left" />
        </div>
        <div className ="weather-temp-container">
             <h1 className="weather-temp">
              <span id="temperature" > {Math.round(props.data.temperature)}°
              </span>
              &nbsp;
              <span className="alternate" id="alternate"><a href="https://openweathermap.org/api" id="celsiusLink" className="active">°C</a> |
                <a href="https://openweathermap.org/api" id="fahrenheitLink">°F
                </a></span>
            </h1>
              <h3 className="weather-description">{props.data.description}
            </h3>
          </div>  
      </div>
  
  <div>
    
    </div>
  </div>
  
    );
  }

