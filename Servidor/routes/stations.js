const {Router} = require('express');
const { stationInformation} = require("../controllers/stationController");
const router = Router();

// ID from the station which we want to get the information
router.get('/station/:id', stationInformation);

module.exports = router;


