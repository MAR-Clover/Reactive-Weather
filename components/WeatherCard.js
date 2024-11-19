import React, { useState, useEffect } from "react";
import sunny from "../assets/Sunny.svg"
 import rainy from "../assets/Rainy.svg"
 import cloudy from "../assets/Cloudy.svg"
 import partlyCloudy from "../assets/PartlyCloudy.svg"



function WeatherCard({city}) {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    
    if (city.forecast === "Sunny") {
      setWeather(sunny);
    } else if (city.forecast === "Rainy") {
      setWeather(rainy);
    } else if (city.forecast === "Cloudy") {
      setWeather(cloudy);
    } else if (city.forecast == "Partly cloudy"){
      setWeather(partlyCloudy);
    }else{
      setWeather(cloudy)
    }
  }, [city.forecast]); 

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {weather} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}</h5>
            <h5 className="card-text">{city.forecast}</h5>
        </div>
    </div>
  );
};

module.exports = WeatherCard