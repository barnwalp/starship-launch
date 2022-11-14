const { launch } = require('../../models/launches.model');

console.log(launch);

function getAllLaunches(req, res) {
	res.status(200).json(launch);
}

module.exports = {
	getAllLaunches
};
