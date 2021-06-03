const router = require("express").Router();
const Axios = require('axios')



router.get('/', function(req,res){
    Axios.get('https://api.stormglass.io/v2/weather/point?lat=41.9&lng=-87.6&params=waveHeight', {headers: {Authorization: '343ae392-c30b-11eb-9f40-0242ac130002-343ae496-c30b-11eb-9f40-0242ac130002'}})
    .then(data => {
        // console.log(data);
        res.json(data.data);
    })
})

module.exports = router;