const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
	res.status(200).send('Server is working');
});

app.listen(PORT, console.log('server is listening...'));
