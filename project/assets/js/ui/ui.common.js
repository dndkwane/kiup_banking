/*-------------------------------------------------------------------
	분류순서
	- @Variables	: 전역변수
	- @Settings		: 기본설정
	- @Utility		: 유틸기능
	- @Layout		: 레이아웃
	- @Components	: 컴포넌트
	- @Content		: 컨텐츠
	- @Init			: 초기실행
-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
	@Variables
-------------------------------------------------------------------*/
//Elements
var	$window			= null,
	$document		= null,
	$html			= null,
	$body			= null,
	$html_body		= null,
	$wrapper		= null,
	$header			= null,
	$activeFocus	= null,
_;

//Devices
/* var isIOS			= browser.os == 'ios',
	isANDROID		= browser.os == 'android',
	isMOBILE		= browser.mobile == true,
	isPC			= browser.mobile == false,
_; */

//Scrolls
var scrTop			= null,		//스크롤 현재위치
	scrTopStart		= null,		//스크롤 시작위치
	scrTopEnd		= null,		//스크롤 종료위치
	isScrFirst		= null,		//스크롤 처음여부
	isScrLast		= null,		//스크롤 마지막여부
_;


/*---------------------------------------------------------------
	@Settings
---------------------------------------------------------------*/
/* 엘리먼트 설정 */
function setElementInit(){
	$window		= $(window);
	$document	= $(document);
	$html		= $('html');
	$body		= $('body');
	$html_body	= $('html, body');
	$wrapper	= $('.wrapper');
	$header		= $('.header');
	$document.off('focusin.eleEvent click.eleEvent').on('focusin.eleEvent click.eleEvent', function(e){
		$activeFocus = $(e.target);
	})
}

/* 디바이스 설정 */
/* function setDeviceInit(){
	var cls = 'dv_';
	var browserDevice = function(){ return browser.mobile == true ? 'mobile' : 'pc' }
	var clsBrowser = ''
		+ cls + browser.name
		+ ' ' + cls + browser.name + browser.version
		+ ' ' + cls + browser.os
		+ ' ' + cls + browser.os + Math.floor(browser.osVersion)
		+ ' ' + cls + browserDevice();
	$body.addClass(clsBrowser);
} */

/* 상태 설정 */
function setStatusInit(){
	scrTop = scrTopStart = $window.scrollTop(); // 스크롤 현재상태
	setPosition(scrTop); // 스크롤 현재상태 설정
	setScrolled(); // 스크롤 진행상태 설정
	setResized(); // 리사이징 진행상태 설정
}
function setPosition(val){
	//스크롤 처음확인
	if (val == 0){
		isScrFirst = true;
		$body.addClass('is_scrollFirst');
	} else {
		isScrFirst = false;
		$body.removeClass('is_scrollFirst');
	}
	//스크롤 마지막확인
	if (val + $window.outerHeight() == $document.height()){
		isScrLast = true;
		$body.addClass('is_scrollLast');
	} else {
		isScrLast = false;
		$body.removeClass('is_scrollLast');
	}
}
function setScrolled(){
	var scrollEndTime;
	var isScrolled = false;
	var oldScrTop = scrTop;
	$window.off('scroll.customEvent').on('scroll.customEvent', function(){
		var curScrTop = $window.scrollTop();

		//스크롤 방향
		if (oldScrTop > curScrTop){
			$window.trigger('scrollUp');
			$body.addClass('is_scrollUp').removeClass('is_scrollDown');
		} else if (oldScrTop < curScrTop){
			$window.trigger('scrollDown');
			$body.addClass('is_scrollDown').removeClass('is_scrollUp');
		}
		oldScrTop = curScrTop;

		//스크롤 종료
		clearTimeout(scrollEndTime);
		scrollEndTime = setTimeout(function(){
			isScrolled = false;
			scrTop = scrTopEnd = curScrTop;
			$window.trigger('scrollEnd');
		}, 100);

		setPosition(curScrTop);
	});
}
function setResized(){
	//Resized
	var resizeEndTime;
	$window.off('resize.customEvent').on('resize.customEvent', function(){
		clearTimeout(resizeEndTime);
		resizeEndTime = setTimeout(function(){
			$window.trigger('resizeEnd');
		}, 100);
	});
}

