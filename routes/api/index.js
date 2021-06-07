const router = require("express").Router();
const empRoutes = require("./empApi");
const weatherApi = require("./weatherApi")
const activityApi = require("./activityApi")
const userApi = require("./userApi")

// Employee routes /api/employees
router.use("/employees", empRoutes);
router.use("/weather", weatherApi)
router.use("/activity", activityApi)
router.use('/user', userApi)

module.exports = router;
