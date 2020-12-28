import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
          <Weather defaultCity="Montreal" />
       
      </div>
      <footer>
        This project was coded by Vanessa Barbiero and is{" "}
      <a href="https://github.com/vbarbiero0/react-weather-app"
      target="_blank" rel="noreferrer">
         open-sourced on Github
      </a>
      </footer>
    </div>
  );
}


