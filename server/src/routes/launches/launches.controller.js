const { getLaunchesDb, noOfLaunches, insertData, deleteData } = require('../../models/launches.model');

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
		noOfLaunches()
			.then(data => {
				// console.log(`no of launches are: ${data}`);
				const newLaunch = {
					flightNumber: req.body.flightNumber ? req.body.flightNumber : data+100,
					mission: req.body.mission,
					rocket: req.body.rocket,
					launchDate: dateInString,
					destination: req.body.destination,
					customer: ['ISRO', 'NASA'],
					upcoming: req.body.upcoming ? req.body.upcoming : true,
					// upcoming: true,
					success: true,
				}
				console.log(newLaunch.upcoming)
				insertData(newLaunch);
				return res.status(200).json(newLaunch);
			})
	}
}

async function abortLaunch(req, res) {
	const id = Number(req.params.id);
	console.log(id);
	const content = await deleteData(id);	
	console.log(content);
	// launches.map((launch) => {
	// 	if(launch.flightNumber === id) {
	// 		launch.upcoming = false;
	// 		launch.success = false;
	// 		return res.status(200).json(launch);
	// 	}
	// })
}

module.exports = {
	getAllLaunches,
	postLaunch,
	abortLaunch,
};
