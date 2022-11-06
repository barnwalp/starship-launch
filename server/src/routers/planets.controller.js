const { planets, getPlanets } = require('../models/planets.model');

getPlanets()
	.then(console.log('success'))
	.catch((err) => {
		console.log(err);
	})

console.log({planets});

function getAllPlanets(req, res) {
	res.status(200).json(planets);
	// getPlanets()
	// 	.then((planets) => {
	// 		res.status(200).json(planets);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	})
}

module.exports = {
	getAllPlanets
};
