import React, { useEffect, useState } from "react";
import { logo, search, thunderStorm } from "../assets/images";
import City from "./City";

const Location = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCity, setShowCity] = useState(false);

  const handleClick = () => {  
    setShowCity(true)
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowCity(false);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center navbar">
        <div className="flex items-center">
          <img src={logo} className="bg-transparent w-14 grayscale invert" />
          <div className="text-lg font-semibold">WeatherWise</div>
        </div>
        <div className="flex gap-5 links">
          <div className="cursor-pointer hover:underline">Home</div>
          <div className="cursor-pointer hover:underline">Map</div>
          <div className="cursor-pointer hover:underline">News</div>
          <div className="cursor-pointer hover:underline">Contact</div>
          <div className="cursor-pointer bg-blue-700 ps-2 pe-2">Get App</div>
        </div>
      </div>
      <div className="flex mt-20">
        <div className="w-[50%] left-section">
          <div className="text-4xl ">
            Various weather conditions throughout the entire 24/7 timeframe.
          </div>
          <div className="mt-5">
            Dive into real-time weather data, stay ahead of storms, and bask in
            the precision of our atmospheric insights.
          </div>
          <div className="w-full mt-5 text-black relative">
            <img
              src={search}
              alt="search-icon"
              className="w-4 absolute top-3 left-2 "
            />
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Enter your city name"
              className="w-[31em] p-[0.5rem] ps-8 outline-none "
            />
            <button
              onClick={handleClick}
              className="bg-blue-700 w-32 h-10 text-white font-medium"
            >
              Get Update
            </button>
          </div>
          <div className="mt-3">Best way to know your city weather *</div>
        </div>
        <div>
        {
            showCity && <City searchTerm={searchTerm} />
        }
        </div>
      </div>
    </div>
  );
};

export default Location;
