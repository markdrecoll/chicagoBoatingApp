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

                for (let i = 12; i < weatherData.data.hours.length - 72; i += 24) {
                    goodWeather.push(weatherData.data.hours[i])
                }
                setWeatherList(goodWeather);
            })

        API.getItinery().then((data) => {
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
    function getTheDate(apiDate) {
        let date = apiDate.split("T")[0];
        let newDate = date.split("-");
        return newDate[1] + "/" + newDate[2] + "/" + newDate[0]
    }

    return (
        <>
            <h1>Weather List</h1>
            <div className="container row justify-content-center">
                {weatherList.map(weatherItem => (
                    <div className="card col-3 mx-2 my-2" style={{ "width": "18rem" }}>
                        <div className="card-body row">
                            <h4 className="card-title card-header mb-3 text-center">{getTheDate(weatherItem.time)}</h4>
                            <h6 className="card-subtitle">Wave Height</h6>
                            <p className="card-text">{metersToFeet(weatherItem.waveHeight.meteo)}ft {(weatherItem.waveDirection.meteo).toFixed(0)}°</p>
                            {weatherItem.waveHeight.meteo > .8 ? (<p className="bg-danger p-2 text-light">Dangerous Wave Condtions</p>): weatherItem.waveHeight.meteo < .3 ?(<p className="bg-success p-2 text-light rounded-3">Optimal Boating Contiditions</p>):(<p className="bg-warning p-2 rounded-1">Proceed with Caution</p>)}
                            <h6 className="card-subtitle">Water Temperature</h6>
                            <p className="card-text">{celciusToFahrenheit(weatherItem.waterTemperature.noaa)}° F</p>
                            <h6 className="card-subtitle">Wind Speed</h6>
                            <p className="card-text">{kphToMph(weatherItem.windSpeed.noaa)} Mph {(weatherItem.windDirection.noaa).toFixed(0)}°</p>
                            <div className="card-footer row justify-content-center">
                                <div className="col-6"><CreateItinerary  weatherDataStuff={weatherItem} /></div>
                            
                            <div className="col-6"><ViewItinerary  itineraryData={itineraryData} date={getTheDate(weatherItem.time)} /></div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeatherList;