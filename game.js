
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setup();

    framesPerSecond = 30;
    setInterval(function(){
        if(isPlaying && checkGameOver) {
            drawEverything();
            moveEverything();
        }
        else if(isPlaying == false) {
            showPauseScreen();
        }
    }, 1000/framesPerSecond);
}

function setup() {
    paddle = new Paddle(paddleX, paddleY, paddleWidth, paddleHeight, 'lime'); //changed from lawn green
    ball = new Ball();
    
    // Making the bricks
    var i;
    for(i=0; i<=2; i++){
        bricksArray[i] = [];
    }

    for(i = 0; i<=2; i++){
        for(var j = 0; j <= 3; j++) {
            var brickX = 40 + j*(100 + 40);
            var brickY = 60 + i*(10 + 40);
            bricksArray[i][j] = new Brick(brickX, brickY);
        }
    }
}

function drawEverything() {
    // Drawing the background
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    paddle.draw();
    ball.draw();
    //console.log(paddleX);

    //Border
    //hollowRect(0, 0, canvas.width, canvas.height, 'lime', 10);

    // Logo
    canvasContext.font = "32px arial";
    canvasContext.strokeStyle = 'lime';
    canvasContext.textAlign = 'center';
    canvasContext.strokeText("BRICKBREAKER", canvas.width/2, 30);

    for(var i = 0; i<=2; i++){
        for(var j = 0; j <= 3; j++) {
            if(bricksArray[i][j].isThere)
            bricksArray[i][j].draw();
        }
    }
    //console.log(bricksArray[1][1]);

}

function moveEverything() {
    //console.log("hi");
    ball.move();
    ball.checkCollision();
    for(var i = 0; i<=2; i++){
        for(var j = 0; j <= 3; j++) {
            bricksArray[i][j].checkBallCollision();
        }
    }
}

function showEndScreen() {
    checkGameOver = false;
    canvasContext.font = "15px arial bold";
    canvasContext.fillStyle = 'lime';
    canvasContext.textAlign = 'left';
    canvasContext.fillText(">>> GAME OVER", 10, 300);
}

function showPauseScreen() {
    if(tempPauseChecker) {
        canvasContext.font = "15px arial bold";
        canvasContext.fillStyle = 'lime';
        canvasContext.textAlign = 'left';
        canvasContext.fillText(">>> GAME PAUSED", 10, 300);
        tempPauseChecker = false;
    }
}

function hollowRect(x, y, width, height, color, thickness){
  canvasContext.lineWidth = thickness;
  canvasContext.strokeStyle = color;
  canvasContext.strokeRect(x, y, width, height);
}

function colorRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
    // canvasContext.fillStyle = 'black';
    // canvasContext.fillRect(x+2, y+2, width - 4, height - 4);
}

function colorCircle(x, y, radius, color) {
    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = 1.5;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
    canvasContext.stroke();
    //canvasContext.fill();

    // canvasContext.fillStyle = 'black';
    // canvasContext.beginPath();
    // canvasContext.arc(x, y, radius-2, 0, Math.PI*2, true);
    // canvasContext.fill();
}

function keyPush(key) {
  paddle.update(key.keyCode);
}
