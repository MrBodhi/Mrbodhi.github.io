//页面引入css函数
function loadLInk(herf) {
	document.write('<link rel="stylesheet" href='+herf+' />');
}
//开始引入
loadLInk("public/layui/css/layui.css");
loadLInk("public/css/activePlblic.css");
loadLInk("css/index.css");

//页面引入js函数
function loadScript(urls) {
	document.write('<script src= '+urls+' type="text/javascript" charset="utf-8"></script>');
}
//开始引入
loadScript("public/js/jquery-2.1.1.min.js");
loadScript("public/js/common.js");
loadScript("public/vue/vue.2.5.17.js");
loadScript("public/vue/vue-resource.min.js");
loadScript("public/layui/layui.js");
loadScript("data/index_data.js");


//页面引入结束

