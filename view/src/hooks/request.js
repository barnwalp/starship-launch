async function httpGetPlanets() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:7000/planets');
	// Load planets and return JSON
	const planets = await response.json();
	return planets;
}

async function httpGetLaunches() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:7000/launches');	
	// Load launches and return JSON
	const launches = await response.json();	
	return launches;	
}

async function httpSubmitLaunch(launch) {
	const response = await fetch('http://localhost:7000/launches', { 
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(launch),
	});
	const content = await response.json();
	console.log(content);
}

export {
	httpGetPlanets,
	httpGetLaunches,
	httpSubmitLaunch,
};
