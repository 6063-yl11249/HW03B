let eDiam = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('white');
  noStroke();
  randomSeed(1010);

  for (let x = eDiam; x < width; x += random(10, 60)) {
    for (let y = eDiam; y < height; y += random(10, 60)) {
      fill('red');
      let size = eDiam + random(-10, 10);
      let randomX = random(eDiam, width - eDiam);
      let randomY = random(eDiam, height - eDiam);
      ellipse(randomX, randomY, size, size);
    }
  }
}
