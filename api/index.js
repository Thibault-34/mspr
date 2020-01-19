const express = require('express');
const bodyParser = require('body-parser');
const artistRouter = require('./routes/artists');
var cors = require('cors');

const app = express();
const port = 8000;

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/artists', artistRouter);
app.use('*', (req, res) => {
	res.status(404).send('error 404');
});
