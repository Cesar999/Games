const walls0 = [
    [2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 8, 1, 1, 1, 1, 1, 0, 0, 8, 0, 0, 1, 1, 1, 1, 1, 8, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 9, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 9, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 9, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 9, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 8, 0, 1],
    [0, 0, 9, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 8, 1, 9, 1, 1, 1],
    [1, 8, 1, 1, 0, 0, 0, 9, 1, 1, 8, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1],
    [1, 0, 1, 0, 1, 1, 9, 1, 1, 1, 8, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 0, 1, 0, 3]
];

const walls1 = [
    [2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 8, 1, 1, 1, 1, 1, 0, 0, 8, 0, 0, 1, 1, 1, 1, 1, 8, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 9, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 9, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 9, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 9, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 8, 0, 1],
    [0, 0, 9, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 8, 1, 9, 1, 1, 1],
    [1, 8, 1, 1, 0, 0, 0, 9, 1, 1, 8, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
    [1, 0, 1, 0, 1, 1, 9, 1, 1, 1, 8, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 0, 1, 0, 3]
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

const offset = 30;
const step = 10;

let time1 = false;
let crushTime = 50;

let time2 = false;
let normalTime = 50;

let direction = 'down';
let last_dir = direction;
let old_key = false;

let flag_walls1 = false;

let sx=118, sy=10, sWidth=104, sHeight=155-offset, dx=0, dy=-10, dWidth=30, dHeight=40;

//--------
// let cx = 80; 
// let cy = 80;

let b1x = 200;
let b1y = 200;

let b2x = 400;
let b2y = 400;

let b3x = 200;
let b3y = 200;


const checkImage = path =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve({img, status: 'ok'});
        img.onerror = () => resolve({img, status: 'error'});
        img.src = path;
});

let arr = [];

window.onload = function(){
    //------------------
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    //canvas.addEventListener('mousemove', updateMousePos);
    Promise.all([checkImage('./boy1.png'),checkImage('./trees.png'),checkImage('./grass.png')])
    .then(temp => {
        arr = temp;
        updateAll('down');
        setInterval(updateBoth,1000/10);
    });

}

