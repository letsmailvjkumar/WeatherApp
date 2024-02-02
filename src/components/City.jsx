import React, { useState, useEffect } from "react";
import {
  clouds,
  sunny,
  rain,
  lightrain,
  heavyrain,
  clearsky,
} from "../assets/images";

const City = ({ data, showCelsius }) => {
  const [selectedItem, setSelectedItem] = useState(0);


  // Filter data for 12 PM (1200 hours)
  const afternoonData = data.filter((item) => {
    return item.dt_txt.includes("12:00:00");
  });

  function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2);
  }

  

  const getDayOfWeek = (dateString) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const getWeatherImage = (description) => {
    const formattedDescription = description.toLowerCase().replace(/\s/g, "");
    const weatherImages = {
      clouds,
      sunny,
      rain,
      lightrain,
      heavyrain,
      clearsky,
    };
    return weatherImages[formattedDescription] || sunny;
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="flex mt-3">
      {afternoonData.map((item, index) => (
        <div
          key={index}
          className={`p-1 flex flex-col items-center  ${
            index === selectedItem ? "bg-slate-600" : ""
          }`}
          onClick={() => handleItemClick(index)}
        >
          <div>
            <p>{getDayOfWeek(item.dt_txt)}</p>
          </div>
          <div>
            <img src={getWeatherImage(item.weather[0].main)} alt="weather-image" />
          </div>
          <div>
          <p>
          {showCelsius
            ? fahrenheitToCelsius(item.main.temp_max)
            : item.main.temp_max}° |{" "}
          {showCelsius
            ? fahrenheitToCelsius(item.main.temp_min)
            : item.main.temp_min}°
        </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;