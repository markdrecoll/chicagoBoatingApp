const router = require("express").Router();
const axios = require('axios')
const Itinerary = require("../../models/itinerary");
var mongoose = require('mongoose');

router.post('/', function (req, res) {
    Itinerary.create({ text: req.body.text, user: req.session.user_id, date:req.body.date }).then(function (newItin) {
        res.json(newItin)
    })
})

router.get('/myItinerary', function (req, res) {
    Itinerary.find({
        'user': mongoose.Types.ObjectId(req.session.user_id)
    }, function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})

router.get('/allItineraries', function (req, res) {
    Itinerary.find({}, function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})

module.exports = router;