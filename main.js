nose_x=0;
nose_y=0;
function preload(){
    clownnose=loadImage('mustache.jpg')
}
function setup(){
    Canvas=createCanvas(500,500);
    Canvas.center();
    video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelloaded); 
posenet.on('pose',gotresult);
}
function clickimage(){
    save('image1.png');
}
function draw(){
    image(video,0,0,500,500);
    //fill("red");
    //stroke("red")
    //circle(nose_x,nose_y,40);
//image(clownnose,nose_x,nose_y,60,60);
}
function modelloaded(){
    console.log("model is loaded");
}
function gotresult(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x-70;
        nose_y= results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

