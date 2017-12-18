/**
 *   @author toto
 *   @createdDate    2017-12-16 12:08 AM
 *   @email  toto6321@qq.com
 */

const Review = require('../../APIs/models/review')
const Request = require('request')
const requestOption = require('../config/config')

module.exports.addReview = (req, res, next) => {
  let {author_id, rating, review} = req.body
  const {locationId} = req.params
  // todo some data filter and format
  const aReview = {
    locationId: locationId,
    authorId: author_id,
    rating: rating,
    content: review
  }
  // console.log('newReview: ', aReview)
  // res.status(200).send({review: aReview})
  Request({
    url: requestOption.url + `/locations/${locationId}/reviews`,
    method: 'post',
    json: aReview
  }, (err1, res1, body1) => {
    if (err1) {
      res.status(400).send(err1)
    } else {
      res.redirect(`/location/${locationId}`)
    }
  })
}
