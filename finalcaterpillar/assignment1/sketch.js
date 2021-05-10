var size = 15; // 15 is a value, and it's being stored in the variable named size
var snacks;
var home = "welcomeScreen"; // This is a string value being stored in the variable named home

function setup() { // This is declaring a function the body of which ends at the }
  createCanvas(600, 600);
    n = new Caterpillar();
  frameRate(15);
    snacks = createVector(random(width), random(height));
  pickLocation(); // This calls the function named pickLocation
}
 
function pickLocation() {
  var vert = floor(width / size);
  var horz = floor(height / size);
    snacks = createVector(floor(random(vert)), floor(random(horz)));
  snacks.mult(size);
}

function draw() {
  background(50, 55, 100);

  if (home == "welcomeScreen") { // This is logic (testing equality)
    welcomeScreen();
  } else if (home == 1) {
    playGame();
  } else if (home == 2) {
    endGame();
  }
}


function playGame()
{
  if (n.eats(snacks)) {
    pickLocation();
  }
  n.over();
  n.update();
  n.show();

  //caterpillar snacks
  fill("magenta");
  circle(snacks.x, snacks.y, size + 5);
}

function welcomeScreen() {
    background(50);
    fill(255);
    textAlign(CENTER);
    text("CATERPILLAR", width / 2, height / 2);
    text("press a key to start", width / 2, height / 2 + 20);
}

function endGame() {
    background(50);
    fill(255);
    textAlign(CENTER);
    text("CATERPILLAR", width / 2, height / 2);
    text("game over (press a key to restart)", width / 2, height / 2 + 20);
}


//From: https://p5js.org/examples/interaction-snake-game.html

function keyPressed() {
  if (home == "welcomeScreen") {
    home = 1;
  } else if (home==1) {
    if (keyCode === UP_ARROW) {
      n.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      n.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      n.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      n.dir(-1, 0);
    }
  } else if (home == 2) {
    home = 1;
  }
}

//THIS IS BORROWED https://p5js.org/examples/interaction-snake-game.html
function Caterpillar() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0; //Caterpillar length
  this.tail = []; // This is an array which will hold the list of locations for each of the snake's body parts

  this.eats = function (long) {
    var d = dist(this.x, this.y, long.x, long.y);

    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.over = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var long = this.tail[i];
      var d = dist(this.x, this.y, long.x, long.y);
      if (d < 1) {
        home = 2;
        pickLocation();
        this.total = 0;
        this.tail = [];
      }
    }
  };

  this.update = function () {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * size;
    this.y = this.y + this.yspeed * size;
    this.x = constrain(this.x, 0, width - size);
    this.y = constrain(this.y, 0, height - size);
  };

  this.show = function () {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) { // This is a loop which loops over each of the snake's body parts and draws them
      circle(this.tail[i].x, this.tail[i].y, size);
    }

    fill(150, 200, 1300);
    circle(this.x, this.y, size);
  };
}