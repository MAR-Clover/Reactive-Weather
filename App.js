import React from 'react';
import WeatherCard from "./components/WeatherCard";
const cities = require('./data'); // Ensure correct path for cities data

function App() {
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {/* Map through cities array and pass the city object to WeatherCard */}
        {cities.map((city) => (
          <WeatherCard key={city.city} city={city} />
        ))}
      </div>
    </>
  );
}

//export default App;
module.exports = App