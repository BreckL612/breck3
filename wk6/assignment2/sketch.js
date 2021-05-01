

function setup () {
  
}

function draw () {
  let time = millis();
  let age = time / 1000;
 age = Math.round ( age );
 age = age % 4;
  makeFace(age);

}
function makeFace(age) {
  createCanvas(400, 400);
  colorMode(RGB);


  
  //Skin Color
  fill(245, 225, 195);

  
  //Face
  strokeWeight(0);
  let faceWidth = 300;
  let faceHeight= 350;
 ellipse(width / 2, height / 2, faceWidth, faceHeight);
 

  // Eyes
  fill(255);
  let eyeY= height/2; 
  let eyePos= (faceWidth/2)* 0.3;
  let righteyeX= (width/2) + eyePos
  let lefteyeX= (width/2)-eyePos
  ellipse( lefteyeX, eyeY, 60, 35);
  ellipse(righteyeX, eyeY, 60, 35);
  // Iris
  fill(46, 100, 250);
  ellipse(lefteyeX, eyeY, 35, 28);
  ellipse(righteyeX, eyeY, 35, 28);
  // Pupils
  fill(0)
  ellipse(lefteyeX, eyeY, 15, 15);
  ellipse(righteyeX, eyeY, 15, 15);
  

  
  //Mouth
  //Lips Color
  stroke(255, 190, 200);
  //Lips Width
  strokeWeight(7);
  //Inner Mouth Color and Shape
  fill(255);
  let mouthWidth=  (faceWidth * 0.5);
  let mouthHeight=  (faceHeight * 0.3);
  let mouthY= (height/2.3) + (faceHeight *  0.35);
  arc(width / 2, mouthY, mouthWidth, mouthHeight, 0, HALF_PI + HALF_PI, PIE);
  
  //Wrinkles
 fill(50, 50, 50);

  
  if (age > 0) {
    line(100, 100, 280, 100);
  }
  
  if (age >= 2) {
    line(100, 120, 280, 120);
  }
  
  if (age >= 3) {
  line(100, 140, 280, 140);
    
  }
  
  if (age >= 4) {
    line (110, 140, 180, 140);
  
    if (age >= 5) {
  line(400, 400, 400, 400);
    
  }
  
    
}
  
}