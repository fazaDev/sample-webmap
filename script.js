  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map("map").setView([-2.0605225, 101.2027496], 10);
  
  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