/*---------------------------------------------------------------
	@Utility
---------------------------------------------------------------*/
/* 스크롤설정 */
var setScrollOptions = {
	clsLockAll: 'is-locked-all',
	clsLockIOS: 'is-locked-ios',
	scrTop: null
}
/* 스크롤 비활성 */
function setScrollDisable() {
	setScrollOptions.scrTop = $window.scrollTop();
	$wrapper.css({position: 'relative', top: this.scrTop * (-1)});
	if (isIOS){
		$html_body.addClass(setScrollOptions.clsLockIOS);
	} else {
		$html_body.addClass(setScrollOptions.clsLockAll);
	}
}
/* 스크롤 활성화 */
function setScrollEnable(){
	$wrapper.removeAttr('style');
	if (isIOS){
		$html_body.removeClass(setScrollOptions.clsLockIOS);
	} else {
		$html_body.removeClass(setScrollOptions.clsLockAll);
	}
	$html_body.scrollTop(setScrollOptions.scrTop);
}

/* 스트링을 스크립트 코드로 변환 */
function getNewFunc($ele){
	var callback = $ele.data('callback');
	//속성으로 콜백함수 처리
	if (callback != '' && callback != undefined){
		return (new Function(str))();
	}
}

/* callback이 존재하면 실행 */
function setCallback(callback){
	if (callback){ typeof(callback) == 'function' ? callback() : callback; }
}

/*---------------------------------------------------------------
	@Layout
---------------------------------------------------------------*/
/* Aside */
function asideInit(){
	$document.off('click.asideOpen').on('click.asideOpen', 'button.js_aside_opener', function(e){ asideOpen($(this).data('id'), $(this)) });
	$document.off('click.asideClose').on('click.asideClose', 'button.js_aside_closer', function(e){ asideClose($(this).data('id'), $(this)) });
}
function asideOpen(id, $btn){
	var self = this;
	var $aside = $('#'+id);
	$btn.attr('aria-expanded', 'true');
	$aside.addClass('is-active').attr('aria-hidden', 'false');
}
function asideClose(id, $btn){
	var self = this;
	var $aside = $('#'+id);
	$btn.attr('aria-expanded', 'true');
	$aside.removeClass('is-active').attr('aria-hidden', 'true');
}
// 사이드바 최근이용메뉴 클릭 삭제
function latestMenu() {
	var self = this;
	var latestMenuBtn = '.menus button i'
	$(latestMenuBtn).on('click', function(e) {
		e.preventDefault();
		$(this).parents('.menus li').slideUp(150);
	});

}

/*---------------------------------------------------------------
	@Module
---------------------------------------------------------------*/
/* 파일첨부 - 파일명표시 */
function fileAttachSrc(obj, e){
	var $eleFormText = $(obj).closest('.file').find('input[type=text]');
	if ($eleFormText){
		var fileValue = $(obj).val().split("\\");
		var fileName = fileValue[fileValue.length-1];
		$eleFormText.val(fileName);
	}
}

/* 파일첨부 - 추가 */
function fileAttachAdd(obj, str){
	var $group = $(obj).closest('.form-controls.type-file'),
		idx = $group.find('.file').length,
		id = str+idx,
		html = ''
			+'<div class="row">'
			+'	<span class="file">'
			+'		<input type="text" id="sFileName'+idx+'" class="input demo1" title="첨부된 파일명" />'
			+'		<label for="'+id+'" class="btn demo2 btn_file" role="button">'
			+'			<span><input type="file" name="'+id+'" id="'+id+'" value="찾아보기" tabindex="-1" aria-hidden="true" onchange="fileAttachSrc(this, event)" />첨부</span>'
			+'		</label>'
			+'		<button type="button" class="btn demo2 type-add" onclick="fileAttachAdd(this, \'sFilesAdd2\')"><span>추가</span></button>'
			+'		<button type="button" class="btn demo2 type-remove" onclick="fileAttachRemove(this)"><span>삭제</span></button>'
			+'	</span>'
			+'</div>'
		$group.append(html);
}

