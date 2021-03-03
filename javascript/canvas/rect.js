'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(50, 50, 50, 50);
    
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(80, 80, 50, 50);
} else {
    console.log('canvas is not supported');
}