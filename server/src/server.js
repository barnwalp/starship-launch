const express = require('express');
const cors = require('cors');
const { planetsRouter } = require('../src/routers/planets.router');

// Since react runs on port 3000, server must be on another port
// if PORT is not specified in the environment, 8000 will be used
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
}))
app.use(express.json());
app.use('/planets', planetsRouter);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
})
