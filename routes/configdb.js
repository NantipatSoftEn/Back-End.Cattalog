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
//console.log(mongo.model('people').find());
//mongo.getcollection("peoples").find();
//mongo.model('people').find();

var query = people
            .findOne({ 'name': 'Zildjian' })
            .limit(5)
            .sort({ occupation: -1 })
            .exec( callback );



// selecting the `name` and `occupation` fields
query.select('name facebook');

// execute the query at a later time
query.exec(function (err, person) {
  if (err) return handleError(err);
  console.log(`aaa ${person.name} uuu ${person.facebook}`);
});

module.exports = {mongo, express};
