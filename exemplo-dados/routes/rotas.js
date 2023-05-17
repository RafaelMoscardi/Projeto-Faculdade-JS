const express = require("express")

const routescontroller = require("./routescontroller")

const router = express.Router()

router.get("/", routescontroller.home)
router.get("/guest", routescontroller.guest)
router.get("/hi", routescontroller.hi)

module.exports = router
