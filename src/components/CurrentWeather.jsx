import React, { useState, useEffect } from "react";
import axios from "axios";
import City from "./City";
import {
  clouds,
  sunny,
  rain,
  lightrain,
  heavyrain,
  clearsky,
} from "../assets/images";

const CurrentWeather = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [showCelsius, setShowCelsius] = useState(false);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=ffc8fff83968f8f16f6d64b419a54728&units=imperial`
        );
        setData(response.data.list);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("City not found. Please enter a valid city name.");
      }
    }

    getWeather();
  }, [searchTerm]);

   

  function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2);
  }

  const toggleTemperatureUnit = () => {
    setShowCelsius(!showCelsius);
  };

  // function to create a direction of wind using the degree
  const handleDirection = (degree) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  };
  const getWeatherImage = (description) => {
    // Remove spaces from the description
    const formattedDescription = description.toLowerCase().replace(/\s/g, "");

    // Map descriptions to corresponding images
    const weatherImages = {
      clouds,
      sunny,
      rain,
      lightrain,
      heavyrain,
    };

    // Use the mapped image if available, otherwise use a default image
    return weatherImages[formattedDescription] || clearsky;
  };
  
  

  if (error) {
    return (
        <div>
          <p>{error}</p>
          <button onClick={() => handleCityChange("delhi")}>
            Set Default City
          </button>
        </div>
      );
  }

  if (data.length === 0) {
    // Optional: You can render a loading state here while waiting for the data.
    return <p>Loading...</p>;
  }

  const firstItem = data[0];

  return (
    <div className="">
      <div className="flex items-center">
        <div className="font-semibold">{searchTerm.toUpperCase()}</div>
        <div>
          <img src={getWeatherImage(firstItem.weather[0].main)} alt="weather" />
        </div>
        <div>
          <p>
            {" "}
            {showCelsius
              ? fahrenheitToCelsius(firstItem.main.temp)
              : firstItem.main.temp}{" "}
            {showCelsius ? "°C" : "°F"}
          </p>
        </div>
        <div className="ms-3 border p-1">
          <button onClick={toggleTemperatureUnit}>
            {showCelsius ? "Switch to Fahrenheit" : "Switch to Celsius"}
          </button>
        </div>
      </div>
      <div>
        <div>
          <p>Expect {firstItem.weather[0].main}</p>
        </div>
        <div>
          <p>Humidity: {firstItem.main.humidity}</p>
        </div>
        <div>
          <p>
            Wind Speed: {firstItem.wind.speed} km/h |{" "}
            {handleDirection(firstItem.wind.deg)}
          </p>
        </div>

        
      </div>

      {data && <City data={data} showCelsius={showCelsius}  />}
    </div>
  );
};

export default CurrentWeather;
