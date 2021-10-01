
class Paddle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.vel = paddleVel;
        this.width = width;
        this.height = height;
        this.color = color;
        this.thickness = 2;
    }

    draw() {
        hollowRect(this.x, this.y, this.width, this.height, this.color, this.thickness);
    }

    update(key) {
        switch (key) {

            //--------------------This section is removable--------------------
            case 38: //UP increase movement speed

                this.vel+=10;
                break;

            case 40: //DOWN decrease movement speed
                if(this.vel>20)
                    this.vel-=10;
                break;


            //----------------------------------------------------------------
            case 37: //Left
                if (this.x > 2) {
                    this.x -= this.vel;
                }
                break;
            case 39: //Right
                if (this.x < canvas.width - this.width - 2) {
                    this.x += this.vel;
                }
                break;
            case 27: //Escape
                if (isPlaying) {
                    isPlaying = false;
                    checkGameOver = false;
                    tempPauseChecker = true;
                }
                else if (isPlaying == false) {
                    isPlaying = true;
                    checkGameOver = true;
                    tempCreditChecker=true;
                    tempPauseChecker = true;
                }
                break;
        }
    }
}
