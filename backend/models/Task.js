const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Please provide task name'],
		trim: true,
		maxlength: [130, 'Max 130 characters']
	},
	comment: {
		type: String,
		trim: true,
		maxlength: [150, 'Max 150 characters']
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Task', TaskSchema);
