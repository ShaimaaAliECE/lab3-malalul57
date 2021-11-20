const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.132.77.17',
        user: 'root',
        password:'123456789',
        database:'usersDB'
    });
    return conn;
}
module.exports = newConnection;