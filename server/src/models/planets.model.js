const path = require('path');
const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// fs.createReadStream run codes asynchronously so it should be wrapped inside of promise
function getPlanetStream() {
	return new Promise((resolve, reject) => {
		fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
			.pipe(parse({
				comment: '#',
				columns: true,
			}))
			.on('data', (data) => {
				if (isHabitablePlanet(data)) {
					habitablePlanets.push(data);
				}
			})
			.on('error', (err) => {
				reject(err);
			})
			.on('end', () => {
				console.log(habitablePlanets.map((planet) => {
					return planet['kepler_name'];
				}));
				console.log(`${habitablePlanets.length} habitable planets found!`);
				resolve();
			});
	})
}

// Creating a function to get the habitable planets, same will be used in the controller
function getPlanets() {
	getPlanetStream()
		.then(data => console.log(data))
		.catch(err => console.log(err));
	// console.log(`habitable planets are: ${habitablePlanets}`)
	return habitablePlanets;
}

module.exports = {
	getPlanets,
}