/* 파일첨부 - 삭제 */
function fileAttachRemove(obj){
	var $row = $(obj).closest('.row');
	if ($row.siblings().length){
		$(obj).closest('.row').remove();
	}
}

/* 파일첨부 - 이미지미리보기 */
function fileAttachPreview(id, e){
	var sel_files = [];
	var $eleFormImg = $('#'+id);
	if ($eleFormImg.length){
		//이미지 사진보기
		var files = e.target.files;
		var filesArr = Array.prototype.slice.call(files);

		filesArr.forEach(function(f){
			if (!f.type.match("image.*")){
				alert('확장자는 이미지 확장자만 가능합니다.');
				return;
			}
			sel_files.push(f);

			var reader = new FileReader();
			reader.onload = function(e){
				var eleImg = '<img src="'+e.target.result+'" alt="첨부된파일">';
				$eleFormImg.html(eleImg);
			}
			reader.readAsDataURL(f);
		})
	}
}

/* Selected */
function selectInit(){ 
	$document.off('click.selEvent').on('click.selEvent', '.js-select', function(e){ 
		$(this).addClass('is-active').attr('aria-active', 'true').siblings().removeClass('is-active').attr('aria-selected', 'false');
	});
}

/* Tab */
function tabInit(){
	$document.off('click.tabEvent').on('click.tabEvent', '.js-tab', function(e){
		var callback = function(){ getNewFunc($(this)) };
		tabAction($(this).attr('aria-controls'), callback);
	});
}
function tabAction(id, callback){
	var $eleTabItem = $('[aria-controls='+id+']');
	var $eleTabPanel = $('#'+ id);
	$eleTabItem.addClass('is-active').attr('aria-selected','true').siblings().removeClass('is-active').attr('aria-selected','false');
	$eleTabPanel.addClass('is-active').siblings().removeClass('is-active');
	setCallback(callback);
}

/* Accordion */
var accoOption = {speed: 200};
function accoInit(){
	$document.off('click.accoEvent').on('click.accoEvent', '.acco-toggle', function(e){
		var $accoItem = $(this).closest('.acco-item'),
			$accoWrap = $(this).closest('.acco'),
			isActive = $accoItem.hasClass('is-active'),
			isToggle = $accoWrap.data('toggle'),
			isSync = $accoWrap.data('sync'),
			id = $(this).attr('aria-controls'),
			id_siblings = $accoItem.siblings('.is-active').find('.acco-cont').attr('id'),				
			callback = function(){ getNewFunc($(this)) };

		if (isActive && isToggle) { accoClose(id, callback) }
		if (!isActive){ accoOpen(id, callback) }
		if (isSync){ accoClose(id_siblings) }
	});
}
function accoOpen(id, callback){
	$('[aria-controls='+id+']').attr({'aria-expanded':'true'});
	$('#'+id).stop().hide().slideDown(accoOption.speed, function(){
		$(this).attr({'aria-hidden':'false'});
		setCallback(callback);
	}).closest('.acco-item').addClass('is-active');
}
function accoClose(id, callback){
	$('[aria-controls='+id+']').attr({'aria-expanded':'false'});
	$('#'+id).stop().show().slideUp(accoOption.speed, function(){
		$(this).attr({'aria-hidden':'true'});
		setCallback(callback);
	}).closest('.acco-item').removeClass('is-active');
}

/* Drop */
function dropInit(){
	$document.off('click.dropEvent').on('click.dropEvent', 'button.drop-toggle', function(e){
		var id = $(this).data('id');
		$(this).hasClass('is-active') ? dropClose(id) : dropOpen(id);
	});
	$document.off('focusin.dropEvent2 click.dropEvent2').on('focusin.dropEvent2 click.dropEvent2', function(e){
		$('button.drop-toggle.is-active').each(function(){
			var id = $(this).data('id');
			if ($('.drop').has(e.target).length === 0){ dropClose(id) }
		})
	});
}
function dropOpen(id, callback){
	$('.drop-toggle.is-active').each(function(){ dropClose($(this).data('id')) });
	$('[data-id='+id+']').attr({'aria-expanded':'true'}).addClass('is-active');
	$('#'+id).attr({'aria-hidden':'false'}).addClass('is-active').one('animationend', function(){
		if ($(this).hasClass('is-active')){
			setCallback(callback);
		}
	})
}
function dropClose(id, callback){
	$('[data-id='+id+']').attr({'aria-expanded':'false'}).removeClass('is-active');
	$('#'+id).attr({'aria-hidden':'true'}).removeClass('is-active').one('animationend', function(){
		if (!$(this).hasClass('is-active')){
			setCallback(callback);
		}
	})
}

