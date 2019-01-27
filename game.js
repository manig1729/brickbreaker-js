
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setup();

    document.addEventListener('keydown', keyPush);

    mouseInput();
    touchInput();
   
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

    paddle = new Paddle(canvas.width/2 - paddleWidth/2, canvas.height - paddleHeight, paddleWidth, paddleHeight, 'lime');
    ball = new Ball();
    
    // Making the bricks
    var i;
    for(i=0; i<=2; i++){
        bricksArray[i] = [];
    }

    var brickWidth = Math.floor(canvas.width/6);
    for(i = 0; i<=2; i++){
        for(var j = 0; j <= 3; j++) {
            var brickX = Math.floor(canvas.width/15) + j*(brickWidth + Math.floor(canvas.width/15));
            var brickY = 60 + i*(brickHeight + 40);
            bricksArray[i][j] = new Brick(brickX, brickY);
        }
    }
}

function drawEverything() {
    // Drawing the background
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    paddle.draw();
    ball.draw();

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
}

function moveEverything() {
    ball.move();
    ball.checkCollision();
    for(var i = 0; i<=2; i++){
        for(var j = 0; j <= 3; j++) {
            bricksArray[i][j].checkBallCollision();
        }
    }

    var score = 0;
    for(var i = 0; i<=2; i++){
        for(var j = 0; j <= 3; j++) {
            if(bricksArray[i][j].isThere)
            score = 1;
        }
    }
    if(score == 0){
        drawEverything();
        showEndScreen();
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
}

function colorCircle(x, y, radius, color) {
    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = 1.5;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
    canvasContext.stroke();
}

function keyPush(key) {
  paddle.update(key.keyCode);
}

function touchInput() {
    var startX = 0;
    var touchDist = 0;
    canvas.addEventListener('touchstart', function(evt){
        var touchObj = evt.changedTouches[0];
        startX = parseInt(touchObj.clientX);
        paddle.x = startX - paddle.width/2;
        evt.preventDefault();
    }, false);
    canvas.addEventListener('touchmove', function(evt){
        var touchObj = evt.changedTouches[0];// reference first touch point for this event
        var dist = parseInt(touchObj.clientX);
        paddle.x = dist - paddle.width/2;
        evt.preventDefault();   
    }, false);
    canvas.addEventListener('touchend', function(evt){
        var touchObj = evt.changedTouches[0];
        paddle.x = touchObj.clientX;
        evt.preventDefault()
    }, false);
}

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}

function mouseInput() {
    canvas.addEventListener('mousemove',
    function(evt) {
        var mousePos = calculateMousePos(evt);
        paddle.x = mousePos.x - paddle.width/2;
    });
}