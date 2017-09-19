var {mongo, express,people} = require('./configdb');
var router = express.Router();
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
