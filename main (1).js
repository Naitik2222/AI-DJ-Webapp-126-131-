song="";
leftWristX=0;
leftWristY =0;
rightWristX=0;
rightWristY =0;

function preload(){
    song= loadSound("song.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses);
}


function gotPoses(results){
    if(results.length>0){
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       console.log("leftWristX ="+leftWristX+ "leftWristY="+leftWristY);
       
       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX ="+rightWristX+ "rightWristY="+rightWristY);
   
   
    }
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
    song.setVolume(1);
    song.rate(1);
}
