const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
	flightNumber: {
		type: Number,
		required: true,
	},
	mission: {
		type: String,
		required: true,
	},
	rocket: {
		type: String,
		required: true,
	},
	launchDate: {
		type: Date,
		required: true,
		default: new Date().toLocaleDateString(),
	},
	destination: {
		type: String,
		required: true,
		default: new Date().toLocaleDateString(),
	},
	customers: [ String ],
	upcoming: {
		type: Boolean,
		default: true,
	},
	success: {
		type: Boolean,
		required: true,
		default: true,
	},
})

module.exports = mongoose.model('Launch', launchesSchema);
