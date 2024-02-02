import React, { useEffect, useState } from "react";
import { logo, menu, search } from "../assets/images";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import '../styles/Location.css'
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
    <div className="max-[480px]:mx-3 container">
      <div className="flex items-center justify-between w-full max-[480px]:w-96">
        <div className="flex items-center">
          <img src={logo} className="bg-transparent w-14 grayscale invert" />
          <div className="text-lg font-semibold">WeatherWise</div>
        </div>
        <div className="mobile:hidden lg:flex gap-5 links ">
          <div className="cursor-pointer hover:underline">Home</div>
          <div className="cursor-pointer hover:underline">Map</div>
          <div className="cursor-pointer hover:underline">News</div>
          <div className="cursor-pointer hover:underline">Contact</div>
          <div className="cursor-pointer bg-blue-700 ps-2 pe-2">Get App</div>
        </div>
        <div className="lg:hidden grayscale invert menu">
          <img src={menu} alt="menu" className="w-5 menu"/>
        </div>
      </div>
      <div className="max-[480px]:mt-0 max-[480px]:flex-col max-[480px]:items-start flex justify-between mt-32 items-center">
        <div className="w-[50%] left-section ">
          <div className="text-4xl">
          <p className="max-[480px]:hidden">Various weather conditions throughout the entire 24/7 timeframe.</p>  
          

          </div>
          <div className="mt-5 max-[480px]:hidden ">
            Dive into real-time weather data, stay ahead of storms, and bask in
            the precision of our atmospheric insights.
          </div>
          <div className="max-[480px]:m-auto w-full mt-5 text-black relative">
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
              className="w-[31em] p-[0.5rem] ps-8 outline-none max-[480px]:w-auto "
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
        <div className="right-section">
        {
             showCity &&  <CurrentWeather searchTerm={searchTerm}  />
        }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
