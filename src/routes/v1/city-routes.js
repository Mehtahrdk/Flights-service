const express = require('express');

const { CityControllers }  = require('../../controllers');


const router = express.Router();

// /api/v1/cities POST
router
     .post('/',
           CityControllers.createCity);


module.exports = router;