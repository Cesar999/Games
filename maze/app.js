const walls0 = [
    [2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 3]
];

const walls1 = [
    [2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
];

let walls = walls0;

const crush_sound = new Audio("zap.mp3");
const win_sound = new Audio("win.mp3");

const BRICK_W = 40;
const BRICK_H = 40;
const BRICK_GAP = 2;
const BRICK_COLS = walls[0].length;  
const BRICK_ROWS = walls.length;  
let mouseX = 0;
let mouseY = 0;
const image = new Image();

const offset = 30;
const step = 10;

let time1 = false;
let crushTime = 50;
let time2 = false;
let normalTime = 50;

let direction = 'down';

let old_key = false;

let sx=5, sy=10, sWidth=104, sHeight=155-offset, dx=0, dy=-10, dWidth=30, dHeight=40;

window.onload = function(){
    //------------------
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    //canvas.addEventListener('mousemove', updateMousePos);
    drawAll();
}

function drawAll(){
    drawBoy(direction);
}

function drawBricks(){
    for(let i=0; i<BRICK_ROWS; i++){
        for(let j=0; j<BRICK_COLS; j++){
            if(walls[i][j] === 1){
                colorRect(BRICK_W*j,BRICK_H*i,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'blue');
            }
            if(walls[i][j] === 2){
                colorRect(BRICK_W*j,BRICK_H*i,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'yellow');
            }
            if(walls[i][j] === 3){
                colorRect(BRICK_W*j,BRICK_H*i,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'red');
            }
        }
    }
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorText(showWords, textX, textY, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX, textY);
}

function updateMousePos(e){    
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = e.clientX - rect.left - root.scrollLeft;
    mouseY = e.clientY - rect.top - root.scrollTop;

    var printX = Math.floor(mouseX  / BRICK_W);
    var printY = Math.floor(mouseY / BRICK_H);
    updateAll();
    colorText(`${printX},${printY}`, mouseX -10, mouseY-10, 'yellow');
}

function updateAll(){
    colorRect(0, 0, 800, 600, 'black');
    drawBricks();
}

function drawBoy(direction){
    image.onload = function () {
        updateAll();
        crush = false;
        if(direction==='left'){
            sy=339+offset; // left
            if(dx>0&&!(checkCrush(dx-step,dy)||checkCrush(dx-step,dy+dHeight-step))){
                dx-=step;
            } 
        } else if(direction==='up'){
            sy=169.5+offset; // up
            if(dy>0&&!(checkCrush(dx,dy-step)||checkCrush(dx+dWidth-step,dy-step))){
                dy-=step;
            } 
        } else if(direction==='right'){
            sy=508.5+offset; // right
            if(dx<canvas.width-dWidth&&!(checkCrush(dx+dWidth,dy)||checkCrush(dx+dWidth,dy+dHeight-step))){
                dx+=step;
            } 
        } else if(direction==='down'){
            sy=0+offset; //down
            if(dy<canvas.height-dHeight&&!(checkCrush(dx,dy+dHeight)||checkCrush(dx+dWidth-step,dy+dHeight))){
                dy+=step;
            } 
        }
        
        canvasContext.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if(direction){
            if(sx>=339){
                sx=0;
            } else {
                if(crush){
                    crushTime=200;
                    normalTime = 200;
                    crush_sound.play();
                } else{
                    crushTime=50;
                    normalTime = 50;
                }
                sx+=113;
            }
        }

    }
    image.src = "boy1.png";
}

function controllers(e_keyCode){
    //console.log(e_keyCode);
    if(e_keyCode === 32){
        if(checkWin(dx,dy)){
            win_sound.play();
            alert('You Have Won!');
        }
    }
    if(e_keyCode === 37){
        direction = 'left';
        drawBoy(direction);
        return;
    }
    if(e_keyCode === 38){
        direction = 'up';
        drawBoy(direction);
        return;
    }
    if(e_keyCode === 39){
        direction = 'right'; 
        drawBoy(direction);
        return;
    }
    if(e_keyCode === 40){
        direction = 'down';
        drawBoy(direction);
        return;
    }
}

// document.onkeydown = keyEvents;
kd.RIGHT.down(function (e) {
    keyEvents(e);
});
kd.LEFT.down(function (e) {
    keyEvents(e);
});
kd.UP.down(function (e) {
    keyEvents(e);
});
kd.DOWN.down(function (e) {
    keyEvents(e);
});
kd.SPACE.down(function (e) {
    keyEvents(e);
});   

// This update loop is the heartbeat of Keydrown
kd.run(function () {
    kd.tick();
});

function keyEvents(e) {
    var repeat = e.repeat;
    if(repeat){
        if(!time1){
            time1 = true;
            setTimeout(function(){
                controllers(e.keyCode);
                time1 = false;
            }, crushTime);
        }
    } else {
        if(!time2){
            time2 = true;
            setTimeout(function(){
                controllers(e.keyCode);
                time2 = false;
            }, normalTime);
        }
    }
};

function checkCrush(qx,qy){
    var boyX = Math.floor((qx) / BRICK_W);
    var boyY = Math.floor((qy) / BRICK_H);
    //console.log(boyX,boyY);

    if(walls[boyY][boyX] === 4){
        walls = walls1;
        return;
    }

    if(walls[boyY][boyX] === 1){
        //console.log('Crush');
        crush_sound.play();
        crush = true;
        return true;
    } else {
        //console.log('flase');
        crush = false;
        return false;
    }
}

function checkWin(qx,qy){
    var boyX = Math.floor((qx) / BRICK_W);
    var boyY = Math.floor((qy) / BRICK_H);
    if(walls[boyY][boyX] === 3){
        return true;
    } else {
        return false;
    }
}

