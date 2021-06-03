const router = require("express").Router();
const empRoutes = require("./empApi");
const weatherApi = require("./weatherApi")

// Employee routes /api/employees
router.use("/employees", empRoutes);
router.use("/weather", weatherApi)


module.exports = router;
