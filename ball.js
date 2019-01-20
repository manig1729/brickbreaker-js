
class Ball {
    constructor() {
        this.x = ballX;
        this.y = ballY;
        this.r = ballRadius;
        this.velX = ballVelX;
        this.velY = ballVelY;
    }

    draw() {
        colorCircle(this.x, this.y, this.r, 'yellow');
    }

    move() {
        this.x += ballVelX;
        this.y += ballVelY;
    }

    checkCollision() {
     // Ball with bottom
    if(this.y >= canvas.height - 20){
        if(this.x >= paddleX && this.x <= (paddleX + paddleWidth)){
            if(ballVelY > 0)
            ballVelY = -ballVelY;
        }
    }    
    // Ball with top
    if(this.y < 10){
        if(ballVelY < 0)
        ballVelY = -ballVelY;
        }

    // Ball with right
    if(this.x >= 590 && ballVelX > 0)
        ballVelX = -ballVelX;
    
    // Ball with left
    if(this.x <= 10 && ballVelX < 0)
        ballVelX = -ballVelX;
    }
}