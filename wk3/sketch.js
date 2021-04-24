function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  
  
//phone 1
  fill(30);
  rect(35, 110, 120, 200)
  
//phone2  
  rect(230, 110, 120, 200);
  fill(0, 100, 200);
  rect(232, 113, 115, 193, 5, 5, 5, 5);
//case camera
  fill(40)
  rect(45, 120, 45, 45);
//speaker
  rect(276, 120, 20, 7, 20);
  
//camera 
  fill(70);
  circle(55, 130, 15);
  circle(55, 130, 8);
  circle(55, 150, 15);
  circle(55, 150, 8);
  circle(75, 140, 15);
  circle(75, 140, 8);
  circle(80, 125, 5);

//text
  textSize(31);
  text('11:11', 252, 160);

//screen
  fill (200)
  rect(242, 274, 95, 20, 5, 5, 5, 5);
  
//slide to unlock
  //screen
  fill (200)
  rect(242, 275, 30, 18, 5, 5, 5, 5);
  fill (150)
  textSize(9);
  text('slide to unlock', 274, 285);

  var img; 
img=loadImage('apple.png')

  
}