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
}