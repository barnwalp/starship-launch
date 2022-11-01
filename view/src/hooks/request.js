async function httpGetPlanets() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:8000/planets');
	// Load planets and return JSON
	const planets = await response.json();
	console.log(`type of planets from httpsGetPlantes is: ${typeof(planets)}`);
	return planets;
}

export {
	httpGetPlanets,
};
