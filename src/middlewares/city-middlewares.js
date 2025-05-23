const { StatusCodes }=require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const  { ErrorResponse }=require('../utils/common');

function validateCreateRequest(req,res,next)
{
    if(!req.body.name)
    {
        ErrorResponse.message='something went wrong while creating city';
        ErrorResponse.error= new AppError(['city name was not found in incoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}