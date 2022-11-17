const { getAllLaunches, postLaunch, abortLaunch } = require('./launches.controller');
const express = require('express');

const launchesRouter = express.Router();
launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', postLaunch);
launchesRouter.delete('/:id', abortLaunch);

module.exports = {
	launchesRouter,
};
