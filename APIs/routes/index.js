/**
 *   @author toto
 *   @createdDate    2017-11-17 04:51 PM
 *   @email  toto6321@qq.com
 */

let express = require('express');
let router = express.Router();
let ctrlLocations = require('../controllers/locations');
let ctrlReviews = require('../controllers/reviews');
// locations
router.get('/locations', ctrlLocations.locationsFindAll);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationId', ctrlLocations.locationsFindById);
router.put('/locations/:locationId', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationId', ctrlLocations.locationsDeleteOne);
// reviews
router.post('/locations/:locationId/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsDeleteOne);

module.exports = router;