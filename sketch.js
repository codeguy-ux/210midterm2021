let flare;
let ufo;
let press = 0;
let flr = [];
let ill = [];
let x = 100;
let y = 100;
let a, b;

let q = 70;
let p = 85;
var emo;

let keyIsPressed;

let cow = [];
let w = 30;
let one = 350;
let two = 10;
let three = 55;
let four = 310;
var bus;
let walk = 225;
let left = 325;
let bright = 100;
let float = 235;
let flyH = 90;
let flyW = 0;

var song;
let large = 100;

let pageNum = 1;
let numPages = 6;

function preload() {
  ill[0] = loadImage("1.png");
  ill[1] = loadImage("2.png");
  ill[2] = loadImage("3.png");
  ill[3] = loadImage("4.png");
  ill[4] = loadImage("5.png");
  ill[5] = loadImage("6.png");
  ill[6] = loadImage("7.png");

  flr[0] = loadImage("flare.png");
  flr[1] = loadImage("flare2.png");
  flr[2] = loadImage("flare3.png");
  flr[3] = loadImage("ufo1.png");
  flr[4] = loadImage("ufo2.png");
  flr[5] = loadImage("ufo3.png");

  emo = loadImage("emo.png");

  cow[0] = loadImage("cow.png");
  cow[1] = loadImage("cow2.png");
  cow[2] = loadImage("cow3.png");
  cow[3] = loadImage("cow4.png");

  // lamp = loadImage("lamp.png");
  bus = loadImage("bus.png");

  song = loadSound("twilight.mp3");
}

function setup() {
  song.play();

  noCursor();
  createCanvas(400, 400);

  textSize(16);

  a = 211;
  b = 142;
}

function draw() {
  //page one
  if (pageNum == 1) {
    image(ill[0], 0, 0, 400, 400);

    image(emo, 300, 200, 90, 150);
    image(flr[0], mouseX, mouseY, 75, 75);

    image(cow[1], one, 160, 45, 45);
    image(cow[2], two, 185, 75, 75);
    image(cow[3], three, 120, 30, 30);
    image(cow[2], four, 110, 50, 50);
    // image(lamp, 265, 140, 125, 205);

    one = one - 0.04;
    if (one <= 270) {
      one = one + 1;
    }

    two = two + 0.04;
    if (two >= 50) {
      two = two - 1;
    }
    three = three - 0.04;
    if (three <= 1) {
      three = three + 1;
    }

    if ((mouseY) => 173) {
      mouseY = 0;
    }
    console.log(mouseX, mouseY);

    text(
      "while i was waiting for the bus last night, an usual star that seemed as if someone was controlling it",
      10,
      10,
      400
    );
  }

  console.log(pageNum);

  //PAGE TWO
  if (pageNum == 2) {
    image(ill[1], 0, 0, 400, 400);

    image(emo, 300, 175, 50, 90);
    image(flr[1], mouseX, mouseY, 75, 75);

    push();

    image(bus, a, b, q, p);

    if (a <= 211) {
      a = 211;
    }

    b = b - 0.75;

    console.log(rect.size);

    pop();

    fill(255);
    text("i was so dsitracted that i missed the bus", 30, 30, 200);

    console.log(p, q);
    console.log(pageNum);
    console.log(mouseX, mouseY);

    image(cow[1], one, 190, 45, 45);
    image(cow[2], two, 210, 30, 30);
    image(cow[3], three, 175, 30, 30);

    w = w + 0.04;
    if ((w) => 113) {
    }
    one = one + 0.04;
    if ((one) => 113) {
      one = 0;
    }
    two = two + 0.04;
    if (two >= 180) {
    }
    three = three - 0.04;
    if (three <= 250) {
    }
    four = four + 0.04;
    if ((four) => 250) {
    }
  }

  // page 3

  if (pageNum == 3) {
    // loop();
    image(ill[2], 0, 0, 400, 400);
    image(emo, left, walk, 70, 150);
    blue = 300;
    image(flr[2], 25, 0, large, large);
    image(cow[0], w, 240, 20, 20);
    image(cow[1], one, 300, 50, 50);
    // image(cow[2], two, 315, 60, 60);
    // image(cow[3], three, 290, 60, 60);
    fill(255);
    text("i decided to walk towards it", 45, 30, 400);
    large = large + 0.15;
    console.log(pageNum);
  }

  //page 4
  if (pageNum == 4) {
    //page 4 content
    image(ill[3], 0, 0, 400, 400);
    image(emo, 300, 200, 70, 150);
    image(flr[3], mouseX, mouseY, 200, 200);
    fill(255);
    text("IT WAS A UFO", 30, 30, 200);
    image(cow[0], w, 320, 20, 20);
    image(cow[1], one, 300, 50, 50);
    image(cow[2], two, 315, 60, 60);
    image(cow[3], three, 290, 60, 60);
    //page 4 variables

    large = large + 0.025;
    w = w + 0.04;
    one = one - 0.04;
    three = three - 0.04;
    four = four + 0.04;
    console.log(mouseX, mouseY);
    console.log(pageNum);
  }
  // page 5
  if (pageNum == 5) {
    image(ill[6], 0, 0, 400, 400);
    image(emo, 300, 200, 70, 150);
    fill(255);
    text("things got weird; fast", 30, 30, 400);

    //cows
    image(cow[1], one, float, 45, 45);
    image(cow[2], two, float, 30, 30);
    image(cow[3], three, float, 30, 30);
    image(cow[2], four, float, 50, 50);
    image(cow[0], 120, float, 50, 100);

    float--;
    if (float <= 0) {
      float = -100;
    }

    w = w + 0.04;
    if ((w) => 180) {
    }
    one = one - 0.04;
    if (one <= 180) {
    }
    two = two + 0.04;
    if (two >= 180) {
    }
    three = three - 0.04;
    if (three <= 250) {
    }
    four = four + 0.04;
    if ((four) => 250) {
    }
  }
  console.log(pageNum);

  //page 6
  if (pageNum == 6) {
    image(ill[5], 0, 0, 400, 400);
    image(emo, 300, 200, 70, 134);
    image(flr[5], flyW, 90, 250, 250);
    fill(255);
    text("sadly, they did not take me with them ", 30, 30, 200);

    flyH = flyH - 1;
    flyW = flyW + 1;
  }
  console.log(mouseX, mouseY);

  //stars
  push();
  noStroke();
  fill(255, 192, 203);
  ellipse(random(400), random(0, 100), 2, 2);
  noStroke();
  fill(138, 43, 226);
  ellipse(random(400), random(0, 100), 2, 2);
  pop();
  fill(255);

  a = a - 0.01;
  if (a < 150) {
    a = 0;
  }
  b = b - 1;
  if (b < 100) {
    b = (0, 400);
  }

  console.log(pageNum);
}

function mousePressed() {
  pageNum;
  if (pageNum < numPages) {
    pageNum++;
  } else {
    pageNum = 1;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    walk--;
    if (walk <= 120) {
      walk = 120;
    }

    left--;
    if (left <= 290) {
      left = 290;
    }

    bright + 1;
    if ((bright) => 175) {
      bright = 125;
    }
  }
  if (keyCode == DOWN_ARROW) {
    walk++;
    if (walk <= 300) {
      walk--;
    }
  }
  console.log(mouseX, mouseY);
}
