const { StatusCodes }=require('http-status-codes');
const { Logger }=require('../config');

class crudRepository
{
    constructor(model)
    {
        this.model=model;
    }


async create(data)
{
    try{

    const response=await this.model.create(data);
    return response;
    }catch(error)
    {
        Logger.error('something went wrong in the crud repo : create');
        throw error;
    }
}


async destroy(data)
{
    const response=await this.model.destroy({
        where:{
            id:data
        }
    });
    if(!response)
    {
        throw new AppError('not able to find the resource',StatusCodes.NOT_FOUND)
    }
    return response;
    
}

async get(data)
{
    
    const response=await this.model.findByPk(data);

    if(!response)
    {
        throw new AppError('not able to find the resource',StatusCodes.NOT_FOUND);
    }
    
    return response;
    
}

async getAll()
{
    const response=await this.model.findAll();
    return response;
    
}


async update(id,data)
{
   
    const response=await this.model.update(data,{
        where:{
            id: id
        }

    });
    return response;
}

}

module.exports=crudRepository;