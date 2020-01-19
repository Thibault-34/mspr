const con = require('./connect');

const getArtists = () => {
	return new Promise(resolve => {
		con.query(`SELECT * FROM Artist`, (error, results) => {
			if (error) throw error;
			resolve(results);
		});
	});
};

const getArtistById = id => {
	return new Promise(resolve => {
		con.query(`SELECT * FROM Artist WHERE id = ${id}`, (error, results) => {
			if (error) throw error;
			resolve(results);
		});
	});
};

const updateArtistById = (id, fields) => {
	const {
		name,
		style,
		image,
		description,
		facebook,
		instagram,
		spotify,
	} = fields;

	return new Promise(resolve => {
		con.query(
			`UPDATE Artist SET name = "${name}", style = "${style}", image = "${image}", description = "${description}", facebook = "${facebook}", instagram = "${instagram}", spotify = "${spotify}" WHERE id = ${id}`,
			(error, results, fields) => {
				if (error) throw error;
				resolve(id);
			},
		);
	});
};

const createArtistById = fields => {
	const {
		name,
		style,
		image,
		description,
		facebook,
		instagram,
		spotify,
	} = fields;

	return new Promise(resolve => {
		con.query(
			`INSERT INTO Artist (id, name, style, image, description, facebook, instagram, spotify) 
			VALUES (NULL, "${name}", "${style}", "${image}", "${description}", "${facebook}", "${instagram}", "${spotify}")
			`,
			(error, results) => {
				if (error) throw error;

				resolve({ ...results, id: results.insertId });
			},
		);
	});
};

const deleteArtistById = id => {
	return new Promise(resolve => {
		con.query(
			`DELETE FROM Artist WHERE id = ${id}`,
			(error, results, fields) => {
				if (error) throw error;
				resolve(results);
			},
		);
	});
};

module.exports = {
	getArtists,
	getArtistById,
	updateArtistById,
	createArtistById,
	deleteArtistById,
};
