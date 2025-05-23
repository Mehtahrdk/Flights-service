const { AirportRepository }=require('../repositories');
const { StatusCodes }=require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data)
{
    try{

        const airport= await airportRepository.create(data);
        return airport;

    }catch(error)
    {
        if(error.name=='SequelizeValidationError')
        {
            let explanation=[];

            error.errors.forEach((err)=>
            {
                explanation.push(err.message);

            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new Airport object',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}
async function getAirports()
{
    try{
        const airport=await airportRepository.getAll();
        return airport;
    }
    catch(error)
    {
        throw new AppError('cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getAirports(id)
{
    try{
        const airport = await airportRepository.get(id);
        
        return airport;
    }
        catch(error)
        {
            if(error.statusCode == StatusCodes.NOT_FOUND)
            {
                throw new AppError('the airport you requested is not present',error.statusCode);
            }

            throw new AppError('cannot fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

async function destroyAirports(id)
{
    try{
        const response = await airportRepository.destroy(id);
        return response;
    }
    catch(error)
    {

        if(error.statusCode == StatusCodes.NOT_FOUND)
            {
                throw new AppError('the airplane you requested to delete is not present',error.statusCode);
            }

        throw new AppError('cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }


}

module.exports={
    createAirport,
    getAirports,
    getAirports,
    destroyAirports
}