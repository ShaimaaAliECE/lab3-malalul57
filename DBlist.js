const newConnection = require('./DBconnection');

const conn = newConnection();

// select all the time
conn.query( `select * from Time `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });

// select all users
conn.query( `select * from Users `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });
            


conn.end();