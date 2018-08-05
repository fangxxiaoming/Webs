/**
 * Created by ASUS on 2018/5/20.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12'
    }
});
require(['jquery','dialog','dialog1'],function($,Dialog,Dialog1){
    $(' .login').on('click',function(){
        var dialog1 = new Dialog({
            input:'username:',
            password:'password:',
            title:'login',
            forget:'Forget UserName/Password?',
            introduceT: 'Tree Genomic Analysis Platform',
            introduceB:'Take the advantage of next and third generation sequencing, more and more woody genomes have been sequenced, including Populus and Betula. However, due to lack of bioinformatics background, the utilization of is not very successful. Under such circumstance, we collected the data sets of the published tree genomes and developed an easy-to-use platform for biologists without bioinformatics skills or computing resources.'
        });
        dialog1.open();

    });
    $('.register').on('click',function(){
        var dialog2 = new Dialog1({
            input:'username:',
            password:'password:',
            title:'Register',
            email:'Email:',
            content:'*E-mail is the only channel our site can use to communicate with you.please ensure that your e-mail address is correct!',
            introduceT: 'Tree Genomic Analysis Platform',
            introduceB:'Take the advantage of next and third generation sequencing, more and more woody genomes have been sequenced, including Populus and Betula. However, due to lack of bioinformatics background, the utilization of is not very successful. Under such circumstance, we collected the data sets of the published tree genomes and developed an easy-to-use platform for biologists without bioinformatics skills or computing resources.'
        });
       dialog2.open()
    });
});