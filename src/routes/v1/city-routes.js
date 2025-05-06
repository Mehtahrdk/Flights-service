const express = require('express');

const { CityControllers }  = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');


const router = express.Router();

// /api/v1/cities POST
router
     .post('/',
        CityMiddlewares.validateCreateRequest,
           CityControllers.createCity);


module.exports = router;