var gRootURL = {
	root : '/project/',
}
var gBaseURL = {
	_common : gRootURL.root+'assets/',
	target : '',
}
var _root = '../';
var gComponents = {
	root : '../../components/'
}

var include = {
	meta : function(){
		document.write('<title>kiup_banking - 퍼블리싱</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<link rel="shortcut icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
		document.write('<link rel="icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
	},
	head : function(){		
		document.write('<link href="'+gRootURL.root+'assets/css/common.css" rel="stylesheet" />');
		document.write('<link href="'+gRootURL.root+'assets/css/reset.css" rel="stylesheet" />');
		document.write('<script src="'+gRootURL.root+'assets/js/libs/jquery.min.js"></script>');
		document.write('<script src="'+gRootURL.root+'assets/js/ui/ui.common.js"></script>');
		document.write('<script src="'+gComponents.root+'js/pub/pub_ui.js"></script>');
		document.write('<script src="'+gComponents.root+'js/pub/pub_utility.js"></script>');
		document.write('<script src="'+gComponents.root+'js/pub/pub_device.js"></script>');
		document.write('<script src="'+gComponents.root+'js/libs/swiper-bundle.min.js"></script>');
		document.write('<script src="'+gComponents.root+'js/libs/chart.min.js"></script>');
		document.write('<script src="'+gComponents.root+'js/libs/moment.js"></script>');
	},
	quick : {
		init : function(){
			// this.opneHTML();
			// this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<div id="g-quick">');
			document.write('		<div class="g-js-scroll g-quick-scroll">');
			document.write('			<nav class="g-qnb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</div>');
		},
	},
	footer : function(){
		document.write('	<a href="#g-wrapper" class="g-top" data-role="spy-scroll">TOP</a>');
		document.write('	<div class="g-mask"></div>');
	},
	includeHtml : function () {
		$('.header_include').load('layout/main_header.html'); //header
		$('.navbar_include').load('layout/navbar.html'); //navbar
		$('.sidebar_include').load('layout/sidebar.html'); //sidebar
		$('.footer_include').load('layout/footer_menu.html'); //fixed menu
	}
}