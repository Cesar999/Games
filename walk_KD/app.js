
/** @type {CanvasRenderingContext2D} */

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
const offset = 30;
let crush = false;
let time = false;
let crushTime = 50;
//alert('If you hit the space thats the key on the different place of your inner self');
const mySound = new Audio("zap.mp3");
const mySound2 = new Audio("win.mp3");

let sx=5, sy=10, sWidth=104, sHeight=155-offset, dx=0, dy=0, dWidth=70, dHeight=100; 
const step = 10;

const image = new Image();
drawBoy('down');

function drawBoy(direction){
    image.onload = function () {
        updateGameArea();
        crush = false;
        if(direction==='left'){
            sy=339+offset; // left
            if(dx>0&&!checkCrush(dx-10,dy)){
                dx-=step;
            } else {crush = true;}
        } else if(direction==='up'){
            sy=169.5+offset; // up
            if(dy>0&&!checkCrush(dx,dy-10)){
                dy-=step;
            } else {crush = true;}
        } else if(direction==='right'){
            sy=508.5+offset; // right
            if(dx<canvas.width-dWidth&&!checkCrush(dx+10,dy)){
                dx+=step;
            } else {crush = true;}
        } else if(direction==='down'){
            sy=0+offset; //down
            if(dy<canvas.height-dHeight&&!checkCrush(dx,dy+10)){
                dy+=step;
            } else {crush = true;}
        }
        
        ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        
        if(sx>=339){
            sx=0;
        } else {
            if(crush){
                crushTime=200;
                mySound.play();
            } else{
                crushTime=50;
            }
            sx+=113;
        }
    }
    image.src = "boy1.png";
}

document.onkeydown = keyEvents;

function keyEvents(e) {
    var repeat = e.repeat;
    if(repeat){
        if(!time){
            time = true;
            setTimeout(function(){
                doStaff(e.keyCode);
                time = false;
            }, crushTime);
        }
    } else {
        doStaff(e.keyCode);
    }
};

function doStaff(e_keyCode){
    if(e_keyCode === 32){
        if(dx>=500&&dx<=530&&dy===400){
            mySound2.play();
            alert('You Have Won!');
        }
    }
    if(e_keyCode === 37){
        drawBoy('left');
    }
    if(e_keyCode === 38){
        drawBoy('up');
    }
    if(e_keyCode === 39){
        drawBoy('right'); 
    }
    if(e_keyCode === 40){
        drawBoy('down');
    }
}

function updateGameArea(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'brown';
    ctx.fillRect(100, 100, 400, 100);
    ctx.fillRect(600, 100, 200, 100);


    ctx.fillRect(400, 300, 300, 100);
    ctx.fillRect(0, 300, 300, 100);
    ctx.fillRect(600, 400, 100, 100);


    ctx.fillRect(100, 500, 200, 100);
    ctx.fillRect(400, 500, 100, 100);

    ctx.fillStyle = 'blue';
    ctx.fillRect(500, 400, 100, 100);
}

function checkCrush(qx, qy){
    if(((qy-step>=100-dHeight)&&(qy<200))&&((qx>100-dWidth)&&qx<500||qx>600-dWidth)){
        return true;
    }
    if(((qy-step>=300-dHeight)&&(qy<400))&&(qx<700&&qx>400-dWidth||qx<300)){
        return true;
    }
    if(((qy-step>=400-dHeight)&&(qy<500))&&(qx<700&&qx>600-dWidth)){
        return true;
    }
    if(((qy-step>=500-dHeight)&&(qy<600))&&((qx<300&&qx>100-dWidth)||qx<500&&qx>400-dWidth)){
        return true;
    }
    return false;
}
