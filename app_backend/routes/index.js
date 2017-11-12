var express = require('express');
var router = express.Router();
// const indexController = require('../controllers/index');
const locationController = require('../controllers/location')
const othersController = require('../controllers/others')

/* GET home page. */
// router.get('/', indexController.index);
router.get('/',locationController.homelist)
router.get('/location',locationController.locationInfo)
router.get('/location/review/new',locationController.addReview)




module.exports = router;
