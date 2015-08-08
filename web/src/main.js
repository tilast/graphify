var Drawer = require('./drawer'),
    superagent = require('superagent');

var drawer = new Drawer();

superagent
.get('http://192.168.1.105:4567/graph')
.end(function(err, res) {
   var result = JSON.parse(res.text);
   drawer.draw(result.nodes, result.links);
});