/* Tooltip */
function tooltipInit(){
	$document.off('click.tooltipEvent').on('click.tooltipEvent', '.js-tooltip', function(e){
		tooltipOpen($(this).data('id'));
	});
	$document.off('focusin.tooltipEvent2 click.tooltipEvent2').on('focusin.tooltipEvent2 click.tooltipEvent2', function(e){
		$('div.tooltip.is-active').each(function(){
			var id = $(this).attr('id');
			if ($('div.tooltip-area').has(e.target).length === 0 && !$(e.target).hasClass('js-tooltip')){
				tooltipClose(id);
			}
		})
	});
}
function tooltipOpen(id, callback){
	$('div.tooltip.is-active').each(function(){ tooltipClose($(this).attr('id')) });
	$('#'+id).addClass('is-active');
	$('button[data-id='+id+']').addClass('is-active').attr({'aria-expanded':'true'});
	setCallback(callback);
}
function tooltipClose(id, callback){
	$('#'+id).removeClass('is-active');
	$('button[data-id='+id+']').removeClass('is-active').attr({'aria-expanded':'false'});
	setCallback(callback);
}

/* Popover */
function popoverInit(){
	$document.off('click.popoverEvent').on('click.popoverEvent', '.js-popover', function(e){
		popoverOpen($(this).data('id'));
	});
	$document.off('focusin.popoverEvent2 click.popoverEvent2').on('focusin.popoverEvent2 click.popoverEvent2', function(e){
		$('div.popover.is-active').each(function(){
			var id = $(this).attr('id');
			if ($('div.popover-area').has(e.target).length === 0 && !$(e.target).hasClass('.js-popover')){
				popoverClose(id);
			}
		})
	});
}
function popoverOpen(id, callback){
	$('div.popover.is-active').each(function(){ popoverClose($(this).attr('id')) });
	$('#'+id).addClass('is-active');
	console.log($('#'+id).hasClass('is-active'));
	$('button[data-id='+id+']').addClass('is-active').attr({'aria-expanded':'true'});
	setCallback(callback);
}
function popoverClose(id, callback){
	$('#'+id).removeClass('is-active');
	$('button[data-id='+id+']').removeClass('is-active').attr({'aria-expanded':'false'});
	setCallback(callback);
}

/* 팝업 */
var popupOptions = {
	$popArr: [],
	zIndexUnit: 1000,
}
function popupOpen(id, callback){
	var $popWrap = $('#'+id);
	var $focus = $popWrap.find('.popup-focus');

	//팝업이 남아있는 경우
	if (popupOptions.$popArr.length){
		$activePopWrap = popupOptions.$popArr[popupOptions.$popArr.length - 1];
		$activePopWrap.addClass('is-disabled');
	}

	$popWrap.data('opener', $activeFocus).addClass('is-active');
	$popWrap.one('transitionend', function(){
		if ($(this).hasClass('is-active')){
			updateUI(); $focus.focus();
			setCallback(callback);
		}
	});
	
	//접근성초점
	$wrapper.attr('aria-hidden', 'true');
	$document.off('focusin.popupEvent click.popupEvent').on('focusin.popupEvent click.popupEvent', function(e){
		if ($popWrap.has(e.target).length === 0) { 
			$focus.focus();
		}
	});

	//다중팝업설정
	popupOptions.$popArr.push($popWrap);
	var zIndex = popupOptions.zIndexUnit + popupOptions.$popArr.length;
	$popWrap.css({'z-index':zIndex});
}
function popupClose(id, callback){
	var $popWrap = $('#'+id);
	var $focus = $popWrap.data('opener');
	var $activePopWrap = null;
	$popWrap.removeClass('is-dimmer is-active').removeAttr('style');
	$popWrap.one('transitionend', function(){
		if (!$(this).hasClass('is-active')){
			//닫힌팜업 비활성화
			$focus.attr('tabindex','0').focus();
			setCallback(callback);
		}
	});
	
	//다중팝업 설정
	popupOptions.$popArr.pop();
	
	//팝업이 남아있는 경우
	if (popupOptions.$popArr.length){
		//팝업활성화
		$activePopWrap = popupOptions.$popArr[popupOptions.$popArr.length - 1];
		$activePopWrap.removeClass('is-disabled');

		//접근성초점
		$document.off('focusin.popupEvent click.popupEvent').on('focusin.popupEvent click.popupEvent', function(e){
			if ($activePopWrap.has(e.target).length === 0) { 
				$lastFocus = $activePopWrap.data('opener');
				$lastFocus.focus();
			}
		});
	} else {
		$wrapper.removeAttr('aria-hidden');
		$document.off('focusin.popupEvent click.popupEvent');
	}
}

