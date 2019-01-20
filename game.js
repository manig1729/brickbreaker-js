
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setup();

    framesPerSecond = 30;
    setInterval(function(){
        if(isPlaying) {
            drawEverything();
            moveEverything();
        }
        else if(isPlaying == false) {
            canvasContext.font = "15px arial";
            canvasContext.fillStyle = 'lime';
            canvasContext.textAlign = 'left';
            canvasContext.fillText(">>> GAME PAUSED", 10, 300);            
        }
    }, 1000/framesPerSecond);
}

function setup() {
    paddle = new Paddle(paddleX, paddleY, paddleWidth, paddleHeight, 'lawngreen');
    ball = new Ball();
}

function drawEverything() {
    // Drawing the background
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    paddle.draw();
    ball.draw();
    //console.log(paddleX);

    // Logo
    canvasContext.font = "32px arial";
    canvasContext.strokeStyle = 'lime';
    canvasContext.textAlign = 'center';
    canvasContext.strokeText("BRICKBREAKER", canvas.width/2, 30);

}

function moveEverything() {
    //console.log("hi");
    ball.move();
    ball.checkCollision();
}

function colorRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(x+2, y+2, width - 4, height - 4);
}

function colorCircle(x, y, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
    canvasContext.fill();

    canvasContext.fillStyle = 'black';
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius-2, 0, Math.PI*2, true);
    canvasContext.fill();
}

function keyPush(key) {
    switch(key.keyCode) {
        case 37 : //Left
            if(paddleX > 2){
            paddleX -= paddleVel;
            }
            break;
        case 39 : //Right
            if(paddleX < canvas.width - paddleWidth - 2){
            paddleX += paddleVel;
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