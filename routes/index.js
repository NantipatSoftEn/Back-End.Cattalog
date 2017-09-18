var {mongo, express} = require('./configdb');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
    console.log( mongo.model('people').find());
  res.render('index', { title: 'Express' });
});

module.exports = router;
