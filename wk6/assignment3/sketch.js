function setup() {
  createCanvas(800, 800);
  background ( random(400), random(255), random(255) );

 for(var row = 0;row <= 800;row += 40) {
  for(var col = 0;col <= 800; col+= 40) {
     fill(random(440), random(200), random(400));
    square(row, col, 40);
   }
 }
  
}

function draw() {
  }