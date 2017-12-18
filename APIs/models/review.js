/**
 *   @author toto
 *   @createdDate    2017-11-15 02:22 AM
 *   @email  toto6321@qq.com
 *
 *   @exports Review model
 */

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Location = require('./location')
const User = require('./user')
const reviewSchema = new mongoose.Schema({
  locationId: {
    type: ObjectId, required: true, ref: 'Location'
  }, // foreign key to Location's id
  authorId: {
    type: ObjectId, required: true, ref: 'User'
  }, // foreign key to User's id
  rating: {type: Number, required: true},
  content: {type: String},
  createdDate: {type: Date, 'default': Date.now}

})

module.exports = mongoose.model('Review', reviewSchema, 'reviews')
