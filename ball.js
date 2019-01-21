
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
    if(this.y >= canvas.height - 20){
        if(this.x >= paddle.x && this.x <= (paddle.x + paddle.width)){
            if(this.velY > 0)
            this.velY = -this.velY
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
    }
}
