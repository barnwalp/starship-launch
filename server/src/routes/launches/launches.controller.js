const { getLaunches } = require('../../models/launches.model');

let launches = getLaunches();

function getAllLaunches(req, res) {
	res.status(200).json(launches);
}

function postLaunch(req, res) {
	const formDate = req.body.launchDate;
	const dateInString = new Date(formDate).toDateString();
	if(!req.body.mission || !req.body.rocket || !req.body.launchDate || !req.body.destination) {
		res.status(400).json({
			error: 'Invalid Request'
		});
	} else if (isNaN(new Date(req.body.launchDate))){
		res.status(400).json({
			error: 'Invalid Launch Date'
		})	
	}	else {
		const newLaunch = {
			flightNumber: launches.length+100,
			mission: req.body.mission,
			rocket: req.body.rocket,
			launchDate: dateInString,
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
