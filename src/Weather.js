import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "45e0d74a1bc7be61b894ed215a9def13";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   
  }


  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  } 

  function handleCityChange(event) {
    setCity(event.target.value);
  }


  if (weatherData.ready) {

    return (
  <div className="Weather"> 
  
    <WeatherInfo data={weatherData} />
  
    <div className="info-side">
        <div className="info-container">
          <div className="today-info">
            <div className="list">
              <span className="title"> FEELS LIKE </span>
              <span className="value">
               {weatherData.feels}
              <span> °C </span>
              </span>
            </div>

            <div className="list">
              <span className="title"> HUMIDITY </span>
              <span className="value">
                 {weatherData.humidity}  
              <span> % </span>
              </span>
            </div>

            <div className="list">
              <span className="title"> WIND </span>
              <span className="value">
                 {weatherData.wind} 
                 <span> km/h </span>
              </span>
            </div>
         </div> 
        
        
        <WeatherForecast city={weatherData.city}/>
          
   
     
        <div className="search-location">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <input 
              type="search" 
              placeholder="Type a city..." 
              autoComplete="off" 
              id="city-input"
              onChange={handleCityChange}
              />
                  <button type="submit" 
                          value="search" 
                          id="current-location-btn">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACSElEQVRIicWWP2sUQRyG34nxxAtYaTAeXq4waBAV04m5wk7ENtpERLQwiKKgYiWkyAfQIqLFofgBJFYX/AqSaKFWYuIfIiYWCSbeyZ2Pxc7BuM7u7borvjBw/Obd95mZ3ZsZ6T/JpDEDmyQdt61iywuS6pLqxph2vsMLoFXgNdF6BYzmDT0FNGOgHTWBsbygh4DvCaAdbQAH8gA/SwHtaDYrtBIRPA3st+2ep/8nUM4CPusJfeLxzXh8Z+Kye7qwd3pqTz21GU9tVxbwiqc2kBDS6JIdLWDUs4RfgD2OZwhY9viOxWXH7lxAQdInSdtDXesKdisp2MX6Qv0rkkrGmB9JJhgFvxvxZcfpzl8DHfAw0EoBbQHDmcEW/jAFuJYL1IIrBFthN60Dg7mBLfxWAvDNXKEW3AvMxUDngN7cwRY+BKx6oN/I8YPqAUbsEk849XEPeNzpn7DPjADJbzhAEbgCLDrBLaDqeGpOX82pV/n9r7cAXAa2doMeBT6GZtMG3gBTocE9t63o1Kestx3K+AAciYKWgTXHPA9cBPoj/CWgFNHXb5f8hZO3Cuz2ma85puup3k+EAAPccHKv+kwnHcNbYAzYnAFaAE4D75zcE1Gjexx6N0vAfYKbyN4Es9sHnAMeAJ9DWY9cvwk/LOmSpNuSdnjym5KWJH1VcND3SCooODYH7O+wliVNSpo2xhA3eAF9wAVgFmiQXg2gDpwHwmf1nzOOGMQWSYclHZQ0KKksqShpm7WsSdqQ9F7SoqSXkuYzXQL+pX4BZSKNh0/Ef64AAAAASUVORK5CYII="
                          id="current-location-icon"
                          alt="gradient-color" />
                  </button>
            </form> 
          </div>
        </div>
    </div>
  </div>

);

} else {
    search()
    return (
      <h1>Loading...</h1>
      );
  }
}

  


  