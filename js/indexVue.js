//默认加载第一个页面
herfContent('#indexMain', 'pages/home/indexContent.html');
var indexNav = new Vue({
	el: '#indexNav',
	data: indeNavdata,
	methods: {
		oneClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
			herfContent('#indexMain', 'pages/home/indexContent.html');

		},
		twooneClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
			herfContent('#indexMain', 'pages/frontEnd/frontEnd.html');
		},
		twotwoClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
//			herfContent('#indexMain', 'pages/frontEnd/frontEnd.html');
		},
		twothreeClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
//			herfContent('#indexMain', 'pages/frontEnd/frontEnd.html');
		},
		twofourClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
//			herfContent('#indexMain', 'pages/frontEnd/frontEnd.html');
		},
		ThtreeClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
			herfContent('#indexMain', 'pages/insert/insert.html');
		},
		fiveClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
//			herfContent('#indexMain', 'pages/home/indexContent.html');
		},
		sixClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
//			herfContent('#indexMain', 'pages/home/indexContent.html');
		},
		sevenClk: function() {
			//页面点击跳转
			$('#indexMain').empty();
//			herfContent('#indexMain', 'pages/home/indexContent.html');
		}
	}
})