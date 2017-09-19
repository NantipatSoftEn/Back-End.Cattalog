
// include connection
var {mongo, people} = require('../model/people');

exports.index = function(req, res) {
    var query = people.find({});
        query.select(''); // in Mysql select * form people
        query.exec(function (err, person) {
            if (err)
                return handleError(err);
            res.json(person);
        });
};

exports.create = function(req, res) {
    people.collection.insert(req.body);
};

exports.show = function(req, res) {
  res.send('show forum ' + req.params.c);
};

exports.update = function(req, res) {
  res.send('update forum ' + req.params.forum);
};

exports.destroy = function(req, res) {
  res.send('destroy forum ' + req.params.forum);
};
