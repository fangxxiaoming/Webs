var fruitObj=function () {
    this.alive=[];//bool
    this.orange=new Image()
    this.blue=new Image()
    this.x=[];
    this.y=[];
    ////果实上浮，定义图片长度
    this.l=[];
    this.speed=[];
    this.fruitType=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function () {
    //怎么判断果实出生，状态
    for (var i = 0; i < this.num; i++) {
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i]=0;
    this.speed[i]=Math.random()*0.017+0.003;
    this.fruitType[i]='';
    //果实出生
    // this.born(i)
}
    this.orange.src = './src/fruit.png';
    this.blue.src = './src/blue.png';
}
fruitObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
    if(this.fruitType[i]=='blue'){
        var pic=this.blue;
    }
        else{
        var pic=this.orange
    }
            //    draw
    //    find a ane,grow,fly up
        if(this.l[i]<=14){
            this.l[i]+=this.speed[i]*daltaTime;
        }
        else{
            this.y[i]-=this.speed[i]*7*daltaTime
        }
        ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5, this.y[i]-this.l[i]*0.5,this.l[i],this.l[i])
        if(this.y[i]<10){
            this.alive[i]=false;
        }
        }
    }
}
//果实状态，允许15个
fruitObj.prototype.update=function () {
    var num=0;
    for(var i=0;i<num;i++){
        if(this.alive[i]){
            num++
        }
    }
}
fruitObj.prototype.born=function (i) {
//    找到坐标
//    问题：不用取整，无法获得ID
    var aneId=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneId];
    this.y[i]=canHeight-ane.y[aneId]
    this.l[i]=0;
    this.alive[i]=true;
    var ran=Math.random()
    if(ran<0.2){
        this.fruitType[i]="blue"
    }
    else{
        this.fruitType[i]='orange'
    }

}
fruitObj.prototype.dead=function (i) {
    this.alive[i]=false;
}
//检测果实数量
function fruitMonitor() {
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            num++

        }
    }
    //如果下面的判断放到里面初始化会生成30个果实
    if(num<15){
        //    send fruit
        sendFruit()
        return
    }
}
function sendFruit() {
    for(i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i)
            return
        }
    }
}