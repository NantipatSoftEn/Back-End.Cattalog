/*
    GET     /forums              ->  index
    GET     /forums/new          ->  new    -> view
    POST    /forums              ->  create -> insert
    GET     /forums/:forum       ->  show
    GET     /forums/:forum/edit  ->  edit   -> view
    PUT     /forums/:forum       ->  update -> update
    DELETE  /forums/:forum       ->  destroy
*/
var {mongo, people} = require('../model/people');
var multer  =   require('multer');

exports.new = function(req, res){

};
exports.index = function(req, res) {

    var query = people.find({}).sort({_id: 'descending'});
        query.select('');

        query.exec(function (err, person) {
            if (err)
                return handleError(err);
            res.json(person);
        });
};

exports.create = function(req, res) {
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

exports.update = function(req, res){
  console.log(req.body);
  console.log("update ="+req.params.c);
  people.findByIdAndUpdate(req.params.c,
      { $set: { name:req.body.name,
                facebook:req.body.facebook,
                rank: req.body.rank }},
      { new: true },function (err, people) {
          if (err) return handleError(err);
            res.send(people);
      });
};


exports.destroy = function(req, res) {
  console.log("id =",req.params.c);
  var del = people.findByIdAndRemove(req.params.c);

  del.exec(function (err, person) {
      if (err)
          return handleError(err);
  });
};
