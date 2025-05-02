class AppError extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCodes=statusCodes;
        this.explanation=message;
    }
}

module.exports=AppError;
