//Times I walked my dog

var img; 

function setup() {
  createCanvas(300, 450);
img = loadImage('dog.png');
}


function draw() {
  background(150, 200, 200);
 
 textSize (15)
 text ('How Many Times I Walk My Dog', 50, 30);
  
 image(img, 120, 55, 30, 30);
 image(img, 150, 55, 30, 30);
 image(img, 180, 55, 30, 30);
 image(img, 210, 55, 30, 30);
  
 image(img, 120, 135, 30, 30);
 image(img, 150, 135, 30, 30);
 image(img, 180, 135, 30, 30);
 image(img, 210, 135, 30, 30);
 
 image(img, 120, 215, 30, 30);
 image(img, 150, 215, 30, 30);
 image(img, 180, 215, 30, 30);

 image(img, 120, 295, 30, 30);
 image(img, 150, 295, 30, 30);
  
 image(img, 120, 375, 30, 30);
 image(img, 150, 375, 30, 30);
 image(img, 180, 375, 30, 30);
    

  
  let numofwalks= [ 4, 4, 3, 2, 3];
  let daysofweekarray= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  for (let x = 0; x<5; x = x +1){
  drawDayofWeek (daysofweekarray[x], numofwalks[x], x);
    
     }
  
  
}

function drawDayofWeek (dayofweek, cupsoftea, linenumber) {
  let lineheight= 400/5;
  let liney= linenumber*lineheight+75; 
  
  textSize(12);
  text(dayofweek, 10, liney);
  fill(0, 102, 153);
  text(cupsoftea, 100, liney);

}  
