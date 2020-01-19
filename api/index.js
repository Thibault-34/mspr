const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
var cors = require('cors');

const app = express();
const port = 8000;

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/artists', router);
// app.use('*', (req, res) => {
// 	res.status(404).send('error 404');
// });
