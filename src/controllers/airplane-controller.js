
console.log("airplane-controller.js loaded");

const { StatusCodes }=require('http-status-codes');
const { AirplaneService }=require('../services');
const {SuccessResponse ,ErrorResponse }=require('../utils/common');
const { response } = require('express');

async function createAirplane(req,res)
{
    try{

        console.log("Request Body:", req.body);

        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse.data=airplane;

        return res
               .status(StatusCodes.CREATED)
               .json(SuccessResponse);
    }catch(error)
    {
        ErrorResponse.error=error;
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
                

    }

}

async function getAirplanes(req,res)
{
    try{
        const airplanes= await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
        catch(error)
        {
            ErrorResponse.error=error;
            return res
                   .status(error.statusCode)
                   .json(ErrorResponse);

        }

}
/*
POST:/airplanes/:id
req body{}
*/ 

async function getAirplane(req,res)
{
    try{
        const airplanes= await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
        catch(error)
        {
            ErrorResponse.error=error;
            return res
                    .status(error.statusCode)
                    .json(ErrorResponse);

        }

}

async function getAirplanes(req,res)
{
    try{
        const airplanes= await AirplaneService.getAirplanes();
        SuccessResponse.data=airplanes;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
        catch(error)
        {
            ErrorResponse.error=error;
            return res
                   .status(error.statusCode)
                   .json(ErrorResponse);

        }

}
async function destroyAirplane(req,res)
{
    try{
        const airplanes= await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=airplanes;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    }
        catch(error)
        {
            ErrorResponse.error=error;
            return res
                   .status(error.statusCode)
                   .json(ErrorResponse);

        }

}

module.exports=
{
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}