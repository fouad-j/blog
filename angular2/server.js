'use strict';

let express = require('express');
let path = require("path");
let app = express();
let port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./server/backend'));

let server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
