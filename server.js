var express=require('express');
var socket=require('socket.io');

var app=express();
var server=app.listen(8080);
app.use(express.static('public'));

var io=socket(server);
io.sockets.on('connection',newConnection);

console.log("Server Running...");

function newConnection(socket){
    console.log("N:"+socket.id);

    socket.on('mouse',mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }
}