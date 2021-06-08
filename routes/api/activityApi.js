const router = require("express").Router();
const axios = require('axios')
const Itinerary = require("../../models/itinerary");

router.post('/', function(req,res){
    console.log("It's the body!", req.body);
    console.log('user signed in rn!!', req.session)
    Itinerary.create({text: req.body.data} ).then(function(newDUde) {
        res.json(newDUde)
    })
})

module.exports = router;