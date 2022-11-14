const { getAllLaunches } = require('./launches.controller');
const express = require('express');

const launchesRouter = express.Router();
launchesRouter.get('/', getAllLaunches);

module.exports = {
	launchesRouter,
};
