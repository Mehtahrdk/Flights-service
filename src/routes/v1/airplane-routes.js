const express = require('express');
const { AirplaneControllers }  = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST
router
     .post('/',
           AirplaneMiddlewares.validateCreateRequest,
           AirplaneControllers.createAirplane);

router
     .get('/',
        AirplaneControllers.getAirplanes);

module.exports = router;