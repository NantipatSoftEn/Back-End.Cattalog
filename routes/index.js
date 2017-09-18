var {mongo, express} = require('./configdb');
var router = express.Router();

/* GET home page. */

//mongo.model('people').find();

// router.get('/', function(req, res, next) {
//     res.send('test');
// });
//  router.get('/test', function(req, res, next) {
//     mongo.model('peoples').find(function(err,users)
//      {
//          res.send(users);
//      });
//  });

module.exports = router;
