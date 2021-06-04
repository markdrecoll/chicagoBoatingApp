const db = require('../models');

module.exports = {
    findAllWeather: (req, res) => {
        db.Weather
            .find({}).then(weatherData => res.json(weatherData))
    }
}