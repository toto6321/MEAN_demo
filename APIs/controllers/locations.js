/**
 *   @author toto
 *   @createdDate    2017-11-17 05:00 PM
 *   @email  toto6321@qq.com
 */

const Location = require('../models/location');

module.exports.locationsFindAll = (req, res, next) => {
	Location
		.find({})
		.select('_id name address coordinate openingTimes facilities rating')
		.exec((err, locations) => {
			if (err) {
				res.status(400).send()
			} else {
				res.status(200).send(locations)
			}
		})

}


module.exports.locationsCreate = (req, res) => {
	let name, address, rating, facilities, coordinate
	name = req.body.name.trim()
	address = req.body.address.trim()
	rating = parseInt(req.body.rating.trim())
	facilities = req.body.facilities.trim().split(',');
	coordinate = {
		longitude: parseFloat(req.body.longitude.trim()),
		latitude: parseFloat(req.body.latitude.trim())
	}
	const location = {
		name: name,
		address: address,
		rating: rating,
		facilities: facilities,
		coordinate: coordinate
	}

	// to avoid inserting duplicate document
	Location
		.find({name: name})
		.exec((error, locations) => {
			console.log("locations")
			console.log(locations)
			if (error) {
				res.status(400).send({
					status: 0,
					msg: error
				})
			} else if (locations == null || locations.length === 0) {
				Location
					.create(location, (error, location) => {
						if (error) {
							res.send({msg: location})
						} else {
							res.status(200).send({
								status: 1,
								msg: "success",
								data: location
							});
						}
					})
			} else {
				res.status(200).send({
					status: 2,
					msg: "duplicate"
				})
			}

		})

};

/**
 * request must contain longitude and latitude queries
 * @param req
 * @param res
 */
module.exports.locationsListByDistance = (req, res) => {
	let coordinate = {longitude: 0, latitude: 0}
	if (req.query.longitude && req.query.latitude) {
		coordinate.longitude = parseFloat(req.query.longitude)
		coordinate.latitude = parseFloat(req.quer.latitude)
		console.log("coordinate: " + coordinate)
		Location
			.find({coordinate: coordinate})
			.exec((error, location) => {
				if (error) {
					res.status(400).send({msg: error});
				} else {
					res.status(200).send(location);
				}
			});
	} else {
		res.status(400).send({
			code: 0,
			msg: "couldn't find any location"
		})
	}

};

/**
 * @desc find a location by its id
 * @param req
 * @param res
 */
module.exports.locationsFindById = (req, res) => {
	if (req.params && req.params.locationId) {
		const locationId = req.params.locationId
		Location
			.findById(locationId)
			.exec((error, location) => {
				if (error) {
					res.status(400).send({msg: error})
				} else {
					res.status(200).send(location)
				}
			});
	} else {
		res.status(400).send({
			code: 0,
			msg: "couldn't find any location"
		})
	}
};

/**
 * @desc delete a location record by its id
 * @param req
 * @param res
 */
module.exports.locationsDeleteOne = (req, res) => {
	if (req.params && req.params.locationId) {
		Location
			.findByIdAndRemove({_id: req.params.locationId})
			.exec((error, location) => {
				if (error) {
					res.status(400).send({
						code: 0,
						msg: "couldn't find any location"
					})
				} else {
					res.status(200).send({
						code: 1,
						msg: "Deleting succeeded."
					})
				}
			})
	} else {
		res.status(404).send()
	}
};

/**
 * @desc update a location by its id
 * @param req
 * @param res
 */
module.exports.locationsUpdateOne = (req, res) => {

	let location = {}
	req.body.name ? location.name = req.body.name : null
	req.body.address ? location.address = req.body.address : null
	req.body.rating ? location.rating = req.body.rating : null
	req.body.facilities ? location.facilities = req.body.facilities.split(',') : null
	req.body.longitude && req.body.latitude ? location.coordinate.longitude = req.body.longitude : null
	req.body.latitude && req.body.longitude ? location.coordinate.latitude = req.body.latitude : null

	Location
		.findByIdAndUpdate(req.params.locationId, location)
		.exec((err, location) => {
			if (err) {
				res.status(400).send({
					code: 0,
					msg: "updating failed"
				})
			} else {
				res.status(200).send(location)
			}
		})
};

