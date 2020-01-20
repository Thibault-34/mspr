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
    return new Promise(resolve => {
        con.query(
            `UPDATE ?? SET ? WHERE id = ?`,
            [table, fields, id],
            (error, results, fields) => {
                if (error) throw error
                resolve(id)
            }
        )
    })
}

const createOne = (table, fields) => {
    console.log(sql)
    return new Promise(resolve => {
        con.query(
            `INSERT INTO ?? (?) VALUES (?)`,
            [table, Object.keys(fields), Object.values(fields)],
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
