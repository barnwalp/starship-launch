const launchDb = require('./launches.mongo');
const { getPlanets } = require('./planets.model');
const Planet = require('./planets.mongo');

getPlanets()
	.then(data => console.log(data))
	.catch(e => console.log(e))

const launch = [
	{
		flightNumber: 100,
		mission: 'Kepler Exploration X',
		rocket: 'Explorer IS1',
		launchDate: new Date('December 21, 2028').toDateString(),
		destination: 'Kepler-442 b',
		// destination: 'Earth',
		customers: ['ISRO', 'NASA'],
		upcoming: true,
		success: true
	},
	// {
	// 	flightNumber: 101,
	// 	mission: 'Kepler Exploration X',
	// 	rocket: 'Explorer IS2',
	// 	// launchDate: new Date('January 28, 2029').toDateString(),
	// 	destination: 'kepler-62 f',
	// 	destination: 'dirt',
	// 	customer: ['ISRO', 'NASA'],
	// 	upcoming: true,
	// 	success: true
	// },
]

async function saveData(launch) {
	try {
		launch.map(async (flightData) => {
			const planet = await Planet.findOne({
				keplerName: flightData.destination
			});
			// console.log(`planet is: ${planet}`);
			if (!planet) {
				throw new Error('No matching planet found');
			}
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
	return launchDb.find({})
}
saveData(launch);

function getLaunches() {
	return launch;
}

async function noOfLaunches() {
	return launchDb.countDocuments();
}

module.exports = {
	getLaunches,
	getLaunchesDb,
	noOfLaunches,
}
