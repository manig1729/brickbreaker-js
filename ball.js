
class Ball {
    constructor() {
        this.x = ballX;
        this.y = ballY;
        this.r = ballRadius;
        this.velX = ballVelX;
        this.velY = ballVelY;
    }

    draw() {
        colorCircle(this.x, this.y, this.r, 'pink');
    }

    move() {
        this.x += this.velX;
        this.y += this.velY;
    }
}