const express = require('express');
const {
	getArtists,
	getArtistById,
	updateArtistById,
	createArtistById,
} = require('./database/utils');

const router = express.Router();

router.get('/', (req, res) => {
	getArtists(req.query).then(artists => {
		res.set({
			'X-Total-Count': '100',
			'Access-Control-Expose-Headers': 'X-Total-Count',
		});

		res.json(artists);
	});
});

// router.post('/artists/create', (req, res) => {
// 	// createArtistById(req.params.id, req.body).then(fields =>
// 	// 	console.log(fields),
// 	// );
// 	console.log('ok');
// 	res.send('jif');
// });

router.put('/:id', (req, res) => {
	updateArtistById(req.params.id, req.body).then(fields =>
		console.log(fields),
	);
});

router.get('/:id', (req, res) =>
	getArtistById(req.params.id, artist => res.json(artist)),
);

module.exports = router;
