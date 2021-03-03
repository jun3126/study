'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    ctx.fillStyle = "rgb(50, 200, 50)";
    ctx.fillRect(55, 55, 40, 40);
    ctx.clearRect(60, 60, 30, 30);
    ctx.fillStyle = "rgb(50, 200, 200)";
    ctx.fillRect(65, 65, 20, 20);
} else {
    console.log('canvas is not supported');
}