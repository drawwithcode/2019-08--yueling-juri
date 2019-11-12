var myMap
var myImage;
var canvas;
var mappa = new Mappa("Leaflet");
var position;

function preload() {
  position = getCurrentPosition();
  myImage = loadImage("./assets/cat.png");
}

var options = {
  lat: 45.5061016,
  lng: 9.1500127,
  zoom: 14,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  //console.log(position);
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  //createElement("p", "your latitude:" + position.latitude).style("color:grey");
  //createElement("p", "your longitude:" + position.longitude).style("color:grey");
}

function draw() {
  clear();

  var myPoint = myMap.latLngToPixel(position.latitude, position.longitude);
  image(myImage,myPoint.x,myPoint.y,myImage.width*0.3,myImage.height*0.3);


}
