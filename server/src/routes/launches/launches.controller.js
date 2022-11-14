const { getLaunches } = require('../../models/launches.model');

let launches = getLaunches();

function getAllLaunches(req, res) {
	res.status(200).json(launches);
}

module.exports = {
	getAllLaunches
};
