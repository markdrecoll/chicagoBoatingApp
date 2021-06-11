const router = require("express").Router();
const axios = require('axios')
require('dotenv').config()

const openWeatherApiKey = process.env.apiKey2

router.get('/', function(req,res){
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=41.9&lon=-87.6&appid=${openWeatherApiKey}`)
    .then(data => {
        res.json(data.data);
    }).catch(error => {
        console.log(error);
    })
})

module.exports = router;