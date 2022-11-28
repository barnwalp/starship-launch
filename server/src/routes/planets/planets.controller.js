const { getPlanets } = require('../../models/planets.model');

async function getAllPlanets(req, res) {
	const planets = await getPlanets();
	// console.log(`habitable planets are: ${planets}`)
	res.status(200).json(planets);
}

module.exports = {
	getAllPlanets
};
