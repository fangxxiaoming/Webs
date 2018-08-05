var momObj=function () {
    this.x;
    this.y;
    this.angle=0;
    this.bigEye=new Image();
    this.bigBody=new  Image();
    this.bigTail=new Image();
}
momObj.prototype.init=function () {
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.bigEye.src='./src/bigEye0.png';
    this.bigBody.src='./src/bigSwim0.png';
    this.bigTail.src='./src/bigTail0.png';
}
momObj.prototype.draw=function () {
    //lerp是封装好的运动趋近函数
    this.x=lerpDistance(mx,this.x,0.97);
    this.y=lerpDistance(my,this.y,0.97);
    //delta angle
    //Math.atan2(y,x)
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    //鼠标和大鱼之间的角度差
    var beta=Math.atan2(deltaY,deltaX);
    //lerp angle
    this.angle=lerpAngle(beta,this.angle,0.6);
    ctx1.save();//用save和restore设置范围，其间的属性只给大鱼
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width/2,-this.bigEye.height/2);
    ctx1.drawImage(this.bigBody,-this.bigBody.width/2,-this.bigBody.height/2);
    ctx1.drawImage(this.bigTail,-this.bigTail.width/2+30,-this.bigTail.height/2);
    ctx1.restore();
}