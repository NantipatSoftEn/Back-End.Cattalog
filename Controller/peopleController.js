var {mongo, people} = require('../routes/configdb');

exports.index = function(req, res) {
    console.log('sdsd');
    var query = people.find({});

        query.select('name');

        query.exec(function (err, person) {
            if (err)
                return handleError(err);
            // for (var i = 0, len = person.length; i < len; i++) {
            //   console.log(`aaa ${person[i].name}`);
            // }
            res.json(person);
        });
};

exports.new = function(req, res) {
  res.send('new forum');
};

exports.create = function(req, res) {
  res.send('create forum');
};

exports.show = function(req, res) {
  res.send('show forum ' + req.params.forum);
};

exports.edit = function(req, res) {
  res.send('edit forum ' + req.params.forum);
};

exports.update = function(req, res) {
  res.send('update forum ' + req.params.forum);
};

exports.destroy = function(req, res) {
  res.send('destroy forum ' + req.params.forum);
};
