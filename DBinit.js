//this is where i will initialize the database

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'34.132.77.17',
    user: 'root',
    password:'123456789',
    database:'usersDB'
});

conn.connect();

//drops the old table, to make a new one 
conn.query(`Drop Table Schedule`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )

conn.query(`CREATE TABLE Schedule
            (
                Name varchar(20),
                Time1   Bool,
                Time2   Bool,
                Time3   Bool,
                Time4   Bool,
                Time5   Bool,
                Time6   Bool,
                Time7   Bool,
                Time8   Bool,
                Time9   Bool,
                Time10   Bool
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })

conn.query( `insert into Schedule values ("Alex", 1,0,1,0,1,1,1,1,0,1)`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });

conn.query( `select * from Schedule `
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row view');
                for (r of rows)
                    console.log(r);
            });

conn.end();
