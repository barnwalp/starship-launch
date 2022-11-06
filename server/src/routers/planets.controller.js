const { getPlanets } = require('../models/planets.model');

function getAllPlanets(req, res) {
	getPlanets()
		.then((data) => {
			console.log(data);
			res.status(200).json(planets);
			next();
		})
		.catch((err) => {
			console.log(err);
		})
}

module.exports = {
	getAllPlanets
};
