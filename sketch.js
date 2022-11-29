
// Declare variable "a" of type PImage
var et;

// for button
var overButton;

var backwards;

var timeLapse;

var timeTrack;

var blur;

function setup() {
    initializeFields();
    createCanvas(600, 600);
    // Load the image into the program
    et = loadImage("et.png");
    filter(BLUR, 6);
}

function draw() {
    background(0);
    var m = millis();
    fill(m % 100);
    rect(25, 25, 555, 555, 30);
    image(et, 0, 0);
    textSize(128);
    fill(0, 408, 612, 816);
    text("Techno", 100, 50, -120);
    filter(BLUR, 6);
    if (overButton == true) {
        noStroke();
        fill(74, 245, 243, 70);
    } else {
        noStroke();
        noFill();
    }
    circle(267, 290, 30);
}

function mousePressed() {
    if (overButton) {
        link("https://web.facebook.com/groups/378940129825776");
    }
}

function mouseMoved() {
    checkButtons();
}

function mouseDragged() {
    checkButtons();
}

function checkButtons() {
    if (mouseX > 200 && mouseX < 500 && mouseY > 200 && mouseY < 300) {
        overButton = true;
    } else {
        overButton = false;
    }
}

function initializeFields() {
    et = null;
    overButton = false;
    backwards = false;
    timeLapse = 400;
    timeTrack = 0;
    blur = null;
}

function preload() {

// Declare variable "a" of type PImage
var et;

// for button
var overButton;

var backwards;

var timeLapse;

var timeTrack;

var blur;

function setup() {
    initializeFields();
    createCanvas(600, 600);
    // Load the image into the program
    et = loadImage("et.png");
    filter(BLUR, 6);
}

function draw() {
    background(0);
    var m = millis();
    fill(m % 100);
    rect(25, 25, 555, 555, 30);
    image(et, 0, 0);
    textSize(128);
    fill(0, 408, 612, 816);
    text("Techno", 100, 50, -120);
    filter(BLUR, 6);
    if (overButton == true) {
        noStroke();
        fill(74, 245, 243, 70);
    } else {
        noStroke();
        noFill();
    }
    circle(267, 290, 30);
}

function mousePressed() {
    if (overButton) {
        link("https://web.facebook.com/groups/378940129825776");
    }
}

function mouseMoved() {
    checkButtons();
}

function mouseDragged() {
    checkButtons();
}

function checkButtons() {
    if (mouseX > 200 && mouseX < 500 && mouseY > 200 && mouseY < 300) {
        overButton = true;
    } else {
        overButton = false;
    }
}

function initializeFields() {
    et = null;
    overButton = false;
    backwards = false;
    timeLapse = 400;
    timeTrack = 0;
    blur = null;
}

function preload() {
photo = loadImage('et.png');
}


}

