/**
 *   @author toto
 *   @createdDate    2017-12-03 05:22 PM
 *   @email  toto6321@qq.com
 */
let requestOption = {
	url: process.env.NODE_ENV === 'production' ?
		'http://www.sweettoto.com/api' : 'http://localhost:3333/api/'
}

module.exports = requestOption
