var app = require('./server.js').app;
var port = 3021;

    app.listen(port, function() {
      console.log('node-express-mongoose listening on ' + port);
  });