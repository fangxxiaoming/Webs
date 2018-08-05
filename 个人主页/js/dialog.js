/**
 * Created by ASUS on 2018/6/11.
 */
define(function () {
    function Dialog() {
       this.$dialogMask=$('<div class="dialog-mask"></div>');
        this.$dialogContent=$('<div class="dialog-content"></div>');
        this.$dialogList=$('<ul class="dialog-list"></ul>');
    }
    Dialog.prototype.init=function (obj) {
        for(var i=0;i<obj.liContent.length;i++){
            $(this.$dialogList).append($('<li>'+obj.liContent[i]+'</li>'))

        }
        $(this.$dialogMask).append(this.$dialogContent).append(this.$dialogList);
        $('body').append( this.$dialogMask);
    }
    return Dialog;
});