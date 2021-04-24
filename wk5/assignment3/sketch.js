

function draw() {
  background 
}


function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  background ( random(255), random(255), random(255) );
  
  
  //Skin Color
  fill(245, 225, 195);

  
  //Face
  strokeWeight(0);
  let faceWidth = random(100, 350);
  let faceHeight= random (100, 350);
 ellipse(width / 2, height / 2, faceWidth, faceHeight);
 

  // Eyes
  fill(255);
  let eyeY= height/2; 
  let eyePos= (faceWidth/2)* random (0.3, 0.5);
  let righteyeX= (width/2) + eyePos
  let lefteyeX= (width/2)-eyePos
  ellipse( lefteyeX, eyeY, 60, 35);
  ellipse(righteyeX, eyeY, 60, 35);
  // Iris
  fill(46, 180, 25);
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
  let mouthWidth= random (faceWidth * 0.3, faceWidth * 0.5);
  let mouthHeight= random (faceHeight * 0.3, faceHeight * 0.3);
  let mouthY= (height/2.3) + (faceHeight * random (0.4, 0.45));
  arc(width / 2, mouthY, mouthWidth, mouthHeight, 0, HALF_PI + HALF_PI, PIE);
    
}