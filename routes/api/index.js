const router = require("express").Router();
const weatherApi = require("./weatherApi")
const activityApi = require("./activityApi")
const userApi = require("./userApi")

router.use("/weather", weatherApi)
router.use("/activity", activityApi)
router.use('/user', userApi)

module.exports = router;
