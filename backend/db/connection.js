const mongoose = require('mongoose');

const connectDB = url => {
	return mongoose
		.connect(url)
		.then(() => console.log('Connect to DB...'))
		.catch(error => console.log(error));
};

module.exports = connectDB;
