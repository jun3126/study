'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');

    //draw triangle
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(50, 50);
    ctx.lineTo(50, 10);
    ctx.fill();

    //draw smile
    ctx.beginPath();
    ctx.arc(90, 30, 25, 0, Math.PI*2, true); //outer circle
    ctx.moveTo(105, 30);
    ctx.arc(90, 30, 15, 0, Math.PI, false); // Mouth(clockwise)
    ctx.moveTo(85, 20);
    ctx.arc(80, 20, 5, 0, Math.PI*2, true); //left eye
    ctx.moveTo(105, 20);
    ctx.arc(100, 20, 5, 0, Math.PI * 2, true); //right eye
    ctx.stroke();

    //draw filled triangle
    ctx.beginPath();
    ctx.moveTo(120, 10);
    ctx.lineTo(170, 10);
    ctx.lineTo(120, 50);
    ctx.fill(); //if use fill, no need closePath

    //draw stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 55);
    ctx.lineTo(170, 15);
    ctx.lineTo(170, 55);
    ctx.closePath(); //line-base
    ctx.stroke(); //draw
} else {
    console.log('canvas is not supported');
}