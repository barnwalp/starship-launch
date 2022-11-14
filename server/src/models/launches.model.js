const launch = {
	flightNumber: 100,
	mission: 'Kepler Exploration X',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 21, 2028'),
	destination: 'kepler-442 b',
	customer: ['ISRO', 'NASA'],
	upcoming: true,
	success: true
}

function getLaunches() {
	return launch;
}

module.exports = {
	getLaunches,
}
