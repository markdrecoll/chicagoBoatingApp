import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import CreateItinerary from '../components/CreateItinerary';

function WeatherList() {

    const [weatherList, setWeatherList] = useState([]);

    // const [waveHeight, setWaveHeight] = useState({});

    useEffect(() => {
        API.getAllWeather()

            .then(weatherData => {

                var goodWeather = []

                for (let i = 12; i < weatherData.data.hours.length; i += 24) {
                    console.log('Looping through weather data.', weatherData.data.hours[i]);
                    goodWeather.push(weatherData.data.hours[i])
                }
                setWeatherList(goodWeather);
            })
    }, []);

    function celciusToFahrenheit(temperature) {
        return ((temperature * (9 / 5)) + 32).toFixed(0);
    }
    function kphToMph(speed) {
        return (speed / 1.609344).toFixed(0);
    }
    function metersToFeet(measurement) {
        return (measurement * 3.28).toFixed(1);
    }
    function splitTime(time) {
        let date = time.split("T")[0];
        return date.split("-");
    }

    return (
        <>
            <h1>Weather List</h1>
            {weatherList.map(weatherItem => (
                <div className="card" style={{ "width": "18rem" }}>
                    <div className="card-body">
                        <h4 className="card-title">
                            {splitTime(weatherItem.time)[1]}/
                            {splitTime(weatherItem.time)[2]}/
                            {splitTime(weatherItem.time)[0]}
                        </h4>
                        <h6 className="card-subtitle">Wave Height</h6>
                        <p className="card-text">{metersToFeet(weatherItem.waveHeight.meteo)}ft {(weatherItem.waveDirection.meteo).toFixed(0)}°</p>
                        <h6 className="card-subtitle">Water Temperature</h6>
                        <p className="card-text">{celciusToFahrenheit(weatherItem.waterTemperature.noaa)}° F</p>
                        <h6 className="card-subtitle">Wind Speed</h6>
                        <p className="card-text">{kphToMph(weatherItem.windSpeed.noaa)} Mph {(weatherItem.windDirection.noaa).toFixed(0)}°</p>
                        <CreateItinerary weatherDataStuff={weatherItem} />
                        <a href="#" className="btn btn-secondary btn-sm">View Itinerary</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default WeatherList;