// const { getLaunches } = require('../../models/launches.model');
const { getLaunchesDb } = require('../../models/launches.model');

async function getAllLaunches(req, res) {
	// const launches = getLaunches();
	const launches = await getLaunchesDb();
	return res.status(200).json(launches);
}

function postLaunch(req, res) {
	const formDate = req.body.launchDate;
	const dateInString = new Date(formDate).toDateString();
	if(!req.body.mission || !req.body.rocket || !req.body.launchDate || !req.body.destination) {
		return res.status(400).json({
			error: 'Invalid Request'
		});
	} else if (isNaN(new Date(req.body.launchDate))){
		return res.status(400).json({
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
		console.log(`launch after addition: ${newLaunch}`);
		return res.status(200).json(newLaunch);
	}
}

function abortLaunch(req, res) {
	const id = Number(req.params.id);
	launches.map((launch) => {
		if(launch.flightNumber === id) {
			launch.upcoming = false;
			launch.success = false;
			return res.status(200).json(launch);
		}
	})
}

module.exports = {
	getAllLaunches,
	postLaunch,
	abortLaunch,
};
