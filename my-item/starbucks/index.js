var oLeft=document.getElementsByClassName('iconleft')[0];
var oRight=document.getElementsByClassName('iconright')[0];
var oScroll=document.getElementsByClassName('scroll')[0];
var oWraper=oScroll.getElementsByClassName('wraper')[0];
var num=0;
var iNow=0;
var flag=true;
oLeft.onclick=function () {
    // num++;

    if(oWraper.style.marginLeft==-30+'%'){
        var left=0+'%';
        oWraper.style.marginLeft=left;
        // oLeft.style.display='none';
        oLeft.style.display='none';
    }
    console.log(num);
};
oRight.onclick=function () {
    // iNow++
    // var right=200*iNow+'px';
    oWraper.style.marginLeft=-30+'%';
    if( oWraper.style.marginLeft==-30+'%'){
        // oRight.style.display='none';
        oLeft.style.display='block';
    }
};
