var {mongo, express,people} = require('./configdb');
//var router = express.Router();
var express  = require('express')
var Resource = require('express-resource')
var app = express();

var peopleController = require('../Controller/peopleController');

app.resource('c', peopleController);


module.exports = app;
