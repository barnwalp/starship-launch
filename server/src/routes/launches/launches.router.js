const { getAllLaunches, postLaunch } = require('./launches.controller');
const express = require('express');

const launchesRouter = express.Router();
launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', postLaunch);

module.exports = {
	launchesRouter,
};
