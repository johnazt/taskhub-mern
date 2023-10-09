const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks.routes');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const connectDB = require('./db/connection');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require('dotenv').config();

//cors para usarla externamente
app.use(cors());

// Middlewares
// Allows pass json data
app.use(express.json());
// Handle request errors
app.use('/api/v1/tasks', taskRouter);
// Handle incorrect urls
app.use(notFound);
app.use(errorHandler);

// Start application connecting to DB and run server...
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, console.log(`server is listening in port:${PORT}`));
	} catch (error) {
		console.log('There is an error connecting to database...', error);
	}
};

start();
