/**
 *   @author toto
 *   @createdDate    2017-11-15 02:31 AM
 *   @email  toto6321@qq.com
 */

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	nickname: String,
	name: String,
	gender: Number, //0 female and 1 is male
	email: {type: String, required: true},
	mobile: {type: String},
	pwd: {type: String, required: true},
});

module.exports = userSchema;