async function httpGetPlanets() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:7005/planets');
	// Load planets and return JSON
	const planets = await response.json();
	// console.log(`planets are ${planets}`)
	return planets;
}

async function httpGetLaunches() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:7005/launches');	
	// Load launches and return JSON
	const launches = await response.json();
	console.log('response after new launch addition');
	console.log(launches);
	return launches;	
}

async function httpSubmitLaunch(launch) {
	const response = await fetch('http://localhost:7005/launches', { 
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(launch),
	});
	const content = await response.json();
	console.log('return from httpSubmitLaunch');
	console.log(content);
}

async function httpAbortLaunch(launch) {
	const response = await fetch('http://localhost:7005/launches/' + launch.flightNumber, {
		method: "DELETE",
	})
	const content = await response.json();
	console.log('aborted launch is: ');
	console.log(content);
	return content;
}

export {
	httpGetPlanets,
	httpGetLaunches,
	httpSubmitLaunch,
	httpAbortLaunch,
};
