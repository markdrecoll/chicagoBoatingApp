import React, { useEffect, useState } from 'react';
import API from '../utils/api';
function WeatherList() {

    const [weatherList, setWeatherList] = useState([]);

    const [waveHeight, setWaveHeight] = useState({

    });

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

    function celciusToFahrenheit(temp){
        return ((temp*(9/5))+32).toFixed(1);
    }

    return (
        <>
        <h1>Weather List</h1>
        {weatherList.map(weatherItem => (
            // console.log(weatherItem.waveHeight.meteo)
            
            
            <div className="card" style={{"width": "18rem"}}>
                {/* {setWaveHeight(weatherItem.waveHeight)} */}
            <div className="card-body">
              <h5 className="card-title">{weatherItem.time}</h5>
              <p className="card-text">{celciusToFahrenheit(weatherItem.waterTemperature.noaa)}° F</p>
              <p className="card-text">{weatherItem.windSpeed.noaa} Kph</p>
              {/* <p className="card-text">{weatherItem.waveHeight.meteo}</p> */}
              <a href="#" class="btn btn-secondary btn-sm">Create Itinerary</a><br /><br />
              <a href="#" class="btn btn-secondary btn-sm">View Itinerary</a>
            </div>
          </div>
        ))}
        </>
    )
}

export default WeatherList;