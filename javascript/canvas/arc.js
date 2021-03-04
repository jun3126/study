'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 3; j++) {
            ctx.beginPath();
            let x = 25 + (j * 50);
            let y = 25 + (i * 30);
            let radius = 10;
            let startAngle = 0;
            let endAngle = Math.PI + ((Math.PI * j) /2);
            console.log("endAngle: " + endAngle);
            let anticlockwise = i % 2 == 0 ? false : true;

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if(i > 1) {
                ctx.fillStyle="blue";
                ctx.fill();
            } else {
                ctx.strokeStyle="red";
                ctx.stroke();
            }
        }
    }
} else {
    console.log('canvas is not supported');
}