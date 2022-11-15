const { getLaunches } = require('../../models/launches.model');

let launches = getLaunches();

function getAllLaunches(req, res) {
	res.status(200).json(launches);
}

function postLaunch(req, res) {
	if(!req.body.mission) {
		res.status(400).json({
			error: 'Invalid Request'
		});
	}	else {
		const newLaunch = {
			flightNumber: launches.length+1,
			mission: req.body.mission,
			rocket: req.body.rocket,
			launchDate: new Date(req.body.launchDate),
			destination: req.body.destination,
			customer: ['ISRO', 'NASA'],
			upcoming: true,
			success: true,
		}
		launches.push(newLaunch);
		res.json(newLaunch);
		console.log(`launch after addition: ${newLaunch}`);
	}
}

module.exports = {
	getAllLaunches,
	postLaunch,
};
