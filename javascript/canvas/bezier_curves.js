'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');

    // QUADRATIC BEZIER CURVES
    //quadraticsCurveTo(cp1x, cp1y, x, y)
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    //ctx.stroke();
    ctx.quadraticCurveTo(25, 100, 70, 100);
    //ctx.stroke();
    ctx.quadraticCurveTo(50, 120, 50, 125);
    //ctx.stroke();
    ctx.quadraticCurveTo(60, 110, 80, 100);
    //ctx.stroke();
    ctx.quadraticCurveTo(125, 100, 130, 62.5);
    //ctx.stroke();
    ctx.quadraticCurveTo(135, 25, 75, 25);
    //ctx.stroke();
    ctx.stroke();


    // CUBIC BEZIER CURVES
    // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    /*ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
    */
} else {
    console.log('canvas is not supported');
}