const path = require('path');
const { parse } = require('csv-parse');
const fs = require('fs');
const Planets = require('./planets.mongo');

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// fs.createReadStream run codes asynchronously so it should be wrapped inside of promise
function loadPlanetData() {
	return new Promise((resolve, reject) => {
		fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
			.pipe(parse({
				comment: '#',
				columns: true,
			}))
			.on('data', async (data) => {
				// console.log(data.kepler_name);
				if (isHabitablePlanet(data)) {
					await Planets.updateOne({
						keplerName: data.kepler_name,
					}, {
						keplerName: data.kepler_name,
					}, {
						upsert: true,
					})
					// habitablePlanets.push(data);
				}
			})
			.on('error', (err) => {
				reject(err);
			})
			.on('end', async () => {
				// const planets = await getPlanets();
				// console.log(`${planets.length} habitable planets found!`);
				resolve();
			});
	})
}

// Creating a function to get the habitable planets, same will be used in the controller
async function getPlanets() {
	const habitablePlanets = await Planets.find({}, {'keplerName': 1})
	// console.log(`habitable planets are: ${habitablePlanets}`)
	return habitablePlanets;
}

module.exports = {
	loadPlanetData,
	getPlanets,
}
