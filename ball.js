// the ball class for the brick breker game

class Ball {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.r = ballRadius;
        this.velX = ballVelX;
        this.velY = ballVelY;
    }

    draw() {
        colorCircle(this.x, this.y, this.r, 'yellow');
    }

    move() {
        this.x += this.velX;
        this.y += this.velY;
    }

    checkCollision() {
        // Ball with paddle
        var xTemp = this.x - paddle.x;
        if (this.y >= canvas.height - (ball.r + paddle.height) && this.y <= canvas.height + 2) {
            if (this.x >= paddle.x && this.x <= (paddle.x + paddle.width)) {
                this.velY = 4;
                this.velX = 3 * (xTemp - 50) / 25.0;
                this.velY = -this.velY;
            }
        }
        // Ball with top
        if (this.y < ball.r) {
            if (this.velY < 0)
                this.velY = -this.velY;
        }

        // Ball with right
        if (this.x >= canvas.width - ball.r && this.velX > 0)
            this.velX = -this.velX;

        // Ball with left
        if (this.x <= ball.r && this.velX < 0)
            this.velX = -this.velX;

        // Ball moving off the btttom of screen
        if (this.y - this.r - 10 > canvas.height)    // Extra Margin for Error
            showEndScreen();
    }
}
