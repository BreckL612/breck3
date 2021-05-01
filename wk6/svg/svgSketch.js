function setup() {
  createCanvas(800, 800, SVG); // Create SVG Canvas
  noStroke();
  colorMode(HSB);
  noLoop();
}

function draw() {
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      const rFill = random(0, 360);
      fill(rFill, 100, 100);
      rect(i, j, 10, 10);
    }
  }
  //   when you're ready to export the sketch uncomment the save() function and reload the sketch
  //   save();
}
