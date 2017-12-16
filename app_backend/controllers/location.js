/**
 *   @author toto
 *   @createdDate    2017-11-09 11:10 PM
 *   @email  toto6321@qq.com
 */
let Request = require('request')
const options = require('../config/config')

module.exports.homelist = function (request, response, next) {
	let requestOption = {
		url: options.url + '/locations',
		method: 'get'
	};
	Request(requestOption, (err, res, body) => {
		if (err) {
			console.log(err)
		} else if (res.statusCode === 200) {
			console.log(body)
			const data = JSON.parse(body)
			response.render('locations-list', {
				title: 'homelist',
				pageHeader: {
					title: 'Loc8r',
					strapline: 'Find places to work with WIFI near you'
				},
				locations: data
			})
		} else {
			console.log(res.statusCode)
		}
	});
};
/*

module.exports.locationInfo = (req, res, next) => {
	const {locationId} = req.params
	let requestOption = {
		url: options.url + '/locations/' + locationId,
		method: 'get',
		json: null,
		qs: null,
	}
	//to get a location's information
	Request(requestOption, (err1, res1, body) => {
		// console.log(body)
		const location = JSON.parse(body)

		// to get all reviews about the location
		Request({
			url: requestOption.url + '/reviews',
			method: 'get'
		}, (err2, res2, body2) => {
			let reviews;
			err2 ? reviews = []
				: reviews = JSON.parse(body2)
			res.render('location-info', {
				title: location.name,
				pageHeader: {
					title: location.name
				},
				sidebar: {
					context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
					callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
				},
				location: location,
				reviews: reviews
			})
		})
	})

}
*/

module.exports.getLocationInfo = (req, res) => {
	res.render('location-info', {
		title: location.name,
		pageHeader: {
			title: location.name
		},
		sidebar: {
			context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
			callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
		},
	})
}


module.exports.getAddReview = (req, res, next) => {
	const locationId = req.params.locationId
	res.render('location-review', {
		title: 'addReview',
		locationId: locationId
	})
}

