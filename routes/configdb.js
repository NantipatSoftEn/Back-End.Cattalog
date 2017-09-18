var express = require('express');
var mongo = require('mongoose');
var peopleSchema = mongo.Schema({
    name: String,
    facebook:String,
    Rank:[Number],
    img:String
});

var people = mongo.model('people', peopleSchema);
//var data = new people({ name: 'Zildjian',facebook:'facebook',rank:50,img:"asdad" });
//data.save();
console.log(mongo.model('people').find());
//mongo.model('people').find();
module.exports = {mongo, express};
