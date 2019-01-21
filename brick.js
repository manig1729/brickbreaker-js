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
            if((ball.y + ball.r >= this.y) && (ball.y + ball.r <= this.y + this.height/3)){
                if(ball.velY > 0){
                ball.velY = -ball.velY;
                this.isThere = false;
                }
            }
            if(((ball.y - ball.r) <= (this.y + this.height)) && ((ball.y - ball.r) >= (this.y + this.height/2))){
                if(ball.velY < 0){
                ball.velY = -ball.velY;
                this.isThere = false;
                }
            }
        }
        }
    }

}