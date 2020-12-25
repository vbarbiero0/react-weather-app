import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false});
  
  function handleResponse(response) {

    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.list[0].main.temp),
      city: response.data.city.name,
      country: response.data.city.country,
      wind: response.data.list[0].wind.speed,
      humidity: Math.round(response.data.list[0].main.humidity),
      feels: Math.round(response.data.list[0].main.feels_like),
      description: response.data.list[0].weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "25 Dec 2020",
    });
  }

  if (weatherData.ready) {

    return (
  <div className="Weather"> 
    <div className="weather-side" >

        <div className="date-container">
          <span className="date" >
            <h2 className="date-dayname" id="day-time">Tuesday</h2>
            <div className="date-day" id="day">{weatherData.date}</div>
          </span>

          <h6 className="location">
            <img className="resize" 
                  src="https://img.icons8.com/material-sharp/24/ffffff/marker.png"
                  id="location-img" 
                  alt="current location"
          />
            <span className="city" id="city">
              {weatherData.city}
            </span> , &nbsp; 
            <span className="country" id="country-input">
              {weatherData.country}
            </span>
          </h6>
        </div>


      <div className="weather-container">
        <div className="weather-icon">
          <img src={weatherData.iconUrl} alt= {weatherData.description} id="icon" width="125px" float="left" />
        </div>
        <div className ="weather-temp-container">
             <h1 className="weather-temp">
              <span id="temperature" > {Math.round(weatherData.temperature)}°
              </span>
              &nbsp;
              <span className="alternate" id="alternate"><a href="https://openweathermap.org/forecast5#list" id="celsiusLink" className="active">°C</a> |
                <a href="https://openweathermap.org/forecast5#list" id="fahrenheitLink">°F
                </a></span>
            </h1>
              <h3 className="weather-description">{weatherData.description}
            </h3>
          </div>  
      </div>
    </div>

      
    <div className="info-side">
      
        <div className="info-container">
          <div className="today-info">
            <div className="list">
              <span className="title"> FEELS LIKE </span>
              <span className="value" id="precipitation" >
               {weatherData.feels}
              <span> °C </span>
              </span>
            </div>

            <div className="list">
              <span className="title"> HUMIDITY </span>
              <span className="value" id="humidity">
                 {weatherData.humidity}  
              <span> % </span>
              </span>
            </div>

            <div className="list">
              <span className="title"> WIND </span>
              <span className="value" id="wind">
                 {weatherData.wind} 
                 <span> km/h </span>
              </span>
            </div>
          
        

        <div className="week-container">
          <ul className="week-list">
            <li className="week">
              <img className="day-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="clear" id="day-icon" 
              />
              <span className="day-time">12:00</span> 
              <span className="day-temp">14°C</span> 
            </li>
            <li className="week">
              <img className="day-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="clear" id="day-icon" 
              />
              <span className="day-time">12:00</span> 
              <span className="day-temp">14°C</span> 
            </li>
            <li className="week">
              <img className="day-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="clear" id="day-icon" 
              />
              <span className="day-time">12:00</span> 
              <span className="day-temp">14°C</span> 
            </li>
            <li className="week">
              <img className="day-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="clear" id="day-icon" 
              />
              <span className="day-time">12:00</span> 
              <span className="day-temp">14°C</span> 
            </li>
        </ul>
      </div>

        <div className="search-location">
            <div className="form-horizontal">
              <input 
              type="search" 
              placeholder="Type a city..." 
              autoComplete="off" 
              id="city-input"
              />
                  <button type="submit" 
                          value="search" 
                          id="current-location-btn">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACSElEQVRIicWWP2sUQRyG34nxxAtYaTAeXq4waBAV04m5wk7ENtpERLQwiKKgYiWkyAfQIqLFofgBJFYX/AqSaKFWYuIfIiYWCSbeyZ2Pxc7BuM7u7borvjBw/Obd95mZ3ZsZ6T/JpDEDmyQdt61iywuS6pLqxph2vsMLoFXgNdF6BYzmDT0FNGOgHTWBsbygh4DvCaAdbQAH8gA/SwHtaDYrtBIRPA3st+2ep/8nUM4CPusJfeLxzXh8Z+Kye7qwd3pqTz21GU9tVxbwiqc2kBDS6JIdLWDUs4RfgD2OZwhY9viOxWXH7lxAQdInSdtDXesKdisp2MX6Qv0rkkrGmB9JJhgFvxvxZcfpzl8DHfAw0EoBbQHDmcEW/jAFuJYL1IIrBFthN60Dg7mBLfxWAvDNXKEW3AvMxUDngN7cwRY+BKx6oN/I8YPqAUbsEk849XEPeNzpn7DPjADJbzhAEbgCLDrBLaDqeGpOX82pV/n9r7cAXAa2doMeBT6GZtMG3gBTocE9t63o1Kestx3K+AAciYKWgTXHPA9cBPoj/CWgFNHXb5f8hZO3Cuz2ma85puup3k+EAAPccHKv+kwnHcNbYAzYnAFaAE4D75zcE1Gjexx6N0vAfYKbyN4Es9sHnAMeAJ9DWY9cvwk/LOmSpNuSdnjym5KWJH1VcND3SCooODYH7O+wliVNSpo2xhA3eAF9wAVgFmiQXg2gDpwHwmf1nzOOGMQWSYclHZQ0KKksqShpm7WsSdqQ9F7SoqSXkuYzXQL+pX4BZSKNh0/Ef64AAAAASUVORK5CYII="
                          id="current-location-icon"
                          alt="gradient-color" />
                  </button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>


);

} else {

  const apiKey = "45e0d74a1bc7be61b894ed215a9def13";
  let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    
    <h1>Loading...</h1>
    )
}

  }

  


  