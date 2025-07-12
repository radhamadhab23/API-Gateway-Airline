const dotenv=require('dotenv');
dotenv.config();
module.exports={
    PORT:process.env.PORT || 3000
    ,SALT_ROUNDS:process.env.SALT_ROUNDS || 10
    ,JWT_SECRET:process.env.JWT_SECRET || 'default'
    ,JWT_EXPIRY:process.env.JWT_EXPIRY || '1h'
};
