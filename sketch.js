function setup() {createCanvas(500, 500);  background('red');}function draw() {translate(width/2, height/2);rotate(PI/3.0);strokeWeight(4);stroke(51);triangle(30, 75, 58, 20, 86, 75);translate(width/4, height/4);shearX(PI/4.0);rotate(PI/3.0);strokeWeight(4);stroke(51);triangle(30, 75, 58, 20, 86, 75);  }