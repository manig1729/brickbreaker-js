
class Ball {
    constructor() {
        this.x = ballX;
        this.y = ballY;
        this.r = ballRadius;
        this.velX = ballVelX;
        this.velY = ballVelY;
    }

    draw() {
        colorCircle(this.x, this.y, this.r, 'yellow'); //changed from lime - change back if you want
    }

    move() {
        this.x += this.velX;
        this.y += this.velY;
    }

    checkCollision() {
     // Ball with bottom
    if(this.y >= canvas.height - 20 && this.y <= canvas.height+2){
        if(this.x >= paddle.x && this.x <= (paddle.x + 20)){
            if(this.velY > 0)
            this.velY = -this.velY;
            this.velX = -6;
        }
        else if(this.x > paddle.x+20 && this.x <= (paddle.x + 40)){
            if(this.velY > 0)
            this.velY = -this.velY
            this.velX = -4;
        }
        else if(this.x > paddle.x+40 && this.x <= (paddle.x + 60)){
            if(this.velY > 0)
            this.velY = -this.velY;
            this.velX = 0;
        }
        else if(this.x > paddle.x+60 && this.x <= (paddle.x + 80)){
            if(this.velY > 0)
            this.velY = -this.velY;
            this.velX = 4;
        }
        else if(this.x > 80 && this.x <= (paddle.x + paddle.width)){
            if(this.velY > 0)
            this.velY = -this.velY;
            this.velX = 6;
        }
    }
    // Ball with top
    if(this.y < 10){
        if(this.velY < 0)
        this.velY = -this.velY;
        }

    // Ball with right
    if(this.x >= 590 && this.velX > 0)
        this.velX = -this.velX;

    // Ball with left
    if(this.x <= 10 && this.velX < 0)
        this.velX = -this.velX;

    if(this.y - this.r - 10 > canvas.height)
        showEndScreen();
    }
}
