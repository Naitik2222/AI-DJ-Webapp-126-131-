song="";

function preload(){
    song= loadSound("song.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0,0,600,500);
  textSize(20);
    stroke("yellow")
    let d = day();
text('Current date: \n' + d, 15, 50);

let m = month();
text(': \n' + m, 55, 50);


stroke("#f5c61b")
let y = year();
text(': \n' + y, 70, 50);
}

function Start(){
    song.play();
}
