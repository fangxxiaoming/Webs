/**
 * Created by ASUS on 2018/6/11.
 */
var oNav=document.getElementById('nav');
var aNav=oNav.getElementsByTagName("li");
var oContainer=document.getElementById('container');
var oItem=oContainer.getElementsByClassName('item');
var oRotate=document.getElementsByClassName('rotate')[0];
var oShow=document.getElementsByClassName('showme')[0];
var oSlide=document.getElementsByClassName('slide');
var oWraper=document.querySelector('#item4 .wraper')
var oL=document.getElementsByClassName('loading')[0];
var num=0
// setInterval(function () {
//     oL.style.display='none';
   
// },2000);
document.onreadystatechange=function () {
        if(document.readyState=='complete'){
            oL.style.display='none';
        }
    }
    var iNum=0;
for(var i=0;i<aNav.length;i++){
    aNav[i].index=i;
    aNav[i].onclick=function () {
        iNum=aNav[i].index
        for (var j = 0; j < aNav.length; j++) {
            aNav[j].className = '';
            // oItem[j].className='item';
            // oItem[j].style.top = (j * 100) + '%';
        }
      

        this.className = 'selected';
        // oItem[this.index].style.top = 0;
        // oItem[this.index].style.zIndex = 1;
        oContainer.style.top=-(this.index*100)+'%';
       
    }
}
var scrollFunc = function (e) {
    var direct = 0;
    
    e = e || window.event;
   
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta<0) { //当滑轮向上滚动时
            iNum++
            oContainer.style.top=((iNum)*100)+'%';
            console.log(iNum)
        }
        if (e.wheelDelta >0) { //当滑轮向下滚动时
            // iNum=iNum+1
            iNum--
            oContainer.style.top=((iNum+1)*100)+'%';
            console.log(iNum)
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
           
        }
        if (e.detail< 0) { //当滑轮向下滚动时
           
        }
    }

}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc; 


// if(oItem[3].style.top==0+'px'){
//     oWraper.style.left=200+'px'
//     console.log(111)
// }

//     setInterval(function () {
//         // oRotate.style.display='none';
//         oShow.style.opacity=1;
//     },12000);
// setInterval(function () {
//     for(var i=0;i<oSlide.length;i++){
//         oSlide[i].style.opacity=0;
//     }
// oRotate.style.opacity=1;
//     oShow.style.opacity=0;
// },5500);
var sLeft=oItem[1].offsetWidth/4;
var sTop=oItem[1].offsetHeight/4;
// for(var i=0;i<4;i++){
//     for(var j=0;j<4;j++){
//         var odiv=document.createElement('div');
//         odiv.className='imgbox';
//         odiv.col=j;
//         odiv.row=i;
//         odiv.style.width=sLeft+'px';
//         odiv.style.height=sTop+'px';
//         odiv.style.background='url(img/item3.jpg)no-repeat';
//
//         oItem[0].appendChild(odiv);
//     }
// }
// var adiv=document.getElementsByClassName('imgbox');
// for(var i=0;i<16;i++){
//     var odiv=adiv[i] ;
//     var x=-sLeft*odiv.row;
//     var y=-sTop*odiv.col;
//
//     odiv.style.left=sLeft*odiv.row+'px';
//     odiv.style.top=sLeft*odiv.col+'px';
//     // odiv.style.background='url(img/item3.jpg)'+x+'px '+y+'px no-repeat';
//     odiv.style.backgroundPosition=x+'px '+y+'px';
//     odiv.style.opacity=1;
//     // odiv.style.zIndex=2;'
//     odiv.style.transitionDelay=(16-i)*100+'ms';
// }


//轮播图
// var oTab=document.getElementsByClassName('tab')[0];
// var oLi=oTab.getElementsByTagName('li');
// var oparent=document.getElementById('item5');
// var oCarsoul=oparent.getElementsByClassName('carsoul')[0];
// var iNow=0;
// var oCut=document.getElementsByClassName('cut')[0]
//     for(var i=0;i<oLi.length;i++){
//         oLi[i].index=i;
//         oLi[i].onclick=function () {
//             iNow=this.index;
//             for(var j=0;j<oLi.length;j++){
//                 oLi[j].className='';
//             }
//             this.className='selected';
//             oCarsoul.style.left=-this.index*600+'px';
//             console.log(oCarsoul.offsetLeft)
//         }
//     }
//     run()
//     function run() {
//         timer= setInterval(function () {
//             iNow++;
//             for(var i=0;i<oLi.length;i++){
//                 oLi[i].className='';
//             }
//             if(iNow==oLi.length){
//                 iNow=0;
//                 oCarsoul.style.left=0;
//             }
//             oLi[iNow].className='selected';
//             oCarsoul.style.left=-iNow*600+'px';
//         },1000);
//     }
//
//     oCut.onmouseover=function () {
//         clearInterval(timer)
//     }
//     oCut.onmouseout=function () {
//         run()
//     }
    //图片滑动
    // var oSlide=document.getElementsByClassName('slide');
    // var sX=oItem[0].offsetWidth;
    // var sY=oItem[0].offsetHeight;
    // for(var i=0;i<oSlide.length;i++){
    //     oSlide[i].style.backgroudPosition=sX+'px '+sY+'px'
    // }

var oCON=document.getElementsByClassName('con')[0];
var oBox=document.querySelector('.myitem');
var oTab=document.querySelectorAll('.tab1');
var oNext=document.querySelector('.next');
var oPre=document.querySelector('.pre');
var num=0;
for(var i=0;i<oTab.length;i++){
 oTab[i].index=i;
oPre.onclick=function(){
    num++
    oBox.style.left=-100*num+'%';

    oNext.style.display='block'
    console.log(111)
    if(num==3){
        oPre.style.display='none'
    }
   

}
oNext.onclick=function(){
    num--
    oBox.style.left=-100*num+'%';
    console.log(111)
    if(num==0){
        oNext.style.display='none'
    }
    oPre.style.display='block'
}
}
