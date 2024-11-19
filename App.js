import React, {useState} from 'react';
import WeatherCard from "./components/WeatherCard";
const cities = require('./data'); 
import Location from "./components/Location"

function App() {
    const [location, setLocation] = useState("Paris")
    return (
        <>
          <h1 className="title">REACTIVE WEATHER</h1>
          <h3 className="subtitle">Up to the minute weather news</h3>
          <div className="app">
          <Location location={location} setLocation={setLocation} data ={cities}/>
            {cities.map((city) => (
              <WeatherCard key={city.city} city={city} />
            ))}
    
            
          </div>
        </>
      );
}


module.exports = App