class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = brickHeight;
        this.width = brickWidth;
        this.isThere = true;
    }

    draw() {
        hollowRect(this.x, this.y, this.width, this.height, 'red', 2);
    }

    checkBallCollision() {
        if(this.isThere){
        if(ball.x >= this.x && ball.x <= (this.x + this.width)){
            if((ball.y + ball.r >= this.y) && (ball.y + ball.r <= this.y + this.height/3)){ // TOP
                if(ball.velY > 0){
                ball.velY = -ball.velY;
                this.isThere = false;
                }
            }
            if(((ball.y - ball.r) <= (this.y + this.height)) && ((ball.y - ball.r) >= (this.y + this.height/2))){                                                               // BOTTOM
                if(ball.velY < 0){
                ball.velY = -ball.velY;
                this.isThere = false;
                }
            }
        }

        if(ball.y + ball.r > this.y && ball.y - ball.r < (this.y + this.height)){
            if(ball.x + ball.r >= this.x && (ball.x + ball.r <= this.x + this.width/10))  { // LEFT
                if(ball.velX > 0){
                    ball.velX = -ball.velX;
                    this.isThere = false;
                }
            }
            if((ball.x - ball.r <= this.x + this.width) && (ball.x - ball.r >= (this.x + this.width/10))) {                                                                             // RIGHT
                if (ball.velX < 0){
                    ball.velX = -ball.velX;
                    this.isThere = false;
                }
            }
        }
        }
    }

}