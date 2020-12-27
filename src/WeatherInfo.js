import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon code={props.data.icon} id="weather-icon"  />
        </div>
        <div className ="weather-temp-container">
             
              <WeatherTemperature celcius={props.data.temperature} />
              
              <h3 className="weather-description">{props.data.description}
            </h3>
          </div>  
      </div>
  
  <div>
    
    </div>
  </div>
  
    );
  }

