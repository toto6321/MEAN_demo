/**
 *   @author toto
 *   @createdDate    2017-11-17 04:51 PM
 *   @email  toto6321@qq.com
 */

let express = require('express')
let router = express.Router()
let ctrlLocations = require('../controllers/locations')
// locations
router.get('/locations', ctrlLocations.locationsFindAll)
router.post('/locations', ctrlLocations.locationsCreate)
router.get('/locations/:locationId', ctrlLocations.locationsFindById)
router.put('/locations/:locationId', ctrlLocations.locationsUpdateOne)
router.delete('/locations/:locationId', ctrlLocations.locationsDeleteOne)

// user
const ctrlUsers = require('../controllers/users')
router.get('/users/', ctrlUsers.usersFindAll)
router.get('/users/:uid', ctrlUsers.usersFindOneById)
router.post('/users/', ctrlUsers.userCreate)

// reviews
let ctrlReviews = require('../controllers/reviews')
// to get all reviews no matter who created it and no matter what location it is about
router.get('/reviews', ctrlReviews.reviewsReadMany)
// to get a specific review detail by its id
router.get('/reviews/:reviewId', ctrlReviews.reviewsReadOneById)
// to get all reviews about a specific location by its id
router.get('/locations/:locationId/reviews', ctrlReviews.reviewsReadManyByLocationId)
// to get all reviews created by a specific user by its id
router.get('/users/:uid/reviews/', ctrlReviews.reviewsReadManyByUserId)
// to create a new reviews about a location
router.post('/locations/:locationId/reviews', ctrlReviews.reviewsCreateOne)
// to update a review by its id
router.put('/reviews/:reviewId', ctrlReviews.reviewsUpdateOneById)
// to delete a review by its id
router.delete('/reviews/:reviewId', ctrlReviews.reviewsDeleteOneById)

module.exports = router
