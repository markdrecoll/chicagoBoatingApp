const router = require("express").Router();
const axios = require('axios')

const weatherParamsToPassIn = "waterTemperature,waveHeight,cloudCover,windSpeed,waveDirection,windDirection"

router.get('/', function(req,res){
    axios.get(`https://api.stormglass.io/v2/weather/point?lat=41.9&lng=-87.6&params=${weatherParamsToPassIn}`,
    {headers: {Authorization: '343ae392-c30b-11eb-9f40-0242ac130002-343ae496-c30b-11eb-9f40-0242ac130002'}})
    .then(data => {
        res.json(data.data);
    }).catch(error => {
        console.log(error);
    })
})

module.exports = router;