var gRootURL = {
	root : '/project/',
}
var gBaseURL = {
	_common : gRootURL.root+'assets/',
	target : '',
}

var include = {
	meta : function(){
		document.write('<title>dndmobile - 퍼블리싱</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<link rel="shortcut icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
		document.write('<link rel="icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
	},
	head : function(){
		document.write('<!-- Front -->');
		document.write('<link href="'+gRootURL.root+'assets/css/style.css" rel="stylesheet" />');
		document.write('<link href="'+gRootURL.root+'assets/css/base.css" rel="stylesheet" />');
		document.write('<link href="'+gRootURL.root+'../components/css/style.css" rel="stylesheet" />');
		document.write('<script src="'+gRootURL.root+'assets/js/libs/jquery.min.js"></script>');
	
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
}