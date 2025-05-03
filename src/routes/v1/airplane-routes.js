const express = require('express');
const { AirplaneControllers }  = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST
router
     .post('/',
           AirplaneMiddlewares.validateCreateRequest,
           AirplaneControllers.createAirplane);

// /api/v1/airplanes GET
router
     .get('/',
        AirplaneControllers.getAirplanes);

// /api/v1/airplanes:id GET

router
     .get('/:id',
        AirplaneControllers.getAirplane);



module.exports = router;