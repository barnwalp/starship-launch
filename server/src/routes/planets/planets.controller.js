const { getPlanets } = require('../../models/planets.model');

let planets = getPlanets();

function getAllPlanets(req, res) {
	res.status(200).json(planets);
}

module.exports = {
	getAllPlanets
};
