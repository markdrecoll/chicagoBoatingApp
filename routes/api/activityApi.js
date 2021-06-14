const router = require("express").Router();
const axios = require('axios')
const Itinerary = require("../../models/itinerary");
var mongoose = require('mongoose');
const db = require('../../models');

router.post('/', function (req, res) {
    Itinerary.create({ text: req.body.text, user: req.session.user_id, date:req.body.date }).then(function (newItin) {
        res.json(newItin)
    })
})

router.get('/myItinerary', (req, res) =>{
    if (req.session.user_id) {
        db.Itinerary.find
        ({user: req.session.user_id}).then(itinFound => {
            res.json(itinFound)
    })
    } else {
        res.send('Cant find the Itinery, breaux')
    }
})

router.get('/allItineraries', function (req, res) {
    Itinerary.find({}, function (err, docs) {
        res.json(docs);
    });
})

module.exports = router;