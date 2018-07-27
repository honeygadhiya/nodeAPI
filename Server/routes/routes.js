const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/userController');
require('../config/loggerConfig');
const winston = require('winston');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//Middleware function to log request protocol
router.use('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    winston.log('warn', 'Hello distributed log files!');
    console.log("A request received at " + Date.now());
    next();
});

router.get('/user', controller.getusers);

router.get('/user/:userId',controller.get);

router.post('/user',controller.post);

router.put('/user/:userId',controller.put);

router.delete('/user/:userId',controller.delete);

module.exports = router;