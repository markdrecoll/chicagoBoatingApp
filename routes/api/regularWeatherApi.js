const router = require("express").Router();
const axios = require('axios')
require('dotenv').config()

router.get('/', function(req,res){
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=b47cbc5dede4579f5550da5d2bb84dc3`,
    {headers: {Authorization: process.env.apiKey}})
    .then(data => {
        res.json(data.data);
    }).catch(error => {
        console.log(error);
    })
})

module.exports = router;