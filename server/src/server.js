const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { planetsRouter } = require('../src/routes/planets/planets.router');

// Since react runs on port 3000, server must be on another port
// if PORT is not specified in the environment, 8000 will be used
const PORT = process.env.PORT || 7000;
const app = express();

// cors is needed so that app can access sites outside of its domain
app.use(cors({
	origin: 'http://localhost:3006',
}))
// middleware for logging
app.use(morgan('combined'));
app.use(express.json());
app.use('/planets', planetsRouter);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
})
