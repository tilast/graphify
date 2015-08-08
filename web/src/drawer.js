var vis = require('vis');

function Drawer() {
}

Drawer.prototype.draw = function(nodes, edges) {
  nodes = new vis.DataSet(nodes);
  edges = new vis.DataSet(edges);

  // create a network
  var container = document.getElementById('mynetwork');

  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
}

module.exports = Drawer;
