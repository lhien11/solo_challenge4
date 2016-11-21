var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var treats = require('../routes/treats');


/*** Build out a module to manage our treats requests. ***/

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('./public'));
app.use('/treats', treats);


app.listen(port, function() {
  console.log('Server running on port: ', port);
});