/* Spy Scroll */
function spyScrollInit(){
	$document.off('click.spyscrollEvent').on('click.spyscrollEvent', '.js-spyscroll', function(e){
		self.action($(this).data('id'), $(this).data('scroll-target'), $(this).data('scroll-gap'));
	});
}
function spyScrollAction(id, scroller, gap){
	var isBody = scroller == 'body',
		ele_t = $('#'+id).offset().top,
		gap_t = $header.outerHeight() + parseInt(gap),
		sum_t = null;
						
	if (isBody){
		//최종위치 = 대상요소TOP - 공백
		sum_t = ele_t - gap_t;
	} else {
		//최종위치 = 대상요소TOP - 공백 - 스크롤요소TOP + 스크롤TOP
		sum_t = ele_t - gap_t - $(scroller).offset().top + $(scroller).scrollTop();
	}
	
	$(scroller).stop().animate({'scrollTop': sum_t}, 400);
}

/* 스와이프 공통 */
function swipeValidate(containerClass, title, options, func){
	if (title == undefined){ title = '' }
	var setFocus = function($container){
		console.log($container);
	};
	var $container = $(containerClass);
	var $swiper = $container.parent();
	var $navDisabled = $swiper.children('.swiper-button-disabled');
	var defaultOptions = {
		watchSlidesVisibility: true,
		a11y: {
			prevSlideMessage: title+ ' 이전 슬라이드',
			nextSlideMessage: title+ ' 다음 슬라이드',
			firstSlideMessage: title+ ' 첫번째 슬라이드',
			lastSlideMessage: title+ ' 마지막 슬라이드',
		},
		on: {
			init: function(){
				setFocus($container, 'swiper');
			},
			slideChangeTransitionStart: function(){
				setFocus($container, 'swiper');
			}
		}
	}
	$.extend(defaultOptions, options); // 기본옵션 머지하기
	//몇개부터 스와이프 설정할지 체크
	if ($container.find('>.swiper-wrapper>.swiper-slide:visible').length > 1){ // 보이는 슬라이드가 1개 초과일때
		func(defaultOptions); // 스와이프 호출(옵션보내기)
		$swiper.removeClass('no-swiper').addClass('is-swiper'); // 스와이프 적용클래스
		if (defaultOptions.autoplay != undefined && defaultOptions.autoplay != false){ $swiper.addClass('is-started').removeClass('is-stoped') } // 자동재생인 경우 재생상태 적용
		if ($navDisabled.length == 2){ $navDisabled.addClass('dis-n') } // 양쪽 disabled 인경우 숨김
		else if ($navDisabled.length){ $navDisabled.removeClass('dis-n') } // 한쪽 disabled 인경우 초기화
	} else {
		$swiper.removeClass('is-swiper').addClass('no-swiper');
	}
}

