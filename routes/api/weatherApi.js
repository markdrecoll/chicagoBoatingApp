const router = require("express").Router();
const axios = require('axios')
require('dotenv').config()

const weatherParamsToPassIn = "waterTemperature,waveHeight,cloudCover,windSpeed,waveDirection,windDirection"

router.get('/', function(req,res){
    axios.get(`https://api.stormglass.io/v2/weather/point?lat=41.9&lng=-87.6&params=${weatherParamsToPassIn}`,
    {headers: {Authorization: process.env.apiKey}})
    .then(data => {
        res.json(data.data);
    }).catch(error => {
        console.log(error);
    })
})

module.exports = router;