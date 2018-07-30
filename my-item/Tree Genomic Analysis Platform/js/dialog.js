/**
 * Created by ASUS on 2018/5/25.
 */
/**
 * Created by ASUS on 2018/5/23.
 */
define(function(){

    function Dialog(obj){
        var _this = this;
        this.$dialogMask = $('<div class="dialog-mask"></div>');
        this.$dialogIntroduce=$('<div class="dialog-introduce"></div>');
        this.$dialogIntTop=$('<div class="dialog-introduce1">'+obj.introduceT+'</div>');
        this.$dialogIntBottom=$('<div class="dialog-introduce2">'+obj.introduceB+'</div>');
        this.$dialogBox = $('<div class="dialog-box"></div>');
        this.$dialogTitle=$('<div class="dialog-title">' +
            obj.title+'</div>');
        this.$dialogClose=$('<div class="dialog-close"><img src="../images/dialog/close.png" alt=""></div>').on('click',function () {
            _this.$dialogMask.remove();
        });
        this.$dialogUsername=$('<div class="dialog-username"><span>'+obj.input+'</span><input type="text"></div>');
        this.$dialogPassword=$('<div class="dialog-password"><span>'+obj.password+'</span><input type="password"></div>');
        this.$forget=$('<div class="dialog-forget"><a href="#">'+obj.forget+'</a></div>')
        this.$dialogSubmit=$('<div class="dialog-submit"><input type="submit" value='+obj.title+'></div>')
            .on('click',function(){
            _this.$dialogMask.remove();
    })
    }
    Dialog.prototype.open = function(){
        this.$dialogMask.append(this.$dialogIntroduce).append(this.$dialogBox);
        this.$dialogIntroduce.append(this.$dialogIntTop).append(this.$dialogIntBottom);
        this.$dialogBox.append(this.$dialogTitle).append(this.$dialogUsername).append(this.$dialogUsername)
            .append(this.$dialogPassword).append(this.$forget).append(this.$dialogSubmit).append(this.$dialogClose);
        $('body').append(this.$dialogMask);
    };
    Dialog.prototype.close = function(){
        this.$dialogMask.remove();
    };
    return Dialog;
});
