var main=document.getElementById('main');
//   创建div
function creatDiv(className) {
    var div=document.createElement('div');
//        div.className=className;
    if(className){ // 判断有没有传递class值
        // 如果有值，为div添加class属性
        div.setAttribute('class',className);
    }
    return div
}
//创建一行
function creatRow() {
    var row=creatDiv('row');
    //    获取随机数，为了让每行有个方块为黑色
    var index=Math.floor(Math.random()*4);
//    循环创建4个小div
    for(var i=0;i<4;i++){
        if(i==index){
            row.appendChild(creatDiv('black'));
        }
        else{
            //如果本次循环数和随机数不相等，此div为白色
            row.appendChild(creatDiv());
        }
    }
//        main.appendChild('row');
    main.insertBefore(row,main.firstChild);
}

var x=2;

function move() {
    var top=parseInt(getComputedStyle(main).top);
    top+=x;
    main.style.top = top+'px';
    if(top>0){
        creatRow();
        main.style.top = '-100px';// 将top 置为-100,隐藏新的顶层一行
        if(main.lastChild.p == undefined){
            clearInterval(c);
            sta = false;
            alert('game over!!!');
        }
        if(main.children.length>5) {  //当大于5行时
            //删除最后一行
            main.removeChild(main.lastChild);
        }
    }

}
var sta = true;
function init(){
    // 循环四次，称为四行
    for(var i=0;i<4;i++){
        creatRow();
    }
}
init();
main.onclick = function(ev){
    if(sta == false){
        alert('game over!!!');
    }
    else if(ev.target.className == ''){
        clearInterval(c);
        sta = false;
        alert('game over!!!');
    }
    else{
        ev.target.className = '';
        ev.target.parentNode.p = true;
        var sc = document.getElementById('sc');
        var fs = parseInt(sc.innerHTML);
        sc.innerHTML =  fs+1;
        if(fs%5==0){
            x +=1;
        }
    }
}

c = setInterval(move,40);
// 每隔一段时间就调用move函数