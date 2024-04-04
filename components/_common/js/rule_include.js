var gRootURL = {
	root : '/components/',
}
var gRootIA = {
	root: '../../../pub_guide/project_list/',
}
var gRoot_com = {
	root : '/components/_common/',
}
var _root = '../';
var gURL = {	
	root : _root,
	parent : _root+'components/',
	ia : _root+'ia/',
	target : '',
}

var include = {
	meta : function(){
		document.write('<title>dndmobile - 퍼블리싱 가이드</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<link rel="shortcut icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
		document.write('<link rel="icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
	},
	head : function(){
		document.write('<!-- Front -->');
		document.write('<link href="'+gRootURL.root+'css/style.css" rel="stylesheet">');
		document.write('<link href="'+gRootURL.root+'css/import.css" rel="stylesheet" />');
		document.write('<link href="'+gRootIA.root+'assets/css/common.css" rel="stylesheet" />');
		document.write('<link href="'+gRoot_com.root+'css/layout.css" rel="stylesheet" />');
		document.write('<link href="'+gRoot_com.root+'css/convention.css" rel="stylesheet" />');
		document.write('<link href="'+gRoot_com.root+'css/stackoverflow-light.css" rel="stylesheet" />');
		
		document.write('<script src="'+gRootURL.root+'js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script src="'+gRoot_com.root+'js/rule_common.js"></script>');
		
		document.write('<script src="'+gRoot_com.root+'js/addon/jquery.mCustomScrollbar.min.js"></script>');
		document.write('<script src="'+gRoot_com.root+'js/addon/highlight.min.js"></script>');
		
		document.write('<!-- Guide Conventions-->');
		//document.write('<link href="'+gURL.parent+'assets/css/import.css" rel="stylesheet">');
								
	},
	header : function(){
		document.write('	<header class="g-header g-in-sec">');
		document.write('		<h1 class="g-logo"><a href="/">퍼블리싱가이드</a></h1>');
		document.write('		<button type="button" class="g-btn-aside"><span>Menu</span></button>');
		document.write('		<nav class="g-gnb">');
		document.write('			<ul>');
		document.write('				<li><a href="'+gRootIA.root+'./ia/index.html" data-aside="g-snbMenu4" data-url="index.html">INDEX</a></li>');
		document.write('			</ul>');
		document.write('		</nav>');
		document.write('	</header>');
	},
	aside : {
		init : function(){
			var baseURL = '';
			document.write('	<aside id="g-aside">');
			document.write('		<div class="g-js-scroll g-aside-scroll">');
			document.write('			<nav class="g-snb">');
			document.write('				<!-- Convention -->');
			document.write('				<ul class="g-depth1 g-snbMenu1 ">');
			document.write('					<li class="g-node1"><a href="'+baseURL+'rule.html">기본환경</a></li>');
			document.write('					<li class="g-node1"><a href="'+baseURL+'rule_standard.html">표준규칙</a></li>');
			//document.write('					<li class="g-node1"><a href="'+baseURL+'rule_code.html">코드규칙</a></li>');
			document.write('					<li class="g-node1"><a href="'+baseURL+'rule_name.html">네임규칙</a></li>');
			document.write('					<li class="g-node1"><a href="'+baseURL+'rule_code.html">설계규칙</a></li>');
			//document.write('					<li class="g-node1"><a href="'+baseURL+'rule_title.html">서식명칭</a></li>');
			document.write('				</ul>');
			document.write('				<!-- //Convention -->');
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},
	},
	footer : function(){
		document.write('	<a href="#g-wrap" class="g-top" data-role="spy-scroll">TOP</a>');
		document.write('	<div class="g-mask"></div>');
	},
}