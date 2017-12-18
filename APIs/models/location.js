/**
 *   @author toto
 *   @createdDate    2017-11-15 01:49 AM
 *   @email  toto6321@qq.com
 *   @exports Location Model
 */

const mongoose = require('mongoose')

const OpeningTimeSchema = new mongoose.Schema({
  dayOfWeek: {type: Number, required: true}, // Monday is 0 and Tuesday is 2 and so on
  isOpen: {type: Boolean, 'default': false, required: true}, // if true, then startedTime and endedTime make sense
  startedTime: {type: Number}, // numbers of seconds from 00:00 of a day
  endedTime: {type: Number}
})

const coordinateSchema = new mongoose.Schema({
  longitude: Number,
  latitude: Number
})

const locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String},
  rating: {type: Number, 'default': 3, min: 0, max: 5},
  facilities: [String],
  coordinate: {type: coordinateSchema, index: '2Dsphere'},
  openingTimes: [OpeningTimeSchema]
})

module.exports = mongoose.model('Location', locationSchema, 'locations')
