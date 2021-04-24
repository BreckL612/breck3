function setup() {
  createCanvas(750, 500);
}

function draw() {
  
  background(220);
  for (let j=5; j <1000; j +=10) {
    
  stroke(0)
  strokeWeight (3)
  line(j+mouseX, 0, j+mouseX, height)
    
  stroke('red');
  strokeWeight(3);
  noFill();
  square (0, j, 140, 100);
  stroke ('orange');
  square (100, j, 240, 200);
  stroke ('yellow');
  square (200, j, 140, 100)
  stroke ('green')
  square (300, j, 240, 100)
  stroke ('blue')
  square (400, j, 140, 100)
  stroke ('purple')
  square (500, j, 240, 100)
  }
}