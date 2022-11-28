const launchDb = require('./launches.mongo');

const launch = [
	{
		flightNumber: 100,
		mission: 'Kepler Exploration X',
		rocket: 'Explorer IS1',
		launchDate: new Date('December 21, 2028').toDateString(),
		destination: 'kepler-442 b',
		customers: ['ISRO', 'NASA'],
		upcoming: true,
		success: true
	},
	{
		flightNumber: 101,
		mission: 'Kepler Exploration X',
		rocket: 'Explorer IS2',
		launchDate: new Date('January 28, 2029').toDateString(),
		destination: 'kepler-62 f',
		customer: ['ISRO', 'NASA'],
		upcoming: true,
		success: true
	},
]

function saveData(launch) {
	try {
		launch.map(async (flightData) => {
			await launchDb.updateOne({
				flightNumber: flightData.flightNumber,
			}, flightData, {
				upsert: true,
			})
		})
	} catch (e) {
		console.log(e);
	}
}

async function getLaunchesDb() {

}
saveData(launch);

function getLaunches() {
	return launch;
}

function noOfLaunches() {
	return launch.length;
}

module.exports = {
	getLaunches,
	noOfLaunches,
}
