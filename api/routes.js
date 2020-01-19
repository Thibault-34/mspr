const express = require('express');
const {
	getArtists,
	getArtistById,
	updateArtistById,
	createArtist,
	deleteArtistById,
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

router.post('/', (req, res) => {
	createArtist(req.body).then(result => {
		res.json(result);
	});
});

router.put('/:id', (req, res) => {
	updateArtistById(req.params.id, req.body).then(id => {
		res.status(200).send({ id });
	});
});

router.get('/:id', (req, res) =>
	getArtistById(req.params.id, artist => {
		res.json(artist);
	}),
);

router.delete('/:id', (req, res) => {
	deleteArtistById(req.params.id).then(result => {
		console.log(result);
		res.json(result);
	});
});

module.exports = router;
