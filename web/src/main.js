var Drawer = require('./drawer');

var drawer = new Drawer(),
    json =
{
 "nodes": [
   {
     "x": 100,
     "y": 100,
     "name": "1"
   },
   {
     "x": 200,
     "y": 200,
     "name": "2"
   },
   {
     "x": 100,
     "y": 200,
     "name": "3"
   },
   {
      "x": 200,
      "y": 100,
      "name": "4"
   }
 ],
 "links": [
   { "source": 0, "target": 1 },
   { "source": 0, "target": 3 },
   { "source": 2, "target": 3 },
   { "source": 2, "target": 1 }
 ]
};

drawer.draw(json.nodes, json.links);
