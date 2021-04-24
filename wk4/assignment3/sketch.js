function setup() {
  createCanvas(750, 500);
}

function draw() {
  
  background(220);
  for (let j=1; j <200; j +=10) {
    
  stroke(0)
  strokeWeight (3)
  line(j+mouseX, 0, j+mouseX, height)
    
  ellipse (30,30, 30, 30)
  ellipse (300, 300, 300, 300)
  ellipse (200, 20, 20, 20)
  ellipse (475, 450, 70, 70)
  ellipse (440,200, 30, 30)
    
 
  }
}