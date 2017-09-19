var express = require('express');
var mongo = require('mongoose');
var peopleSchema = mongo.Schema({
    name: String,
    facebook:String,
    Rank:[Number],
    img:String
});

var people = mongo.model('people', peopleSchema);

module.exports = {mongo, express,people};
