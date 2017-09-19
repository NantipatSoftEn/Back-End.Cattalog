var {mongo, express,people} = require('./configdb');
var router = express.Router();



// var query = people.find({});
// query.select('');
// query.exec(function (err, person) {
//   if (err) return handleError(err);
//   console.log(`aaa ${person[1].name}`);
// });

router.get('/test', function(req, res, next) {

    var query = people.find({});

    query.select('name');

    query.exec(function (err, person) {
        if (err)
            return handleError(err);

        for (var i = 0, len = person.length; i < len; i++) {
          console.log(`aaa ${person[i].name}`);
        }

    });
});

module.exports = router;
