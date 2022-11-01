const { getAllPlanets } = require('./planets.controller');
const express = require('express');

const planetsRouter = express.Router();
planetsRouter.get('/', getAllPlanets);
console.log(typeof(planetsRouter));

module.exports = {
	planetsRouter,
};
