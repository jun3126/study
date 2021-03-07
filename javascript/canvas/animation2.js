'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    if(canvas.getContext) {
        let now = new Date();
        //console.log('now', now);

        ctx.save();
        ctx.clearRect(0, 0, 150, 150);
        ctx.translate(75, 75);
        ctx.scale(0.4, 0.4);
        ctx.rotate(-Math.PI/2);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        
        // draw clock - hour
        ctx.save();        
        for(let i = 0; i < 12; i++) {
            ctx.beginPath();
            ctx.rotate(Math.PI/6);
            ctx.moveTo(100, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.restore();

        // draw clock - minute
        ctx.save();
        ctx.lineWidth = 5;
        for(let i = 0; i < 60; i++) {
            if(i % 5 != 0) {
                ctx.beginPath();
                ctx.moveTo(117, 0);
                ctx.lineTo(120, 0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI/30);
        }
        ctx.restore();

        let sec = now.getSeconds();
        let min = now.getMinutes();
        let hour = now.getHours();
        hour = hour >= 12 ? hour-12 : hour;
        
        ctx.fillStyle = 'black';

        // draw time - hour
        ctx.save();
        ctx.rotate( hour * (Math.PI/6) + (Math.PI/360) * min + (Math.PI/21600) * sec);
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.restore();;

        // draw time - minute
        ctx.save();
        ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-28, 0);
        ctx.lineTo(112, 0);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(0, 0, 142, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.restore();

        // draw time - second
        ctx.save();
        ctx.rotate(sec * Math.PI/30);
        ctx.strokeStyle = '#D40000';
        ctx.fillStyle = '#D40000';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(83, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI*2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(95, 0, 10, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.arc(0, 0, 3, 0, Math.PI*2, true);
        ctx.fill();
        ctx.restore();

        //draw clock - border
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(0, 0, 142, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.restore();

        window.requestAnimationFrame(draw);
    } else {
        console.log('canvas is not supported');
    }
}
init();