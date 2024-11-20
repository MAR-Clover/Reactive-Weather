import React, { useState, useEffect } from "react";
import sunny from "../assets/Sunny.svg"
 import rainy from "../assets/Rainy.svg"
 import cloudy from "../assets/Cloudy.svg"
 import partlyCloudy from "../assets/PartlyCloudy.svg"

// We need to search the data array passed as a prop to find the object that has the city that matches our location state. Explore how to use .find() to achieve this.
// Once you have found the corresponding data, return a card similar to the one in WeatherCard.js. It can look similar to the card below.
// NOTE: It may help to turn the icon conditional rendering you wrote into a helper function and import it into this component so that you can use DRY principles.

import React, { useState, useEffect } from "react";

function Location({ data, location, setLocation }) {
  const match = data.find((city) => city.city === location);
  const [weather, setWeather] = useState();

  useEffect(() => {
    
    if (match.forecast === "Sunny") {
      setWeather(sunny);
    } else if (match.forecast === "Rainy") {
      setWeather(rainy);
    } else if (match.forecast === "Cloudy") {
      setWeather(cloudy);
    } else if (match.forecast == "Partly cloudy"){
      setWeather(partlyCloudy);
    }
  }, [match.forecast]); 

 //this will just return a h1 if no match found; debugging purposes
  if (!match) {
    return <h1>Match not found</h1>;
  }

  return (
    <div className="card">
      <div className="img-container">
        <h2>Your location's weather</h2>
        <img
          className="card-img-top"
          src={weather}
          alt="Weather icon"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{match.city}</h3>
        <h5 className="card-text">{match.temperature}</h5>
        <h5 className="card-text">It is {match.forecast} out today</h5>
      </div>
    </div>
  );
}

export default Location;
