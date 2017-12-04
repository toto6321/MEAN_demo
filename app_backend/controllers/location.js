/**
 *   @author toto
 *   @createdDate    2017-11-09 11:10 PM
 *   @email  toto6321@qq.com
 */
let Request = require('request')
const options = require('../config/config')

module.exports.homelist = function (request, response, next) {
	let requestOption = {
		url: options.url + 'locations/',
		method: 'get',
		json: null,
		qs: null,
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

module.exports.locationInfo = (request, response, next) => {
	let requestOption = {
		url: options.url + 'locations/' + '5a0e8f469b7942d3ae597d88',
		method: 'get',
		json: null,
		qs: null,
	}
	Request(requestOption, (err, res, body) => {
		// console.log(body)
		const data = JSON.parse(body)
		response.render('location-info', {
			title: data.name,
			pageHeader: {
				title: data.name
			},
			sidebar: {
				context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
				callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
			},
			/*location: {
				name: 'Starcups',
				address: '125 High Street, Reading, RG6 1PS',
				rating: 3,
				facilities: ['Hot drinks', 'Food', 'Premium wifi'],
				coords: {
					lat: 51.455041,
					lng: -0.9690884
				},
				openingTimes: [{
					days: 'Monday - Friday',
					opening: '7:00am',
					closing: '7:00pm',
					closed: false
				}, {
					days: 'Saturday',
					opening: '8:00am',
					closing: '5:00pm',
					closed: false
				}, {
					days: 'Sunday',
					closed: true
				}],
				reviews: [{
					author: 'Simon Holmes',
					rating: 5,
					timestamp: '16 July 2013',
					reviewText: 'What a great place. I can\'t say enough good things about it.'
				}, {
					author: 'Charlie Chaplin',
					rating: 3,
					timestamp: '16 June 2013',
					reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
				}]
			}*/
			location: data
		})
	})

}

module.exports.addReview = (request, response, next) => {
	response.render('location-review', {
		title: 'addReview'
	})
}