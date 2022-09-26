
leftWristX=0;
leftWristY =0;
rightWristX=0;
rightWristY =0;
scoreRightWrist = 0;
scoreLeftWrist = 0;
song_unstoppable = "";
song_go_down_deh= "";

function preload(){
    song= loadSound("song.mp3");
}
function preload(){
    unstoppable_song = loadSound("unstoppable.mp3");
    go_down_deh_song = loadSound("go_down_deh.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is initialized");
}
function gotPoses(results){
    if(results.length>0){
       console.log(results);
       
       scoreLeftWrist= results[0].pose.keypoints[9].score;
       console.log("scoreLeftWrist="+scoreLeftWrist);
   
       scoreRightWrist= results[0].pose.keypoints[10].score;
       console.log("scoreRightWrist="+scoreRightWrist);
   
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
    song_unstoppable = unstoppable_song.isPlaying();
    console.log(song_unstoppable);

    song_go_down_deh= go_down_deh_song.isPlaying();
    console.log(song_go_down_deh);

    if(scoreLeftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        unstoppable_song.stop();
        if(song_go_down_deh == false){
            go_down_deh_song.play();
        }
        else{
            console.log("Song Name: Go down Deh Song");
            document.getElementById("song_id").innerHTML = "Song Name: Go down deh Song";
        }
    }

    if(scoreRightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        go_down_deh_song.stop();
        if(song_unstoppable == false){
            unstoppable_song.play();
        }
        else{
            console.log("Song Name: Unstoppable Song");
            document.getElementById("song_id").innerHTML = "Song Name: Unstoppable Theme Song";
        }
    }
}

