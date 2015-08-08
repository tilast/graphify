var vis = require('vis');

function Drawer() {
}

Drawer.prototype.draw = function(nodes, edges) {
  nodes = new vis.DataSet(nodes);
  edges = new vis.DataSet(edges);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
  ]);

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
