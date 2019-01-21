
class Paddle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.vel = paddleVel;
        this.width = width;
        this.height = height;
        this.color = color;
        this.thickness = 3;
    }

    draw(){
        hollowRect(this.x, this.y, this.width, this.height, this.color, this.thickness);
    }

    update(key){
        switch(key) {
            case 37 : //Left
                if(this.x > 2){
                this.x -= this.vel;
                }
                break;
            case 39 : //Right
                if(this.x < canvas.width - this.width - 2){
                this.x += this.vel;
                }
                break;
            case 27 : //Escape
                if(isPlaying){
                    isPlaying = false;
                }
                else if(isPlaying == false){
                    isPlaying = true;
                }
                break;
        }
    }
}
