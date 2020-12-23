import React from "react";
import "./Weather.css";

export default function Weather() {
return (
  <div className="Weather"> 
    <div className="weather-side" >

        <div className="date-container">
          <span className="date" >
            <h2 className="date-dayname" id="day-time">Tuesday</h2>
            <div className="date-day" id="day">12 Sept 2020</div>
          </span>

          <h6 className="location">
            <img className="resize" 
                  src="https://img.icons8.com/material-sharp/24/ffffff/marker.png"
                  id="location-img" 
                  alt="current location"
          />
            <span className="city" id="city">
              Montreal
            </span> , &nbsp; 
            <span className="country" id="country-input">
              CA
            </span>
          </h6>
        </div>


      <div className="weather-container">
        <div className="weather-icon">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" id="icon" width="125px" float="left" />
        </div>
        <div className ="weather-temp-container">
             <h1 className="weather-temp">
              <span id="temperature" > 10°
              </span>
              <span className="alternate" id="alternate"><a href="#" id="celsiusLink" className="active">°C</a> |
                <a href="#" id="fahrenheitLink">°F
                </a></span>
            </h1>
              <h3 className="weather-description">Sunny
            </h3>
          </div>  
      </div>
    </div>

      
    <div className="info-side">
      
        <div className="info-container">
          <div className="list">
            <span className="title"> MIN. TEMP </span>
            <span className="value" id="minimum" >
              12
            <span> °C </span>
            </span>
          </div>

          <div className="list">
            <span className="title"> HUMIDITY </span>
            <span className="value" id="humidity">
               34  
            <span> % </span>
            </span>
          </div>

          <div className="list">
            <span className="title"> WIND </span>
            <span className="value" id="wind">
               0 
            </span>
            <span> km/h </span>
          </div>
        </div>

        <div className="week-container">
          <div className="row" id="forecast" >
            <div className="col-3" id="col-3" >
              <div className="day-time" id="day-time">
                12:00
              </div>
              <img className="day-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="clear" id="day-icon" 
              />
              <div id="day-temp">
                14°C
              </div>
          </div>
        </div>
      </div>

        <div className="row" id="search-location">
          <div className="col-10" >
            <form id="search-form" className="mb-3">
              <input 
              type="search" 
              placeholder="Type a city..." 
              autocomplete="off" 
              id="city-input"
              />
            </form> 
          </div>

          <div className="col-2" id="current-location-btn">
            <button type="submit" 
                    value="search" 
                    id="current-location-btn">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACSElEQVRIicWWP2sUQRyG34nxxAtYaTAeXq4waBAV04m5wk7ENtpERLQwiKKgYiWkyAfQIqLFofgBJFYX/AqSaKFWYuIfIiYWCSbeyZ2Pxc7BuM7u7borvjBw/Obd95mZ3ZsZ6T/JpDEDmyQdt61iywuS6pLqxph2vsMLoFXgNdF6BYzmDT0FNGOgHTWBsbygh4DvCaAdbQAH8gA/SwHtaDYrtBIRPA3st+2ep/8nUM4CPusJfeLxzXh8Z+Kye7qwd3pqTz21GU9tVxbwiqc2kBDS6JIdLWDUs4RfgD2OZwhY9viOxWXH7lxAQdInSdtDXesKdisp2MX6Qv0rkkrGmB9JJhgFvxvxZcfpzl8DHfAw0EoBbQHDmcEW/jAFuJYL1IIrBFthN60Dg7mBLfxWAvDNXKEW3AvMxUDngN7cwRY+BKx6oN/I8YPqAUbsEk849XEPeNzpn7DPjADJbzhAEbgCLDrBLaDqeGpOX82pV/n9r7cAXAa2doMeBT6GZtMG3gBTocE9t63o1Kestx3K+AAciYKWgTXHPA9cBPoj/CWgFNHXb5f8hZO3Cuz2ma85puup3k+EAAPccHKv+kwnHcNbYAzYnAFaAE4D75zcE1Gjexx6N0vAfYKbyN4Es9sHnAMeAJ9DWY9cvwk/LOmSpNuSdnjym5KWJH1VcND3SCooODYH7O+wliVNSpo2xhA3eAF9wAVgFmiQXg2gDpwHwmf1nzOOGMQWSYclHZQ0KKksqShpm7WsSdqQ9F7SoqSXkuYzXQL+pX4BZSKNh0/Ef64AAAAASUVORK5CYII="
              id="current-location-icon" />
            </button>
          </div>
        </div>
    </div>
  </div>

)

}