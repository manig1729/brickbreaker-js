
class Paddle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        colorRect(this.x, this.y, this.width, this.height, this.color);
    }
}