import React, { useEffect, useState } from 'react';
import API from '../utils/api';
function WeatherList() {

    const [weatherList, setWeatherList] = useState([]);

    const [newWeatherList, setNewWeatherList] = useState([]);

    useEffect(() => {
        API.getAllWeather()
        
        .then(weatherData => {
            console.log(weatherData.data.hours);

            var goodWeather = []

            for(let i=12; i<weatherData.data.hours.length; i+=24){
                console.log(' looping!!',weatherData.data.hours[i]);
                goodWeather.push(weatherData.data.hours[i]) 
                
            }
            console.log('')
            setWeatherList(goodWeather);
        })


     }, []);



    console.log('Weather list!!!', weatherList)

    return (
        <>
        <h1>Weather List</h1>
        {weatherList.map(weatherItem => (
            <div className="card" style={{"width": "18rem"}}>
            
            <div className="card-body">
              <h5 className="card-title">{weatherItem.time}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
        </>
    )
}

export default WeatherList;