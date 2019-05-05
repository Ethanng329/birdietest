const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, function() {
  
  console.log('Listening to porting 8080');
});
