'use strict';

let sun = new Image();
let moon = new Image();
let earth = new Image();

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);

function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    if(canvas.getContext) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        let ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 400, 400);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.save();
        ctx.translate(200, 200);

        //earth
        let time = new Date();
        ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
        ctx.translate(120, 0);
        ctx.fillRect(0, -12, 50, 24); //shaodw
        ctx.drawImage(earth, -12, -12);
        console.log('drawed erath');

        //moon
        ctx.save();
        ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
        ctx.translate(0, 28.5);
        ctx.drawImage(moon, -3.5, -3.5);
        ctx.restore();
        
        ctx.restore();

        ctx.beginPath();
        ctx.arc(200, 200, 120, 0, Math.PI*2, false); // earth orbit
        ctx.stroke();

        //sun
        ctx.drawImage(sun, 0, 0, 400, 400);
        window.requestAnimationFrame(draw);
    } else {
        console.log('canvas is not supported');
    }
}

init();