function preload(){

}
function setup(){
  canvas=createCanvas(600,700)
  canvas.position(400,300);
  video = createCapture(VIDEO);
  video.size(600,700);
  video.hide();
}

function draw(){
  image(video, 0, 0, 400, 300)
}