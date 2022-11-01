async function httpGetPlanets() {
	// TODO: Once API is ready
	const response = await fetch('http://localhost:8000/planets');
	// Load planets and return JSON
	const planets = await response.json();
	return planets;
}

export {
	httpGetPlanets,
};