/* 스와이프 데모 */
var swipeDemo;
function swipeDemoInit(){
	var title = '네비게이션';
	var swiperClass = '.tab-nav';
	var containerClass = swiperClass + '>.swiper-container';
	var customOptions = {
		centeredSlides: true,
		centeredSlidesBounds: true,
		slidesPerView: 'auto',
		slideToClickedSlide:true,
		navigation: {
			nextEl: swiperClass+' .swiper-button-next', //다음 슬라이드
			prevEl: swiperClass+' .swiper-button-prev', //이번 슬라이드
		},
		pagination: {
			el: $swiper.children('.swiper-pagination'),
			type: 'bullets',
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '번 슬라이드</span>';
			}
		},
	}
	swipeValidate(containerClass, title, customOptions, function(mergeOptions){
		swipeDemo = new Swiper(containerClass, mergeOptions);
		$(swiperClass + " .swiper-button-pause").click(function(){
			swiperDemo.autoplay.stop();
			$swiper.addClass('is-pauseed').removeClass('is-played');
		});
		$(swiperClass + " .swiper-button-play").click(function(){
			swiperDemo.autoplay.play();
			$swiper.addClass('is-played').removeClass('is-pauseed');					
		});
	});	
}

/* FixMenu on/off */
function fixMenuSelinit(){
	var fixMenuSel = '#fixed-menu li a';
	var fixMenu = {
		init: function() {
			$(fixMenuSel).on('click', function(e) {
				e.preventDefault();
				$(this).parent().addClass('on').siblings().removeClass('on');
			});
		}
	};
	fixMenu.init();
}

/* TopMenu on/off */
function navBarinit(){
	var navMenuSel = '.navbar li a';
	var navMenu = {
		init: function() {
			$(navMenuSel).on('click', function(e) {
				e.preventDefault();
				$(this).parent().addClass('on').siblings().removeClass('on');
			});
		}
	};
	navMenu.init();
}

var gCom = {
	init: function () {
		this.gAside.init();
	},
	gAside: {
		asideEl: '.side-menu',
		anbBtnEl: '.right-menu .all-menu',
		maskEl: '.g-mask',
		asideWid: null,

		init: function () {
			this.asideWid = $(this.asideEl).width();
			this.setInit();
			this.event();
		},
		setInit: function () {
			var _this = this;
			var path = location.pathname;
			$(this.asideEl).find('.g-snb a[href*="' + path + '"]').parent().addClass('is-current');
		},
		event: function () {
			//펼치기
			$('body').addClass('is-aside-closed');
			$(this.anbBtnEl).not('.is-clickEvent').on('click', function (e) {
				if (!$('body').hasClass('is-aside-closed')) {
					$('body').removeClass('is-aside-opened');
					$('body').addClass('is-aside-closed');
					$(this).removeClass('active');
				} else {
					$('body').addClass('is-aside-opened');
					$('body').removeClass('is-aside-closed');
					$(this).addClass('active');
				}
			}).addClass('is-clickEvent');

			//숨기기
			$(this.maskEl).not('.is-clickEvent').on('click', function (e) {
				$('body').removeClass('is-aside-opened').addClass('is-aside-closed');
			}).addClass('is-clickEvent');
		},
	},
}



/*---------------------------------------------------------------
	@Content
---------------------------------------------------------------*/
// 이름
function nameInit(){
}

/*---------------------------------------------------------------
	@Init
---------------------------------------------------------------*/
/* Setting */
function set_init(){
	setElementInit(); // 엘리먼트 설정
	/* setDeviceInit(); // 디바이스 설정 */
	setStatusInit(); // 상태 설정
}
/* UI */
function ui_init(){
	/* Layout */
	asideInit(); // 사이드메뉴
	latestMenu(); // 사이드메뉴 최근이용메뉴

	/* Components */
	datepickerInit(); // Datepicker
	selectInit(); // Selected
	tabInit(); // Tab
	dropInit(); // Dropmenu
	accoInit();	// Accodion
	tooltipInit(); // Tooltip
	popoverInit(); // Popover
	fixMenuSelinit(); // Bottom menu
	navBarinit(); // Top menu
}

/* Ready */
$(function(){
	set_init();
	ui_init();
});

$(document).ready(function () {
	gCom.init();
})