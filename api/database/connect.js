// MySQL
const mysql = require('mysql')
// Settings
// Create MySQL connection
const con = mysql.createConnection({
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mspr_bdd',
    multipleStatements: true,
    port: 3308,
})

// Test mysql connection
con.connect(err => {
    try {
        if (err) throw err
        console.log('success', 'SQL', 200, 'Database connected!')
    } catch (ex) {
        console.log('error', 'SQL', 500, err)
    }
})

module.exports = con
