import React, { useEffect, useState } from 'react';
import API from '../utils/api';
function WeatherList() {

    const [weatherList, setWeatherList] = useState([]);

    const [newWeatherList, setNewWeatherList] = useState([]);

    useEffect(() => {
        API.getAllWeather()
        
        .then(weatherData => {

            var goodWeather = []

            for(let i=12; i<weatherData.data.hours.length; i+=24){
                console.log(' looping!!',weatherData.data.hours[i]);
                goodWeather.push(weatherData.data.hours[i]) 
            }
            setWeatherList(goodWeather);
        })
     }, []);

    // function celciusToFahrenheit(temp){
    //     return (temp*(9/5))+32;
    // }

    // let convertedTemp = celciusToFahrenheit(weatherItem.waterTemperature.noaa);

    return (
        <>
        <h1>Weather List</h1>
        {weatherList.map(weatherItem => (
            <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{weatherItem.time}</h5>
              <p className="card-text">{weatherItem.waterTemperature.noaa}° C</p>
              <p className="card-text">{weatherItem.windSpeed.noaa} Kph</p>
              {/* <p className="card-text">{weatherItem.waveHeight.sg}</p> */}
              <a href="#" class="btn btn-secondary btn-sm">Create Itinerary</a><br /><br />
              <a href="#" class="btn btn-secondary btn-sm">View Itinerary</a>
            </div>
          </div>
        ))}
        </>
    )
}

export default WeatherList;