var w
  , h;


function setup() {
  w = windowWidth
  , h = windowHeight;
  createCanvas(w, h);

  noLoop();
}

function draw() {
  background(105, 168, 126);
  drawShape();
}

function drawShape() {
  noStroke();
  fill(0);
  var vertices = random(10, 20)
    , x = random(0, w)
    , y = random(0, h);
  beginShape();
    vertex(x, y);
    for (i = 1; i < vertices; i++) {
      var x1 = random(x + i, w/4)
        , y1 = random(x + i, w/4)
        , z1 = random(x + i, w/4)
        , x2 = random(x1 + i, w/4)
        , y2 = random(y1 + i, w/4)
        , z2 = random(y1 + i, w/4);
      bezierVertex(x1, y1, z1, x2, y2, z2);
    }
  endShape();
}
