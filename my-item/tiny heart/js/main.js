var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var canWidth;
var canHeight;
var bgPic=new Image();
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
// console.log(aneObj())
document.body.load=game;
function game() {
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop()

}
game()
function init() {
//    获得canvas content
     can1=document.getElementById('canvas1');
    can2=document.getElementById('canvas2');
     ctx1=can1.getContext('2d');
     ctx2=can2.getContext('2d');
     can1.addEventListener('mousemove',onMouseMove,false);
    bgPic.src='./src/background.jpg';
    canWidth=can1.width;
    canHeight=can1.height;
//    实例化对象
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    mom=new momObj();
    mom.init()
    mx=canWidth*0.5;
    my=canHeight*0.5;
    baby=new babyObj()
    baby.init()
}
//循环位移
function gameloop() {
    //比setInterval更好
    requestAnimationFrame(gameloop);
    //问题，打开网页图片没有加载，在background.js里不能实现
    drawBg();
    //问题，果实上浮出现线条
    // ctx2.drawImage(fruit.orange,-20,-20)
    var now=Date.now();
    daltaTime=now-lastTime;
    lastTime=now;
    //问题换个窗口，果实由于帧的原因一直变大
    if(daltaTime>40){
        daltaTime=40;
    }
    ane.draw();
    fruit.draw();
    fruitMonitor();
    //把画布一的每一帧内容先清掉
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    colision()
    baby.draw()
}
function onMouseMove(e) {
    if(e.offsetX||e.layerX){
        mx=e.offsetX==undefined?e.layerX:e.offsetX;
        my=e.offsetY==undefined?e.layerY:e.offsetY;
    }
}
