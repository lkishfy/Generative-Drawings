var start = false
  , stop = false
  , w
  , h;


function setup() {
  w = windowWidth
  , h = windowHeight;

  createCanvas(w, h);
  //noLoop();

}

function draw() {
  if (start == true){
  drawBezier();
  } else {
    clear();
  }
}

function mousePressed() {
  start = true;
  //drawBezier();

}

function buttonClicked(){
  start = false
}

function drawBezier() {
  var x = random(0, w);
  var y = random(0, w);
  var z = random(0, w);
  var e = random(0, w);
  var f = random(0, w);
  var g = random(0, w);
  var h = random(0, w);
  var i = random(0, w);
  var co = random(25, 255);
  var xo = random(25, 255);
  var to = random(0, 255);

  noFill();
  //stroke(255, 102, 0);
  stroke(co, xo, to);
  strokeWeight(4);
  bezier(x, g, width*0.2, y ,z, e, f, h);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
