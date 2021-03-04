'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');

    // TRANSLATE
    // move canvas origin
    /*
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            ctx.save(); //push status of canvas into stack
            ctx.fillStyle = 'rgb(' + (51*i) + ', ' + (255 - (51 *i)) + ', 255';
            ctx.translate(10 + (j * 50), 10 + (i * 50)); //move 
            ctx.fillRect(0, 0, 25, 25);
            ctx.restore(); //pop status of canvas from stack
        }
    }
    */

    // ROTATE: clockwise
    // the center point of rotation is always the canvas origin
    ctx.save();

    ctx.fillStyle = 'blue';
    ctx.fillRect(70, 30, 50, 50);

    ctx.rotate((Math.PI/180) * 25);
    ctx.fillStyle = 'grey';
    ctx.fillRect(70, 30, 50, 50);

    ctx.restore(); 
    ctx.fillStyle = 'blue';
    ctx.fillRect(150, 30, 50, 50);
    
    ctx.translate(200, 80);
    ctx.rotate((Math.PI/180)*35);
    ctx.translate(-200, -80); // go back last location
    ctx.fillStyle = 'grey';
    ctx.fillRect(150, 30, 50, 50);
} else {
    console.log('canvas is not supported');
}