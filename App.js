import React, {useState} from 'react';
import WeatherCard from "./components/WeatherCard";
const cities = require('./data'); 
import Location from "./components/Location"
import Form from "./components/Form"

// In the components folder, create a Form.js file. Import this into App.js.
// Render the Form component near the top of your application. Pass it the location state and setLocation state setter function as props.

function App() {
    const [location, setLocation] = useState("Paris")
    return (
        <>
          <h1 className="title">REACTIVE WEATHER</h1>
          <Form location = {location} setLocation = {setLocation}/>
        
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