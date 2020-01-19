const con = require('./connect');

const stringifyParams = params => {
	if (Object.keys(params).length === 0) {
		return '';
	}
	return (
		'WHERE ' +
		Object.keys(params)
			.map(query => `${query} = "${params[query]}"`)
			.join(' AND ')
	);
};

const getArtists = params => {
	return new Promise(resolve => {
		con.query(`SELECT * FROM Artist`, (error, results, fields) => {
			if (error) throw error;
			resolve(results);
		});
	});
};

const getArtistById = (id, callback) => {
	con.query(
		`SELECT * FROM Artist WHERE id = ${id}`,
		(error, results, fields) => {
			if (error) throw error;
			callback(results);
		},
	);
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

const createArtist = fields => {
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
				console.log(results.insertId);
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
	createArtist,
	deleteArtistById,
};
