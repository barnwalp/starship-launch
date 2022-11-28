const { getAllPlanets } = require('./planets.controller');
const express = require('express');

const planetsRouter = express.Router();
planetsRouter.get('/', getAllPlanets);

module.exports = {
	planetsRouter,
};
