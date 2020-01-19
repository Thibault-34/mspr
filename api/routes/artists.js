const express = require('express');
const {
	getArtists,
	getArtistById,
	updateArtistById,
	createArtist,
	deleteArtistById,
} = require('../database/utils');

const artistRouter = express.Router();

artistRouter.get('/', (req, res) => {
	getArtists().then(artists => {
		res.set({
			'X-Total-Count': '100',
			'Access-Control-Expose-Headers': 'X-Total-Count',
		});
		res.json(artists);
	});
});

artistRouter.post('/', (req, res) => {
	createArtist(req.body).then(result => {
		res.json(result);
	});
});

artistRouter.put('/:id', (req, res) => {
	updateArtistById(req.params.id, req.body).then(id => {
		res.status(200).send({ id });
	});
});

artistRouter.get('/:id', (req, res) =>
	getArtistById(req.params.id).then(artist => {
		res.json(artist);
	}),
);

artistRouter.delete('/:id', (req, res) => {
	deleteArtistById(req.params.id).then(result => {
		res.json(result);
	});
});

module.exports = artistRouter;
