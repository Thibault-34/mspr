const con = require('./connect')

const getList = table => {
    return new Promise(resolve => {
        con.query(`SELECT * FROM ${table}`, (error, results) => {
            if (error) throw error
            resolve(results)
        })
    })
}

const getOne = (table, id) => {
    return new Promise(resolve => {
        con.query(
            `SELECT * FROM ${table} WHERE id = ${id}`,
            (error, results) => {
                if (error) throw error
                resolve(results)
            }
        )
    })
}

const updateOne = (table, id, fields) => {
    const {
        name,
        style,
        image,
        description,
        facebook,
        instagram,
        spotify,
    } = fields

    return new Promise(resolve => {
        con.query(
            `UPDATE ${table} SET name = "${name}", style = "${style}", image = "${image}", description = "${description}", facebook = "${facebook}", instagram = "${instagram}", spotify = "${spotify}" WHERE id = ${id}`,
            (error, results, fields) => {
                if (error) throw error
                resolve(id)
            }
        )
    })
}

const createOne = (table, fields) => {
    const {
        name,
        style,
        image,
        description,
        facebook,
        instagram,
        spotify,
    } = fields

    return new Promise(resolve => {
        con.query(
            `INSERT INTO ${table} (id, name, style, image, description, facebook, instagram, spotify) 
			VALUES (NULL, "${name}", "${style}", "${image}", "${description}", "${facebook}", "${instagram}", "${spotify}")
			`,
            (error, results) => {
                if (error) throw error

                resolve({ ...results, id: results.insertId })
            }
        )
    })
}

const deleteOne = (table, id) => {
    return new Promise(resolve => {
        con.query(
            `DELETE FROM ${table} WHERE id = ${id}`,
            (error, results, fields) => {
                if (error) throw error
                resolve(results)
            }
        )
    })
}

module.exports = {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
}
