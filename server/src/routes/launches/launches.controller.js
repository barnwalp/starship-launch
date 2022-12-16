const { getLaunchesDb, noOfLaunches, insertData, deleteData } = require('../../models/launches.model');

async function getAllLaunches(_req, res) {
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
		noOfLaunches()
			.then(data => {
				const newLaunch = {
					flightNumber: data+100,
					mission: req.body.mission,
					rocket: req.body.rocket,
					launchDate: dateInString,
					destination: req.body.destination,
					customer: ['ISRO', 'NASA'],
					upcoming: true,
					success: true,
				}
				console.log(newLaunch.upcoming)
				insertData(newLaunch);
				return res.status(200).json(newLaunch);
			})
	}
}

async function abortLaunch(req, _res) {
	const id = Number(req.params.id);
	console.log(id);
	const content = await deleteData(id);	
	console.log(content);
}

module.exports = {
	getAllLaunches,
	postLaunch,
	abortLaunch,
};
