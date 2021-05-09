var scl = 15;
var food;
var state = "welcomeScreen";

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  food = createVector(random(width), random(height));
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(50, 55, 100);

  if (state == "welcomeScreen") {
    welcomeScreen();
  } else if (state == 1) {
    playGame();
  } else if (state == 2) {
    endGame();
  }
}

function playGame()
{
  if (s.eats(food)) {
    pickLocation();
  }
  s.over();
  s.update();
  s.show();

  //snake food
  fill("magenta");
  circle(food.x, food.y, scl + 5);
}

function welcomeScreen() {
    background(50);
    fill(255);
    textAlign(CENTER);
    text("SNAKE", width / 2, height / 2);
    text("press a key to start", width / 2, height / 2 + 20);
}

function endGame() {
    background(50);
    fill(255);
    textAlign(CENTER);
    text("SNAKE", width / 2, height / 2);
    text("game over (press a key to restart)", width / 2, height / 2 + 20);
}

function keyPressed() {
  if (state == "welcomeScreen") {
    state = 1;
  } else if (state==1) {
    if (keyCode === UP_ARROW) {
      s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      s.dir(-1, 0);
    }
  } else if (state == 2) {
    state = 1;
  }
}

//snake
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0; //snake length++
  this.tail = [];

  this.eats = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);

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
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        state = 2;
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

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.show = function () {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    fill(150, 200, 1300);
    rect(this.x, this.y, scl);
  };
}