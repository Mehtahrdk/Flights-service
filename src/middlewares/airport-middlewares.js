const { StatusCodes }=require('http-status-codes');

const  { ErrorResponse }=require('../utils/common');

function validateCreateRequest(req,res,next)
{
    if(!req.body.name)
    {
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error= new AppError(['name not found in the oncoming request']);
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);
    }
    if(!req.body.code)
    {
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error=new AppError(['airport code  not found in oncoming request in the correct form']);
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);
    }

    if(!req.body.cityId)
    {
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error=new AppError(['city Id not found in oncoming request in the correct form']);
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);
    }

    next();
}

module.exports={
    validateCreateRequest
}