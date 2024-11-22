import React, { useState, useEffect } from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";

const weatherIcons = {
  Sunny: sunny,
  Rainy: rainy,
  Cloudy: cloudy,
  "Partly cloudy": partlyCloudy,
};

const apiKey = process.env.ACCU_API_KEY;


function Location({ location, cityName, country, region }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [forecastArray, setForeCastArray] = useState([]);

  useEffect(() => {
    async function fetchWeather () {
      try {
        
        const response = await fetch(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Unable to find data for this location");
        }

        const data = await response.json();
        const headlineText = data.Headline.Text;

        
        const dailyForecasts = data.DailyForecasts;

        const forecasts = dailyForecasts.map((forecast, index) => ({
          day: index + 1,
          date: forecast.Date,
          maxTemp: forecast.Temperature.Maximum.Value,
          minTemp: forecast.Temperature.Minimum.Value,
          iconPhrase: forecast.Day.IconPhrase,
          precipitation: forecast.Day.HasPrecipitation ? "Yes" : "No",
        }));

        setForeCastArray(forecasts);

       
        setWeatherData({
          city: cityName,
          region: region,
          country:country,
          temperature: {
            max: dailyForecasts[0].Temperature.Maximum.Value, 
            min: dailyForecasts[0].Temperature.Minimum.Value, 
          },
          forecast: headlineText, 
        });
        setError("");
      } catch (err) {
        console.log(err);
        setWeatherData(null);
        setError(err.message);
      }
    };

    if (location) {
      fetchWeather();
    }
  }, [location]);

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  if (!weatherData) {
    return <h2>Loading weather data...</h2>;
  }

  return (
    <div className="card">
      <div className="img-container">
        <h2>Your location's 5 day forecast </h2>
        <img
          className="card-img-top"
          src={weatherIcons[weatherData.forecast] || partlyCloudy}
          alt="Weather icon"
          id="icon"
        />
      </div>
      <div className="card-body">
        {forecastArray.length > 0 ? (
          <div
          style={{
            height: "400px", 
            overflowY: "auto", 
            padding: "10px",
            border: "1px solid #ddd", 
          }}
          
          >
            {forecastArray.map((forecast, index) => (
              <div key={index} className="card" style={{width:"300px"}}>
                <h3 className="card-title">{weatherData.city}</h3>
                <h4 className="card-title">{weatherData.region} ,{weatherData.country}</h4>
                <h5 className="card-text">
                  Max Temp: {forecast.maxTemp}°F
                </h5>
                <h5 className="card-text">
                  Min Temp: {forecast.minTemp}°F
                </h5>
                <h5 className="card-text">
                  Forecast: {forecast.iconPhrase}
                </h5>
                <h5 className="card-text">
                  Precipitation: {forecast.precipitation}
                </h5>
                <p>Date: {new Date(forecast.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No forecast data available.</p>
        )}
      </div>
    </div>
  );
}

export default Location;

