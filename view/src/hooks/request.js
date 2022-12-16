async function httpGetPlanets() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:7000/planets');
	// Load planets and return JSON
	const planets = await response.json();
	// console.log(`planets are ${planets}`)
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
	console.log('return from httpSubmitLaunch');
	console.log(content);
}

async function httpAbortLaunch(launch) {
	const response = await fetch('http://localhost:7000/launches/' + launch.flightNumber, {
		method: "DELETE",
	})
	const content = await response.json();
	console.log(content);
	// let modLaunch = {
	// 	...launch,
	// 	upcoming: !launch.upcoming,
	// }
	// // console.log(modLaunch);
	// await httpSubmitLaunch(modLaunch);
}

export {
	httpGetPlanets,
	httpGetLaunches,
	httpSubmitLaunch,
	httpAbortLaunch,
};
