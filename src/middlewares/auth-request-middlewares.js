const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { UserService } = require('../services');

function validateAuthRequest(req, res, next) {
    if(!req.body.email) {
      console.log('Email not found in the request body');
        ErrorResponse.message = 'Something went wrong while authenticating user';
        ErrorResponse.error = new AppError(['Email not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.password) {
        ErrorResponse.message = 'Something went wrong while authenticating user';
        ErrorResponse.error = new AppError(['password not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateAuthRequest
}
