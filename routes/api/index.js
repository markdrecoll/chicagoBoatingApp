const router = require("express").Router();
const weatherApi = require("./weatherApi")
const regularWeatherApi = require("./regularweatherApi")
const activityApi = require("./activityApi")
const userApi = require("./userApi")

router.use("/weather", weatherApi)
router.use("/regularweather", regularWeatherApi)
router.use("/activity", activityApi)
router.use('/user', userApi)

module.exports = router;
