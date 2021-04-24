function setup() {
  createCanvas(750, 500);
}

function draw() {
  
  background(40);
  for (let j=5; j <200; j +=10) {
    
 
  stroke('pink');
  strokeWeight(3);
  noFill();
  
  stroke ('pink');
  square (170, j, 400, 200);
    
  stroke ('pink');
  square (30, j, 200, 200);
    
  stroke ('pink');
  square (500, j, 200, 200);

  }
}