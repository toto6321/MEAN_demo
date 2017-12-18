/**
 *   @author toto
 *   @createdDate    2017-11-17 06:11 PM
 *   @email  toto6321@qq.com
 */
const Mongoose = require('mongoose')
const Review = require('../models/review')

module.exports.reviewsCreateOne = (req, res) => {
  const {authorId, locationId, rating, content} = req.body
  const newReveiw = {
    locationId: locationId,
    authorId: authorId,
    rating: rating,
    content: content
  }
  console.log('new Review: ', newReveiw)
  Review
    .create(newReveiw, (err, review) => {
      if (err) {
        res.status(400).send({msg: 'failed to save the new review'})
      } else {
        res.status(200).send(review)
      }
    })

  // res.status(200).send()
}

module.exports.reviewsReadMany = (req, res) => {
  Review
    .find({})
    .exec((err, reviews) => {
      err
        ? res.status(400).send({msg: err})
        :				res.status(200).send(reviews)
    })
}

module.exports.reviewsReadOneById = (req, res) => {
  if (req.params && req.params.reviewId) {
    Review
      .find({_id: req.params.reviewId})
      .populate('locationId authorId')
      .exec((err, review) => {
        err
          ? res.status(400).send({msg: err})
          :					res.status(200).send(review)
      })
  }
}

module.exports.reviewsReadManyByLocationId = (req, res) => {
  if (req.params && req.params.locationId) {
    console.log(req.params.locationId)
    Review
      .find({locationId: req.params.locationId})
      .populate('locationId authorId')
      .exec((err, reviews) => {
        err
          ? res.status(400).send({msg: err})
          :					res.status(200).send(reviews)
      })
  } else {
    res.status(300).send({msg: ' parameter error'})
  }
}

module.exports.reviewsReadManyByUserId = (req, res) => {
  if (req.params && req.params.uid) {
    console.log(req.params.uid)
    Review
      .find({authorId: req.params.locationId})
      .exec((err, reviews) => {
        err
          ? res.status(400).send({msg: err})
          :					res.status(200).send(reviews)
      })
  } else {
    res.status(300).send({msg: ' parameter error'})
  }
}

module.exports.reviewsUpdateOneById = (req, res) => {
  if (req.params && req.params.reviewId) {
    console.log('reviewId: ' + req.params.reviewId)
    console.log('locationId: ' + req.body.locationId)
    console.log('authorId: ' + req.body.authorId)
    const newReview = {
      locationId: req.body.locationId,
      authorId: req.body.authorId,
      rating: req.body.rating,
      content: req.body.content
    }
    Review
      .findByIdAndUpdate(req.params.reviewId, newReview)
      .exec((err, reviews) => {
        err
          ? res.status(400).send(err)
          :					res.status(200).send(reviews)
      })
  } else {
    res.status(300).send({msg: ' parameter error'})
  }
}

module.exports.reviewsDeleteOneById = (req, res) => {
  if (req.params && req.params.reviewId) {
    console.log('reviewId: ' + req.params.reviewId)
    Review
      .findByIdAndRemove(req.params.reviewId)
      .exec((err, review) => {
        err
          ? res.status(400).send(err)
          :					res.status(200).send({msg: 'delete succeeded'})
      })
  } else {
    res.status(300).send({msg: ' parameter error'})
  }
}
