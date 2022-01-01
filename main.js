function preload() {
    img = loadImage("anu and bunny.jpeg")
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
}

function draw() {
    image(img, 130, 100, 250, 300);
    fill("#B07589");
    rect(50, 20, 400, 60);

    fill("#B07589");
    rect(20, 20, 60, 450);

    fill("#B07589");
    rect(420, 20, 60, 450);

    fill("#745");
    circle(50, 50, 100);

    fill("lavender");
    circle(50, 50, 70);

    fill("#745");
    circle(450, 50, 100);

    fill("lavender");
    circle(450, 50, 70);

    fill("#B07589");
    rect(20, 420, 450, 60);

    fill("#745");
    circle(50, 450, 100);

    fill("lavender");
    circle(50, 450, 70);

    fill("#745");
    circle(450, 450, 100);

    fill("lavender");
    circle(450, 450, 70);
}