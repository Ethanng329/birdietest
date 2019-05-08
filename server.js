const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

app.use(express.static(path.join(__dirname, 'build')));

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get('/fetchdata', function(req, res) {
  connection.query(`SELECT * from ${process.env.DB_TABLE}`, function(
    err,
    rows,
    fields
  ) {
    if (!err) {
      res.status(200);
      return res.send(rows);
    } else console.log('something wrong with DB', err);
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Listening to porting 8080');
});
