import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Vanessa Barbiero and is{" "}
      <a href="https://github.com/vbarbiero0/react-weather-app"
      target="_blank">
         open-sourced on Github
      </a>
      </footer>
      </div>
    </div>
  );
}


