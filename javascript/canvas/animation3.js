'use strict';

let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');
    let raf;

    let ball = {
        x: 50,
        y: 50,
        vx: 5,
        vy: 2,
        radius: 5,
        color: 'red',
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    function draw() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        //trailling effect
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //move ball
        ball.x += ball.vx;
        ball.y += ball.vy;

        //check border and change direction
        if(ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
        }
        if(ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0){ 
            ball.vx = -ball.vx;
        }
        
        ball.draw();
        raf = window.requestAnimationFrame(draw);
    }

    canvas.addEventListener('mouseover', function(e) {
        raf = window.requestAnimationFrame(draw);
    });

    canvas.addEventListener('mouseout', function(e) {
        window.cancelAnimationFrame(raf);
    });

    ball.draw();
} else {
    console.log('canvas is not supported');
}