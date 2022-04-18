var express = require('express');
var router = express.Router();

const {cart, detail} = require('../controllers/productController');
/* GET users listing. */

router.get('/productCart', cart);
router.get('/productDetail', detail);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