function drawBricks(){
    for(let i=0; i<BRICK_ROWS; i++){
        for(let j=0; j<BRICK_COLS; j++){
            if(walls[i][j] === 1){
                //colorRect(BRICK_W*j,BRICK_H*i,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'transparent');
            }
            if(walls[i][j] === 2){
                //colorRect(BRICK_W*j,BRICK_H*i,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'yellow');
                canvasContext.fillStyle = 'rgba(255, 255, 0, 0.301)';
                canvasContext.beginPath();
                canvasContext.arc(BRICK_W*j+20, BRICK_H*i+20, 20, 0, Math.PI*2, true);
                canvasContext.fill();
            }
            if(walls[i][j] === 3){
                //colorRect(BRICK_W*j,BRICK_H*i,BRICK_W-BRICK_GAP,BRICK_H-BRICK_GAP, 'red');
                canvasContext.fillStyle = 'rgba(255, 0, 0, 0.349)';
                canvasContext.beginPath();
                canvasContext.arc(BRICK_W*j+20, BRICK_H*i+20, 20, 0, Math.PI*2, true);
                canvasContext.fill();
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
    updateAll('down');
    colorText(`${printX},${printY}`, mouseX -10, mouseY-10, 'yellow');
}

function updateAll(direction){
        if(arr[2]['status']==='ok'){
            drawGrass(arr[2].img);
        }
        if(arr[1]['status']==='ok'){
            drawGround(arr[1].img);
        }
        drawBricks();
        checkMove(direction);

        if(arr[1]['status']==='ok'){
            drawTree(arr[1].img,true);
        }
        if(arr[0]['status']==='ok'){
            drawBoy(arr[0].img);
            [b1x,b1y]=checkMoveCircle(b1x,b1y);
            drawCircle(b1x,b1y,'black');

            [b2x,b2y]=checkMoveCircle(b2x,b2y);
            drawCircle(b2x,b2y,'white');
        }
        if(arr[1]['status']==='ok'){
            drawTree(arr[1].img,false);
        }
};


function drawBoy(image1){
    canvasContext.drawImage(image1, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
}

function drawGrass(image1){
    canvasContext.drawImage(image1, 0, 0, 800, 600);
}

function checkMove(direction){
    crush = false;
    if(direction==='left'){
        sy=339+offset; // left
        //left-up     //left-down    
        if(dx>0&&!(checkCrush(dx-step+step,dy+step+step)||checkCrush(dx-step+step,dy+dHeight-step-step))){
            dx-=step;
        } 
    } else if(direction==='up'){
        sy=169.5+offset; // up
        //up-left      //up-right
        if(dy>0&&!(checkCrush(dx+step,dy-step+step+step)||checkCrush(dx+dWidth-step,dy-step+step+step))){
            dy-=step;
        } 
    } else if(direction==='right'){
        sy=508.5+offset; // right
        //right-up   right-down
        if(dx<canvas.width-dWidth&&!(checkCrush(dx+dWidth,dy+step+step)||checkCrush(dx+dWidth,dy+dHeight-step-step))){
            dx+=step;
        } 
    } else if(direction==='down'){
        sy=0+offset; //down
        //down-left    down-right
        if(dy<canvas.height-dHeight&&!(checkCrush(dx+step,dy+dHeight-step)||checkCrush(dx+dWidth-step,dy+dHeight-step))){
            dy+=step;
        } 
    }
    
    
    if(direction){
        if(sx>=339){
            sx=0;
        } else {
            if(crush){
                crushTime=150;
                normalTime = 150;
                crush_sound.play();
            } else{
                crushTime=50;
                normalTime = 50;
            }
            sx+=113;
        }
    }
}

function controllers(e_keyCode){
    if(e_keyCode === 32){
        if(checkWin(dx+step*2,dy+step*2)){
            win_sound.play();
            alert('You Have Won!');
        }
    }
    if(e_keyCode === 37){
        direction = 'left';
        updateAll(direction);
        return;
    }
    if(e_keyCode === 38){
        direction = 'up';
        updateAll(direction);
        return;
    }
    if(e_keyCode === 39){
        direction = 'right'; 
        updateAll(direction);
        return;
    }
    if(e_keyCode === 40){
        direction = 'down';
        updateAll(direction);
        return;
    }
}

KeyboardController({
    37: function() { keyEvents({repeat: false, keyCode: 37}) },
    38: function() { keyEvents({repeat: false, keyCode: 38}); },
    39: function() { keyEvents({repeat: false, keyCode: 39}); },
    40: function() { keyEvents({repeat: false, keyCode: 40}); },
    32: function() { keyEvents({repeat: false, keyCode: 32}); }
}, 40);

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

    if(walls[boyY][boyX] === 4){
        walls = walls1;
        flag_walls1 = true;
        crush_sound.play();
        crush = true;
        return true;
    }

    if(walls[boyY][boyX] === 5){
        walls = walls1;
        return;
    }

    if(walls[boyY][boyX] === 1){
        crush_sound.play();
        crush = true;
        return true;
    } else {
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

//-------
// Keyboard input with customisable repeat (set to 0 for no key repeat)
function KeyboardController(keys, repeat) {
    // Lookup of key codes to timer ID, or null for no repeat
    var timers= {};

    // When key is pressed and we don't already think it's pressed, call the
    // key action callback and set a timer to generate another one after a delay
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};

function drawTree(image2,flag){
        for(let i=0; i<BRICK_ROWS; i++){
            for(let j=0; j<BRICK_COLS; j++){
                if(dy>=BRICK_H*i&&flag){
                    if(walls[i][j] === 1){
                        canvasContext.drawImage(image2, 75, 102, 52, 60, BRICK_W*j,BRICK_H*i-17,BRICK_W, BRICK_H+10);
                    }
                    if(walls[i][j] === 4 && flag_walls1){
                        canvasContext.drawImage(image2, 2, 160, 30, 30, BRICK_W*j,BRICK_H*i-17,BRICK_W, BRICK_H+10);
                    }
                }
                if(dy<BRICK_H*i&&!flag){
                    if(walls[i][j] === 1){
                        canvasContext.drawImage(image2, 75, 102, 52, 60, BRICK_W*j,BRICK_H*i-17,BRICK_W, BRICK_H+10);
                    }
                    if(walls[i][j] === 4 && flag_walls1){
                        canvasContext.drawImage(image2, 2, 160, 30, 30, BRICK_W*j,BRICK_H*i-17,BRICK_W, BRICK_H+10);
                    }
                }
            }
        }
}

function drawGround(image2){
    for(let i=0; i<BRICK_ROWS; i++){
        for(let j=0; j<BRICK_COLS; j++){
            //green
            //canvasContext.drawImage(image2, 170, 180, 20, 20, BRICK_W*j,BRICK_H*i,BRICK_W+25, BRICK_H+26);
            if(walls[i][j] === 8){
                canvasContext.drawImage(image2, 178, 145, 15, 14, BRICK_W*j,BRICK_H*i,BRICK_W-10, BRICK_H-10);
            }
            if(walls[i][j] === 9){
                canvasContext.drawImage(image2, 240, 175, 20, 20, BRICK_W*j,BRICK_H*i,BRICK_W, BRICK_H);
            }
        }
    }
}

//------------------
function drawCircle(cx,cy, color){
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(cx, cy, 20, 0, Math.PI*2, true);
    canvasContext.fill();
}

function checkMoveCircle(cx, cy){
    let temp = Math.floor(Math.random()*8);
    let optx, opty;
    if(dx>cx){
        optx = 'right';
    } else{
        optx = 'left';
    } 
    
    if(dy>cy){
        opty = 'down';
    } else{
        opty = 'up';
    }

    const arr = ['left', 'top', 'right', 'down',optx,optx,opty,opty];

    if(arr[temp]==='left'){   
        if(cx>0&&!(checkCrushBall(cx-step,cy))){
           cx-=step;
        } else {
            //cx+=10;
        }
    } 

    if(arr[temp]==='up'){
        if(cy>0&&!(checkCrushBall(cx,cy-step))){
            cy-=step;
        } else {
            //cy+=10;
        }
    } 
    
    if(arr[temp]==='right'){
        if(cx<canvas.width-20&&!(checkCrushBall(cx+step,cy))){
            cx+=step;
        } else {
            //cx-=10;
        }
    } 
    
    if(arr[temp]==='down'){
        if(cy<canvas.height-20&&!(checkCrushBall(cx,cy+step))){
            cy+=step;
        } else {
            //cx-=10;
        }
    }

    return [cx,cy]

}

function checkCrushBall(qx,qy){
    var boyX = Math.floor((qx) / BRICK_W);
    var boyY = Math.floor((qy) / BRICK_H);

    var realBoyX = Math.floor((dx) / BRICK_W);
    var realBoyY = Math.floor((dy) / BRICK_H);
    if(realBoyX === boyX && realBoyY === boyY){
        alert('You Lost');
        location.reload();
    }

    if(walls[boyY][boyX] === 4){
        walls = walls1;
        flag_walls1 = true;
        return true;
    }

    if(walls[boyY][boyX] === 5){
        walls = walls1;
        return;
    }

    if(walls[boyY][boyX] === 1){
        return true;
    } else {
        return false;
    }
}

function updateBoth(){
    updateAll();
}