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
            setItineraryData(data.data);d
        })
    }, []);

    function celciusToFahrenheit(temperature) {
        if(temperature){
            return ((temperature * (9 / 5)) + 32).toFixed(0);
        }
    }
    function kphToMph(speed) {
        if(speed){
            return (speed / 1.609344).toFixed(0);
        }
    }
    function metersToFeet(measurement) {
        if(measurement){
            return (measurement * 3.28).toFixed(1);
        }
    }
    function getTheDate(apiDate) {
        if(apiDate){
            let date = apiDate.split("T")[0];
            let newDate = date.split("-");
            return newDate[1] + "/" + newDate[2] + "/" + newDate[0]
        }
    }
    return (
        <div className="justify-content-center">
            <div  className="card rounded p-5 my-4 bg-img justify-content-center" style={{backgroundImage: 'url("./assets/images/Chicago-Sunrise.jpeg")', backgroundSize:'cover', height:'500px', backgroundPosition: 'center', color:'white'}}>
                <h1>The 7 Day Marine Forcast</h1>
                <div className="container">
                    <h4>Plan your next boating extravaganza all based <br/> on the the marine conditions displayed below</h4>
                </div>
            </div>
            
            <div className="container rounded row justify-content-center border py-5 mb-3">
                <h2 className="mb-5">7 Day Marine Forecast</h2>
                {weatherList.map(weatherItem => (
                    <div className="card col-lg-3 mx-3 my-2"  key={weatherItem.time}>
                        <div className="card-body row">
                            <h4 className="card-title card-header mb-3 text-center">{weatherItem.time ? (getTheDate(weatherItem.time)) : "n/a"}</h4>
                            <h6 className="card-subtitle">Wave Height</h6>
                            {/* <p className="card-text">{(weatherItem.waveHeight.meteo && weatherItem.waveDirection.meteo) ? (metersToFeet(weatherItem.waveHeight.meteo)ft weatherItem.waveDirection.meteo.toFixed(0))°) : "n/a"}</p> */}
                            {weatherItem.waveHeight.meteo > .8 ? (<p className="bg-danger p-2 text-light">Dangerous Wave Condtions</p>): weatherItem.waveHeight.meteo < .3 ?(<p className="bg-success p-2 text-light rounded-3">Optimal Boating Conditions</p>):(<p className="bg-warning p-2 rounded-1">Proceed with Caution</p>)}
                            <h6 className="card-subtitle">Water Temperature</h6>
                            <p className="card-text">{celciusToFahrenheit(weatherItem.waterTemperature.noaa)}° F</p>
                            <h6 className="card-subtitle">Wind Speed</h6>
                            <p className="card-text">{kphToMph(weatherItem.windSpeed.noaa)} Mph {(weatherItem.windDirection.noaa).toFixed(0)}°</p>
                            <div className="card-footer row justify-content-center">
                                {itineraryData.lenght==null? (<div className="col-6"><CreateItinerary  weatherDataStuff={weatherItem} /></div>):
                                    (
                                        <div className="col-6"><ViewItinerary  itineraryData={itineraryData} date={getTheDate(weatherItem.time)} /></div>
                                    )}
                                {itineraryData.map((itin)=>(
                                    itin.date === getTheDate(weatherItem.time)?(
                                        <div  className="d-none"><CreateItinerary  weatherDataStuff={weatherItem} /></div>,
                                        <div key={itin.text} className="col-6"><ViewItinerary  itineraryData={itineraryData} date={getTheDate(weatherItem.time)} /></div>
                                    ):(
                                        <div key={itin._id} className="d-none"><CreateItinerary  weatherDataStuff={weatherItem} /></div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherList;