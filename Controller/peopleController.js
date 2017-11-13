/*
    GET     /forums              ->  index
    GET     /forums/new          ->  new
    POST    /forums              ->  create
    GET     /forums/:forum       ->  show
    GET     /forums/:forum/edit  ->  edit
    PUT     /forums/:forum       ->  update
    DELETE  /forums/:forum       ->  destroy
*/
var {mongo, people} = require('../model/people');
var multer  =   require('multer');

exports.new = function(req, res){

};
exports.index = function(req, res) {

    var query = people.find({});
        query.select('');

        query.exec(function (err, person) {
            if (err)
                return handleError(err);
            res.json(person);
        });
};

exports.create = function(req, res) {
    // console.log(req.body);
    console.log(req.body);
    people.collection.insert(req.body);

};

exports.show = function(req, res) {
 console.log(req.params.c);
  var query = people.findById(req.params.c);
  query.select('');

  query.exec(function (err, person) {
      if (err)
          return handleError(err);
      console.log(person);
      res.json(person);
  });
};

exports.destroy = function(req, res) {

  var del = people.findByIdAndRemove(req.params.c);

  del.exec(function (err, person) {
      if (err)
          return handleError(err);
  });
};
