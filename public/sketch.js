var socket;

function setup() {
  createCanvas(400, 400);
  background(51);
  socket=io.connect('localhost:8080/');

  socket.on('mouse',newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(255,0,100);
  circle(data.x,data.y,40);
}

function mouseDragged(){
  noStroke();
  fill(255);

  var data={
    x:mouseX,
    y:mouseY
  }

  socket.emit('mouse',data);
  circle(mouseX,mouseY,40);
}

function draw() {

}
