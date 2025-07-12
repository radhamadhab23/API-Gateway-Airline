const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const userRoutes = require('./user-routes');
const {AuthRequestMiddlewares} = require('../../middlewares');
router.get('/info', InfoController.info);
router.use('/signup', userRoutes);
module.exports=router;