import React, {useState} from 'react';
import WeatherCard from "./components/WeatherCard";
const cities = require('./data'); 
import Location from "./components/Location"
import Form from "./components/Form"



function App() {
    const [location, setLocation] = useState("2644508")
    const [cityName, setCityName] = useState("Edison")
    const [country, setCountry] = useState("US")
    const [region,setRegion] = useState("NJ")
    return (
        <>
          <h1 className="title">REACTIVE WEATHER</h1>
          <Form location = {location} setLocation = {setLocation} cityName={cityName} setCityName={setCityName} setCountry={setCountry} setRegion={setRegion}/>
        
          <h3 className="subtitle">Up to the minute weather news</h3>
          <div className="app">
          <Location location={location} setLocation={setLocation} data ={cities} cityName={cityName} country={country} region={region}/>

            {cities.map((city) => (
              <WeatherCard key={city.city} city={city} />
            ))}
    
            
          </div>
        </>
      );
}


module.exports = App