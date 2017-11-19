/**
 *   @author toto
 *   @createdDate    2017-11-15 02:22 AM
 *   @email  toto6321@qq.com
 *
 *   @exports Review model
 */

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const reviewSchema = new mongoose.Schema({
	locationId: {type: ObjectId, required: true,ref:'location'}, // foreign key to Location's id
	authorId: {type: ObjectId, required: true}, //foreign key to User's id
	rating: {type: Number, required: true},
	content: {type: String},
	createdDate: {type: Date, "default": Date.now},

});

const Review = mongoose.model('Review',reviewSchema,'reviews');

module.exports = Review;