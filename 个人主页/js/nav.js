/**
 * Created by ASUS on 2018/6/11.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12'
    }
});
require(['jquery','dialog'],function ($,Dialog) {
    $('.icon-daohang').on('click',function () {
        $(this).hide();
        $('.close').show();
       var Dialog1=new Dialog();
       Dialog1.init({
           liContent:['&nbsp;首页&nbsp','&nbsp关于我&nbsp','&nbsp技能掌握&nbsp','&nbsp我的经历&nbsp','&nbsp我的作品&nbsp','&nbsp联系我&nbsp','&nbsp我的主页&nbsp']
       })
        $('#nav').hide()
    })
    $('.close').on('click',function () {
        $('.dialog-mask').hide();
        $('.icon-daohang').show();
        $('#nav').show();
        $('.close').hide();
    });
    $('body').on('click','.dialog-list li',function () {
        $('.item').each(function (index) {
            $('body ,.item').eq(($(this).index())+1).css('top',$(this).index()*100+'%');
        console.log($(this).index())
        })
        $('body ,.item').eq(($(this).index())+1).css('top',0);
       // console.log($('.item').attr('id'))
        console.log($(this).index())
    })
    var $str='Hello, Im Fang';
    var $str1='Life doesn’t get easier, you just get stronger';
    var $arr=$str.split('');
    var $arr1=$str1.split('');
    var str2='';
    var str3='';
    var $num=0;
    var $num1=0;
    var $timer=null;
    var $timer1=null;
    $timer=setInterval(function () {
        if($arr[$num]==undefined){
            clearInterval($timer)
        }
        else{
            str2+=$arr[$num];
            $('.showme .append').text(str2);
            $num++;
        }

    },250);
    $timer1=setInterval(function () {
        if($arr1[$num1]==undefined){
            clearInterval($timer1)
        }
        else{
            str3+=$arr1[$num1];
            $('.showme strong').text(str3);
            $num1++;
        }

    },110);

})