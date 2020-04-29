/**
 * ITCAST WEB
 * Created by zhousg on 2017/2/16.
 */
/*tap�¼�*/
/*
* 1.��˭��
* 2.����֮����ʲô����
* */
var tap = function(dom,callback){
    /*
    * tap ��װԭ��
    * 1.���ܻ�����
    * 2.��ӦҪ��click��  һ��150ms
    * */

    if(!dom || typeof dom != 'object') return false;

    var isMove = false;
    var startTime = 0;
    dom.addEventListener('touchstart',function(e){
        /*��¼��ǰʱ��*/
        startTime = Date.now();
    });
    dom.addEventListener('touchmove',function(e){
        isMove = true;
    });
    dom.addEventListener('touchend',function(e){
        /*��Ӧʱ��*/
        var tapTime = Date.now()-startTime;
        console.log(tapTime);
        if(!isMove && tapTime < 150){
            /*������tap������*/
            callback && callback(e);
        }

        /*����*/
        startTime = 0;
        isMove = false;
    });

}
