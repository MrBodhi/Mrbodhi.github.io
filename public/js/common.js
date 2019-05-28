//根据链接获取页面内容
function herfContent(id,herf){
	    $.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            //options.url = "http://cors.corsproxy.io/url=" + options.url;
        }
    });

    $.get(
        herf,
        function (response) {
            $(id).html(response);
        });
}
//清空盒子元素
function emptys(id){
	var emptysss="";
	$(id).html(emptysss);
}
