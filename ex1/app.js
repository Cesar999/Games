var ballX = 125;
var ballSpeedX = 8;

var ballY = 200;
var ballSpeedY = 5;

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 20;
var paddleX = 400;

const BRICK_W = 80;
const BRICK_H = 20;
const BRICK_GAP = 4;
const BRICK_COLS = 10;  
const BRICK_ROWS = 10;  

const myColors = Array.from(Array(BRICK_COLS),()=>Array(BRICK_ROWS)); 

var brickGrid = Array.from(Array(BRICK_COLS),()=>Array(BRICK_ROWS)); 
console.log(brickGrid);

var mouseX = 0;
var mouseY= 0;

const PADDLE_DIST_FROM_EDGE = 60;

var canvas;
var cavasContext;

function updateMousePos(e){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = e.clientX - rect.left - root.scrollLeft;
    mouseY = e.clientY - rect.top - root.scrollTop;
    
    paddleX = mouseX - PADDLE_WIDTH/2;
}

//---------
var counter = document.getElementById('counter');
var points = document.getElementById('points');
var pointsCount = 0;
var totalSeconds = 0;

function brickReset(){
    for(let j=0; j<BRICK_ROWS; j++){
        for(let i=0; i<BRICK_COLS; i++){
            if(Math.random()<2){
                brickGrid[i][j] = true;
            } else {
                brickGrid[i][j] = false;
            }
        }
    }
}

function getColor(i,j){
    return 'blue';
    // return myColors[i][j];
}

function createColors(){
    let temp;
    for(let i=0; i<BRICK_COLS ;i++){
        for(let j=0; j<BRICK_ROWS; j++){
            temp = Math.random();
            if(temp>0.8){
                myColors[i][j] = 'blue';
            } else if(temp>0.6){
                myColors[i][j] = 'pink';
            } else if(temp>0.4){
                myColors[i][j] = 'yellow';
            } else if(temp>0.2){
                myColors[i][j] = 'green';
            } else {
                myColors[i][j] = 'purple';
            }
        }
    }
     
}

function drawBricks(){
    for(let j=0; j<BRICK_ROWS; j++){
        for(let i=0; i<BRICK_COLS; i++){
            if(brickGrid[i][j]){
                colorRect(BRICK_W*i,BRICK_H*j,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, getColor(i,j));
            }
        }
    }
}

window.onload = function(){
    //------------------
    createColors();

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 60;
    setInterval(updateAll, 1000/framesPerSecond);

    canvas.addEventListener('mousemove', updateMousePos);

    //------
    setInterval(setTime, 1000);
    brickReset();
}

function updateAll(){
    moveAll();
    drawAll();
}

function ballReset(){
    const dir = Math.random()<0.5?-1:1;
    ballX = Math.floor(Math.random()*canvas.width);
    ballY = 200;
    //alert('You have lost');
    totalSeconds = 0;
    ballSpeedX = 8 * dir;
    ballSpeedY = 5;
    counter.textContent = totalSeconds;
}

function ballMove(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX > canvas.width){ //Right
        ballSpeedX *= -1;
    }
    if(ballX < 0){  //Left
        ballSpeedX *= -1;
    }

    if(ballY > canvas.height){ //Bottom
        ballSpeedY *= -1;
        //ballReset();
        alert('You Lost');
        location.reload();
    }
    if(ballY < 0){   //Top
        ballSpeedY *= -1;
    }

}

function moveAll(){
    if(pointsCount === 100){
        alert('You have Won');
        location.reload();
        return;
    }
    
    ballMove();
    var ballBrickCol = Math.floor(ballX / BRICK_W);
    var ballBrickRow = Math.floor(ballY / BRICK_H);
    //colorText(`${ballBrickCol},${ballBrickRow}`, ballX, ballY, 'yellow');
    if(ballBrickCol<BRICK_COLS &&ballBrickRow<BRICK_ROWS&&              ballBrickCol>=0 &&ballBrickRow>=0){
        if(brickGrid[ballBrickCol][ballBrickRow] === true){
            brickGrid[ballBrickCol][ballBrickRow] = false;
            pointsCount++;
            points.textContent = `${pointsCount} : ${BRICK_COLS*BRICK_ROWS} `;

            var prevBallX = ballX - ballSpeedX;
            var prevBallY = ballY - ballSpeedY;
            var prevBrickCol = Math.floor(prevBallX/BRICK_W);
            var prevBrickRow = Math.floor(prevBallY/BRICK_H);
            var flag = true;

            if(prevBrickCol<BRICK_COLS &&prevBrickRow<BRICK_ROWS&&              prevBrickCol>=0 &&prevBrickRow>=0){
                if(prevBrickCol!==ballBrickCol){
                    ballSpeedX *= -1;
                    flag = false;
                    console.log(brickGrid[prevBrickCol][ballBrickRow],'col')
                } 
                
                if(prevBrickRow!==ballBrickRow){
                    ballSpeedY *= -1;
                    flag = false;
                    console.log(brickGrid[ballBrickCol][prevBrickRow],'row')
                } 
            }

            if(flag){
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }
            
        }
    }
    

    var paddleTopEdgeY = canvas.height-PADDLE_DIST_FROM_EDGE;
    var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;

    if( ballY > paddleTopEdgeY && ballY < paddleBottomEdgeY &&
        ballX > paddleLeftEdgeX && ballX < paddleRightEdgeX){
            ballSpeedY *= -1;

            var centerOfPaddleX = paddleX + PADDLE_WIDTH/2;
            var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
            ballSpeedX = ballDistFromPaddleCenterX * 0.3;
        }
}


function drawAll(){
    colorRect(0, 0,canvas.width, canvas.height, 'black');
    colorCircle(ballX, ballY, 10, 'red');
    colorRect(paddleX, canvas.height-PADDLE_DIST_FROM_EDGE, PADDLE_WIDTH, PADDLE_THICKNESS, 'white');

    drawBricks();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}


function setTime(){
    totalSeconds++;
    counter.textContent = totalSeconds;

    if(totalSeconds%10 === 0){
        // ballSpeedX *= 1.2;
        // ballSpeedY *= 1.2; 
    }
}

//-------------

function colorText(showWords, textX, textY, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX, textY);
}
