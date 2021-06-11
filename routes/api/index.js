const router = require("express").Router();
const weatherApi = require("./weatherApi")
const regularWeatherApi = require("./regularWeatherApi")
const activityApi = require("./activityApi")
const userApi = require("./userApi")
const harborApi = require('./harbor')

router.use("/weather", weatherApi)
router.use("/regularweather", regularWeatherApi)
router.use("/activity", activityApi)
router.use('/user', userApi)
router.use('/harbor', harborApi )

module.exports = router;