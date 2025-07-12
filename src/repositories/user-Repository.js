const CrudRepository = require('./crud-repository');
const { StatusCodes } = require('http-status-codes');
const {User}= require('../models');
class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getUserByEmail(email) {
        const response = await this.model.findOne({
            where: {
                email: email
            }
        });
        if (!response) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }
        return response;
    }
}

module.exports = UserRepository;
