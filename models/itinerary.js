const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    text: { type: String, required: true }   
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;