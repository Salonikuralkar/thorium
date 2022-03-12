const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/weatherController")

const MemeController=require("../controllers/memeController")



router.get("/weather/london", CowinController.getWeatherOfLondon)


router.get("/weather/cities", CowinController.getWeatherOfAllCities)



router.post("/memes", MemeController.getMemes)

module.exports = router;