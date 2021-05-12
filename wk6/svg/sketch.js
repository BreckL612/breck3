/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(400, 400, SVG); // Create SVG Canvas
  blendMode(DARKEST);//blend mode
}

function draw() {
  background(204, 0, 204);// r, g, b
  
  noStroke(); // stroke around the circle
  fill (0, 255, 255);
  ellipse (width/2, height/2, 300, 300);
  
  stroke(255, 0, 0);
  strokeWeight (5);// this is the stroke of the rectangles on top
  fill (255, 255, 0); // this changes the color of the rectangles on     top
  rect (200, 0, 30, height);
  rect (80, 0, 30, height);
  
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}