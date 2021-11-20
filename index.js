const express = require('express');
const path = require('path');

// new db connects are created by this object 
const newConnection = require('./DBconnection');

const app = express();

// an http method function
app.get('/', (req, res) => {
    res.sendFile('/static/index.HTML', { root: __dirname })
  })

  // to be able to access the body of the request
app.use(express.urlencoded({
  extended: true
}))

app.get('/guest', (req, res) => {
  res.sendFile('/static/guest.html', { root: __dirname })
})

app.get('/admin', (req, res) => {
  res.sendFile('/static/admin.HTML', { root: __dirname })
})

// login info for front end
app.post('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access denied";

  if (userName == 'admin' && password == '123') {
    message = "Welcome";
    res.sendFile('/static/admin.html', { root: __dirname })
  }

  res.send(message)
})

// login info for static end
app.get('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access denied";

  if (userName == 'admin' && password == '123') {
    message = "Welcome";
    res.sendFile('/static/admin.html', { root: __dirname })
  }

  res.send(message)
})

// in users insert the user values
app.get('/add-user', (req,res) => {
  let conn = newConnection();
  conn.connect();
  console.log(req.query.T1);
  conn.query(`insert into Users values ('${req.query.name}','${req.query.T1}','${req.query.T2}','${req.query.T3}','${req.query.T4}','${req.query.T5}','${req.query.T6}','${req.query.T7}','${req.query.T8}','${req.query.T9}','${req.query.T10}')`
          ,(err,rows,fields) => {
              res.redirect('/');        
          } );

  conn.end();
})

// in times insert the time values
app.get('/add-times', (req,res) => {
  let conn = newConnection();
  conn.connect();
  console.log(req.query.T1);
  conn.query( `UPDATE Time SET  T1 = '${req.query.T1}', T2 = '${req.query.T2}', T3 = '${req.query.T3}', T4 = '${req.query.T4}', T5 = '${req.query.T5}', T6 = '${req.query.T6}', T7 = '${req.query.T7}', T8 = '${req.query.T8}', T9 = '${req.query.T9}', T10 = '${req.query.T10}'`
          , (err,rows,fields) => {
              if (err)
                  console.log(err);
              else
                  console.log('row updated');
                  res.redirect('/');
          });

  conn.end();
})

app.use(express.static('frontend'))

// set the port to port 80 
app.listen(80);
