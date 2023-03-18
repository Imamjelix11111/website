const mysql = require('mysql')
const db = mysql.createConnection({
    "host" : "localhost",
    "user" : "root",
    "password" : "",
    "database" : "data_siswa"
})

module.exports = db