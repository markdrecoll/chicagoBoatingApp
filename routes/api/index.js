const router = require("express").Router();
const empRoutes = require("./empApi");
const weatherApi = require("./weatherApi")
const activityApi = require("./activityApi")

// Employee routes /api/employees
router.use("/employees", empRoutes);
router.use("/weather", weatherApi)
router.use("/activity", activityApi)

module.exports = router;
