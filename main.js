function setup(){
    canvas = createCanvas(640,480);
    canvas.position(300,150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,230,150,220,220);
    fill("red");
    stroke("orange");
    circle(50,50,80);
    circle(50,400,80);
    circle(600,50,80);
    circle(600,400,80);
    fill("green");
    stroke("lime");
    rect(90,40,470,20);
    rect(90,390,470,20);
    rect(40,90,20,270);
    rect(590,90,20,270);
}