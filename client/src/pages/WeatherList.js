import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import CreateItinerary from '../components/CreateItinerary';
import ViewItinerary from '../components/ViewItinerary';

function WeatherList() {

    const [weatherList, setWeatherList] = useState([]);
    const [itineraryData, setItineraryData] = useState([]);

    useEffect(() => {
        API.getAllWeather()

            .then(weatherData => {

                var goodWeather = []

                for (let i = 12; i < weatherData.data.hours.length-72; i += 24) {
                    console.log('Looping through weather data.', weatherData.data.hours[i]);
                    goodWeather.push(weatherData.data.hours[i])
                }
                setWeatherList(goodWeather);
            })

        API.getItinery().then((data)=>{
            console.log(data.data)
            setItineraryData(data.data);
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
            <div className="container row justify-content-center">
                {weatherList.map(weatherItem => (
                    <div className="card col-3 mx-2 my-2" style={{ "width": "18rem" }}>
                        {console.log("type of",typeof weatherItem.waveHeight)}
                        <div className="card-body">
                            <h4 className="card-title card-header mb-3 text-center">
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
                            <ViewItinerary itineraryData={itineraryData} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeatherList;