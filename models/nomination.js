const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for result
const NominationSchema = new Schema({
  nominee: {
    type: String,
    required: [true, 'The nominee field is required']
	},
	message: {
		type: String,
		required: [true, 'The message field is required']
	}
})

//create model for result
const Nomination = mongoose.model('results', NominationSchema);

module.exports = Nomination;