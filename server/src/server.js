const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { readPassword } = require('./readFile');
const { loadPlanetData } = require('./models/planets.model');
const { planetsRouter } = require('../src/routes/planets/planets.router');
const { launchesRouter } = require('../src/routes/launches/launches.router');

// Since react runs on port 3000, server must be on another port
// if PORT is not specified in the environment, 8000 will be used
const PORT = process.env.PORT || 7005;
const app = express();

// cors is needed so that app can access sites outside of its domain
app.use(cors({
	origin: 'http://localhost:3006',
}))

// middleware for logging
app.use(morgan('combined'));
app.use(express.json());
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
	console.error(err);
})

const startMongoose = async () => {
	readPassword()
		.then(async ( data ) => {
			const MONGO_URL = `mongodb+srv://pankaj:${data}@starship-clustor-1.guktlu3.mongodb.net/?retryWrites=true&w=majority`;
			await mongoose.connect(MONGO_URL);
		})
		.catch(err => console.log(err));
	await loadPlanetData();
}

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
})
startMongoose();

module.exports = app;
