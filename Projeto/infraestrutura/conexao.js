const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin@156#',
    database: 'Projeto-Prova'
})

module.exports = conexao