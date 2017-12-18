var express = require('express')
var router = express.Router()
// const indexController = require('../controllers/index');
const locationController = require('../controllers/location')
const reviewController = require('../controllers/review')
const othersController = require('../controllers/others')

/* GET home page. */
// router.get('/', indexController.index);
// router.get('/', locationController.homelist)
// to start angular SPA
router.get('/', locationController.startAngularSPA)
router.get('/location/:locationId', locationController.getLocationInfo)
router.get('/location/:locationId/review/new', locationController.getAddReview)

router.get('/about/', othersController.about)

// to add a piece of review for a location
router.post('/location/:locationId/review/new', reviewController.addReview)

module.exports = router
