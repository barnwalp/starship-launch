const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
	planet_name: {
		type: String,
		required: true,
	}
})
