/**
 * ITCAST WEB
 * Created by zhousg on 2017/2/16.
 */
/*tap事件*/
/*
* 1.给谁绑定
* 2.触发之后做什么事情
* */
var tap = function(dom,callback){
    /*
    * tap 封装原理
    * 1.不能滑动过
    * 2.响应要比click快  一般150ms
    * */

    if(!dom || typeof dom != 'object') return false;

    var isMove = false;
    var startTime = 0;
    dom.addEventListener('touchstart',function(e){
        /*记录当前时间*/
        startTime = Date.now();
    });
    dom.addEventListener('touchmove',function(e){
        isMove = true;
    });
    dom.addEventListener('touchend',function(e){
        /*响应时间*/
        var tapTime = Date.now()-startTime;
        console.log(tapTime);
        if(!isMove && tapTime < 150){
            /*满足了tap的条件*/
            callback && callback(e);
        }

        /*重置*/
        startTime = 0;
        isMove = false;
    });

}
