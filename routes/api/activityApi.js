const router = require("express").Router();
const axios = require('axios')
const Itinerary = require("../../models/itinerary");

router.post('/', function(req,res){
    Itinerary.create({text: req.body.data} ).then(function(newItin) {
        res.json(newItin)
    })
})

module.exports = router;