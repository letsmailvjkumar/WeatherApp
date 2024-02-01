import React, { useState, useEffect} from 'react'
import axios from 'axios'
const City = ({searchTerm}) => {
    const [currentTemp, setCurrentTemp] = useState("");
    const [mintemp, setMinTemp] = useState("");
    const [maxtemp, setMaxTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [speed, setSpeed] = useState("");
    const [data, setData] = useState([])

    useEffect(() => {
        async function getWeather() {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=ffc8fff83968f8f16f6d64b419a54728`);
            setData(response.data.list);
          } catch (error) {
            console.error(error);
          }
        }
    
        getWeather();
      }, [searchTerm]);

      // Filter data for 12 PM (1200 hours)
    const afternoonData = data.filter(item => {
        return item.dt_txt.includes('12:00:00');
    });

    function fahrenheitToCelsius(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
      }

    return (
    <div>
      {afternoonData.map((item, index) => (
        <div key={index}>
          <p>Current Temperature: {item.main.temp}</p>
          <p>Min Temperature: {item.main.temp_min} | Max Temperature: {item.main.temp_max}</p>
          <p>Humidity: {item.main.humidity}</p>
          <p>Wind Speed: {item.wind.speed}</p>
          <p>Description: {item.weather[0].main}</p>
          <p></p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default City