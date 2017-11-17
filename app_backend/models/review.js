/**
 *   @author toto
 *   @createdDate    2017-11-15 02:22 AM
 *   @email  toto6321@qq.com
 */

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	locationId: {type: ObjectId, required: true}, // foreign key to Location's id
	authorId: {type: ObjectId, required: true}, //foreign key to User's id
	rating: {type: Number, required: true},
	content: {type: String},
	createdDate: {type: Date, "default": Date.now},

});

mongoose.model('Review',reviewSchema,'Reviews');

module.exports = reviewSchema;