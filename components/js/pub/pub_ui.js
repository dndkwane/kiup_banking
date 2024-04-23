/*--------------------------------------------------------------
	## UI - 모듈공통
--------------------------------------------------------------*/
var ui = {
	init: function () {
		console.log('ui.init()');
		//HTML Property Events : onclick="ui.popup.open('id', this)"		// #Popup
		if ($('.gnb-dropdown').length) { this.gnb_dropdown.init(); }		// #Gnb Dropdown
		if ($('.gnb-fulldown').length) { this.gnb_fulldown.init(); }		// #Gnb Fulldown
		if ($('.tab-nav').length) { this.tab.init(); }				// #Tab
		if ($('.acco').length) { this.acco.init(); }				// #acco
		if ($('[data-role=fold]').length) { this.foldToggle.init(); }		// #Folder (접기)
		if ($('[data-role=more]').length) { this.moreToggle.init(); }		// #FolderMore (더보기)
		if ($('.tooltip').length) { this.tooltip.init(); }			// #Tooltip
		if ($('.drop').length) { this.drop.init(); }				// #Dropdown
		if ($('.drop-select').length) { this.dropSelect.init(); }		// #Dropdown
		if ($('.js-sticky').length) { this.sticky.init(); }			// Sticky
		if ($('.js-spyScroll').length) { this.spyScroll.init(); }		// Spy Scroll
		if ($('.js-infinitScroll').length) { this.infiniteScroll.init(); }	// Infinit Scroll
		if ($('.js-floating').length) { this.floating.init(); }			// Floating
		if ($('.js-dimmer').length) { this.dimmer.init(); }			// Dimmer
		if ($('.js-progress').length) { this.progress.init(); }			// Progress
		if ($('.js-waypoint').length) { this.waypoint.init(); }			// Waypoint
		if ($('.type-clear').length) { this.inputRemove.init(); } // Input Clear
		if ($('.chartjs-area').length) { this.chartJs.init(); } // ChartJs
		if ($('.swiperWrap').length) { this.swiperJs.init(); } // Swiper
		if ($('.calendarWrap').length) { this.calendarUI.init(); } // Calendar
		if ($('.datepickerWrap').length) { this.datePickerUI.init(); } // Datepicker

	},
	chartJs: {
		init: function () {
			this.barChart();
			this.lineChart();
			//this.pieChart();
			this.doughnutChart();
			this.doughnutChartHalf();

		},
		barChart: function () {
			const ctx = document.getElementById('barChart').getContext('2d');
			const barChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [{
						label: 'Bar 차트',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						y: {
							beginAtZero: false
						}
					},
					/* responsive: false,
					maintainAspectRatio: false, */
				}
			});
		},

		lineChart: function () {
			const ctx = document.getElementById('lineChart').getContext('2d');
			const data = {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'Line 차트',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}]
			};
			const options = {
				scales: {
					y: {
						beginAtZero: false
					}
				},
				/* responsive: false,
				maintainAspectRatio: false, */
			};
			const lineChart = new Chart(ctx, {
				type: 'line',
				data: data,
				options: options
			});
		},

		doughnutChart: function () {
			const ctx = document.getElementById('doughnutChart').getContext('2d');
			const data = {
				labels: [
					'Red',
					'Blue',
					'Yellow'
				],
				datasets: [{
					label: '도너츠 차트',
					data: [300, 50, 100],
					backgroundColor: [
						'rgb(148, 220, 255)',
						'rgb(247, 93, 95)',
						'rgb(11, 112, 244)'
					],
					hoverOffset: 4
				}]
			};
			const options = {
				/* responsive: false,
				maintainAspectRatio: false, */

				Plugins: {
					tooltip: {
						enabled: false
					},
					datalabels: {
						formatter: function (value, context) {
							var idx = context.dataIndex;
							return context.chart.data.labels[idx] + value + '%';
						},
						align: 'top',
						font: {
							weight: 'bold',
							size: '15',
						},
						color: 'red',
					},
				}
			};
			const doughnutChart = new Chart(ctx, {
				plugins: [ChartDataLabels],
				options: options,
				type: 'doughnut',
				data: data,
			});
		},

		doughnutChartHalf: function () {
			const ctx = document.getElementById('doughnutChartHalf').getContext('2d');
			const data = {
				labels: [
					'Red',
					'Blue',
					'Yellow'
				],
				datasets: [{
					label: '도너츠 차트',
					data: [300, 50, 100],
					backgroundColor: [
						'rgb(148, 220, 255)',
						'rgb(247, 93, 95)',
						'rgb(11, 112, 244)'
					],
					hoverOffset: 4
				}]
			};
			const options = {
				/* responsive: false,
				maintainAspectRatio: false, */
				rotation: -90,
				circumference: 180,
				cutout: '50%',
				Plugins: {
					tooltip: {
						enabled: false
					},
					datalabels: {
						formatter: function (value, context) {
							var idx = context.dataIndex;
							return context.chart.data.labels[idx] + value + '%';
						},
						align: 'top',
						font: {
							weight: 'bold',
							size: '15',
						},
						color: 'red',
					},
				}
			};
			const doughnutChartHalf = new Chart(ctx, {
				plugins: [ChartDataLabels],
				options: options,
				type: 'doughnut',
				data: data,
			});
		},
	},
	// chartJs

	// input text 삭제
	inputRemove: {
		inputTextDel: function () {
			var $inputDelGroup = $(this).closest('.type-clear').find('input');
			$inputDelGroup.val('');
		},
		init: function () {
			$('.type-clear button').click(this.inputTextDel);
			$('.icon-del').click(this.inputTextDel);
		}
	},

	waveEffect: {
		init: function () {
			this.event();
		},
		event: function () {
			/* Add the class effect on button */
			$('.btn, .g-snb .g-depth2 .g-node2 > a').not('.not-effect').on('click', function (e) {
				var self = $(this),
					wave = '.effect-wave',
					/* Get the width of button (if different buttons types) */
					btnWidth = self.outerWidth(),
					x = e.offsetX,
					y = e.offsetY;
				self.prepend('<span class="effect-wave"></span>');
				console.log(e);
				$(wave)
					.css({ 'top': y, 'left': x })
					.animate({ opacity: '0', width: btnWidth * 2.2, height: btnWidth * 2.2 }, 500, function () {
						self.find(wave).remove();
					})
			})
		}
	},

	fileAttach: function (obj, e) {
		// 파일첨부 - 파일명적용
		var sel_files = [];
		var $eleFormText = $(obj).closest('.file').find('input[type=text]');
		var $eleFormImg = $(obj).closest('.file').find('.file-preview');

		var action = function () {
			//파일명 적용
			if ($eleFormText.length) {
				var fileValue = $(obj).val().split("\\");
				var fileName = fileValue[fileValue.length - 1];
				$eleFormText.val(fileName);
			}

			if ($eleFormImg.length) {
				//이미지 사진보기
				var files = e.target.files;
				var filesArr = Array.prototype.slice.call(files);

				filesArr.forEach(function (f) {
					if (!f.type.match("image.*")) {
						alert('확장자는 이미지 확장자만 가능합니다.');
						return;
					}
					sel_files.push(f);

					var reader = new FileReader();
					reader.onload = function (e) {
						var eleImg = '<img src="' + e.target.result + '" alt="첨부된파일">';
						$eleFormImg.html(eleImg);
					}
					reader.readAsDataURL(f);
				})
			}
		}
		action();
	},

	// 파일첨부 - 추가
	fileAttachAdd: function (obj) {
		var $group = $(obj).closest('.file-group'),
			idx = $group.find('.file').length,
			id = 'sFilesAdd' + idx,
			html = '<div class="file">' +
				'	<input type="text" class="form-input" title="첨부된 파일명" readonly>' +
				'	<label class="btn style-1" role="button" tabindex="0">' +
				'		<span>파일첨부</span>' +
				'		<input type="file" name="" value="" placeholder="" title="" class="file-hide" tabindex="-1" aria-hidden="true" onchange="ui.fileAttach(this, event);">' +
				'	</label>' +
				'</div>';
		$group.append(html);
	},

	// 파일첨부 - 삭제
	fileAttachDe: function (obj) {
		$(obj).closest('.file').remove();
	},

	//#Gnb Dropdown
	gnb_dropdown: {
		eleNode1_item: '.gnb-dropdown .node1-item',
		eleNode2_item: '.gnb-dropdown .node2-item',
		init: function () {
			var setTime = null;
			$(this.eleNode1_item).not('.is-entered').on('mouseenter focusin', function () {
				clearTimeout(setTime);
				$(this).addClass('is-active').find('> a').attr({ 'aria-expanded': 'true' });
				$(this).siblings().removeClass('is-active').find('> a').attr({ 'aria-expanded': 'false' });
			}).addClass('is-entered');
			$(this.eleNode1_item).not('.is-leaved').on('mouseleave focusout', function () {
				var $this = $(this);
				setTime = setTimeout(function () { $this.removeClass('is-active') });
			}).addClass('is-leaved');
		},
		set: function (n1, n2) {
			$(this.eleNode1_item).eq(n1).addClass('is-current').siblings().removeClass('is-current');
			$(this.eleNode2_item).eq(n2).addClass('is-current').siblings().removeClass('is-current');
		}
	},

	//#Gnb Fulldown
	gnb_fulldown: {
		eleModule: '.gnb-fulldown',
		eleNode1_item: '.gnb-fulldown .node1-item',
		eleNode2_list: '.gnb-fulldown .node2-list',
		eleNode2_item: '.gnb-fulldown .node2-item',
		init: function () {
			var _this = this, setTimeEnter1 = null; setTimeLeave1 = null; setTimeLeave2 = null;
			// 1Depth
			$(this.eleNode1_item).not('.is-entered').on('mouseenter focusin', function () {
				var $this = $(this);
				clearTimeout(setTimeLeave1); // 포커스가 있으면 타이커 초기화
				setTimeEnter1 = setTimeout(function () {
					$(_this.eleNode1_item).removeClass('is-active');
					$(_this.eleNode1_item).find('> a').attr({ 'aria-expanded': 'true' });
					$(_this.eleModule).addClass('is-active');
					$this.addClass('is-active');
				}, 100);
			}).addClass('is-entered');
			$(this.eleNode1_item).not('.is-leaved').on('mouseleave focusout', function () {
				clearTimeout(setTimeEnter1);
				setTimeLeave1 = setTimeout(function () {
					$(_this.eleModule).removeClass('is-active');
					$(_this.eleNode1_item).find('> a').attr({ 'aria-expanded': 'false' });
				}, 100);
			}).addClass('is-leaved');

			// 2Depth
			$(this.eleNode2_list).not('.is-entered').on('mouseenter focusin', function () {
				clearTimeout(setTimeLeave2);
				$(_this.eleNode2_list).removeClass('is-active');
				$(this).addClass('is-active');
			}).addClass('is-entered');
			$(this.eleNode2_list).not('.is-leaved').on('mouseleave focusout', function () {
				var $this = $(this);
				setTimeLeave2 = setTimeout(function () {
					$this.removeClass('is-active');
				}, 100);
			}).addClass('is-leaved');
		},
		set: function (n1, n2) {
			$(this.eleNode1_item).eq(n1).addClass('is-current').siblings().removeClass('is-current');
			$(this.eleNode2_item).eq(n2).addClass('is-current').siblings().removeClass('is-current');
		}
	},

	/*
		기능정의: #Tab
		연결방식: aria-controls="" / id=""
		참고경로: modules/modules_tab.html
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
	*/
	tab: {
		eleButton: '.tab-nav a',
		eleContent: '.tab-content',
		init: function () {
			this.event();
		},
		event: function () {
			var _this = this;
			$(this.eleButton).not('.is-clicked').on('click', function () {
				_this.action($(this).attr('aria-controls')); return false;
			}).attr('.is-clicked');
		},
		action: function (id) {
			$(this.eleButton + '[href="#' + id + '"]').attr({ 'aria-selected': 'true' }).parent().addClass('is-selected').siblings().removeClass('is-selected').children().attr({ 'aria-selected': 'false' });
			$('#' + id).attr({ 'aria-hidden': 'false' }).removeAttr('hidden').siblings().attr({ 'aria-hidden': 'true' }).attr('hidden', 'hidden');
		},
	},

	/*
		기능정의: #acco
		연결방식: href="" / id=""
		참고경로: modules/modules_acco.html
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
	*/
	acco: {
		eleModule: '.acco',
		eleItem: '.acco-item',
		eleButton: '.acco-toggle',
		eleTitle: '.acco-title',
		eleContent: '.acco-cont',
		duration: 300,
		init: function () {
			this.reset();
			this.disable();
			this.event($(this.eleButton));
		},
		reset: function () {
			var _this = this;
			$('.acco.__basic').each(function () { $(this).attr({ 'data-sync': 'true', 'data-toggle': 'true' }) });
		},
		event: function ($this) {
			var _this = this;
			$this.not('.is-clicked, [disabled]').on('click', function () {
				_this.action($(this).attr('aria-controls')); return false;
			}).addClass('is-clicked');
		},
		action: function (id) {
			var _this = this,
				$content = $('#' + id),
				$toggle = $('[aria-controls' + id + ']'),
				$module = $content.closest(this.eleModule),
				$Item = $content.closest(this.eleItem);
			console.log(id, $('#' + id), !$Item.hasClass('is-active'));

			// Toggle 접기
			if ($module.attr('data-toggle') == 'true' && $Item.hasClass('is-active')) {
				$Item.removeClass('is-active').find(_this.eleButton).attr('aria-expanded', 'false');
				$(this).attr('aria-hidden', 'true');
				$content.stop().slideUp(this.duration);
				console.log('Accordion Toggle');
			}
			// Syncroize 펼치기
			else if ($module.attr('data-sync') == 'true' && !$Item.hasClass('is-active')) {
				$Item.addClass('is-active').find(_this.eleButton).attr('aria-expanded', 'true');
				$Item.find(this.eleContent).stop().slideDown(this.duration);
				$Item.siblings().removeClass('is-active').find(_this.eleButton).attr('aria-expanded', 'false');
				$Item.siblings().find(this.eleContent).stop().slideUp(this.duration);
				console.log('Syncroize Toggle');
			}
			// Default 펼치기
			else if ($module.attr('data-sync') == 'false' && !$Item.hasClass('is-active')) {
				$Item.addClass('is-active').find(_this.eleButton).attr('aria-expanded', 'true');
				$(this).attr('aria-hidden', 'false');
				$Item.find(this.eleContent).stop().slideDown(this.duration);
				console.log('Default Toggle');
			}
			this.disable();
		},
		disable: function () {
			$(this.eleButton + '[disabled]').each(function () {
				$(this).removeAttr('aria-expanded');
				$(this).attr('aria-disabled', 'true');
				$(this).off('click');
			})
		}
	},

	/*
		기능정의: #Folder
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	foldToggle: {
		eleButton: '.fold-toggle[data-role=fold]',
		eleButtonAll: '.fold-toggle',
		eleContent: '.fold-cont',
		eleFocus: '.fold-focus',
		speed: 250,
		init: function () {
			var _this = this;
			this.event();
			$(this.eleContent).each(function () { _this.reset($(this).attr('id')) });
		},
		reset: function (id) {
			var $button = $('[aria-controls=' + id + ']');
			if ($('#' + id).is(':visible') == true) { $button.attr({ 'aria-expanded': 'true' }) }
			else { $button.attr({ 'aria-expanded': 'false' }) }
		},
		event: function () {
			var _this = this;
			$(this.eleButton).not('.is-clicked').on('click', function () {
				_this.action($(this).attr('aria-controls'));
			}).addClass('is-clicked');

			$(this.eleButtonAll).on('click', function () {
				$(this).toggleClass('rotate');
			});
		},
		action: function (id) {
			var _this = this;
			$('#' + id).stop().slideToggle(_this.speed, function () { _this.reset(id) });
		}
	},

	/*
		기능정의: #FolderMore
		연결방식: data-target="" / data-name=""
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	moreToggle: {
		eleButton: '.fold-toggle[data-role=more]',
		eleContent: '.fold-cont',
		eleHide: '.fold-hide',
		eleFocus: '.fold-focus',
		speed: 250,
		init: function () {
			var _this = this;
			this.event();
			$(this.eleContent).each(function () { _this.reset($(this).attr('id')) });
		},
		reset: function (id, obj) {
			var $button = $('[aria-controls=' + id + ']');
			var $eleHide = $('#' + id).find(this.eleHide);
			if ($eleHide.is(':visible') == true) {
				$button.attr({ 'aria-expanded': 'true' });
				$eleHide.removeAttr('hidden');
				if (typeof (obj) == 'object') { obj.attr({ 'role': 'text', 'tabindex': '0' }).focus(); }
			} else {
				$button.attr({ 'aria-expanded': 'false' });
				$eleHide.attr('hidden');
			}
		},
		event: function () {
			var _this = this;
			$(this.eleButton).not('.is-clicked').on('click', function () {
				_this.action($(this).attr('aria-controls'));
			})
		},
		action: function (id) {
			$('#' + id).find(this.eleHide).toggle();
			this.reset(id, $('#' + id).find(this.eleFocus));
		}
	},

	/*
		기능정의: #Tooltip
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	tooltip: {
		eleWrapper: '.tooltip-wrap',
		eleOpener: '.tooltip-open',
		eleCloser: '.tooltip-close',
		eleModule: '.tooltip',
		setTime: null,
		init: function () {
			this.event();
		},
		event: function () {
			var _this = this;
			$(this.eleOpener).not('.is-clicked').on('click', function () { _this.open($(this).attr('href')); return false });
			$(this.eleCloser).not('.is-clicked').on('click', function () { _this.close($(this).attr('href')); return false });
			$(this.eleWrapper).not('.is-overed').on('mouseover', function () { _this.open('#' + $(this).find(_this.eleModule).attr('id')); });
			$(this.eleWrapper).not('.is-leaved').on('mouseleave', function () { _this.close('#' + $(this).find(_this.eleModule).attr('id')); });
		},
		open: function (id) {
			var _this = this;
			$(id).attr({ 'data-state': 'null', 'aria-hidden': 'false' });
			$(id).stop().fadeIn(200, function () { $(this).attr({ 'data-state': 'opened' }).removeAttr('hidden'); });
			$(_this.eleOpener + '[href="' + id + '"]').attr({ 'aria-expanded': 'true' });
		},
		close: function (id) {
			var _this = this;
			$(id).attr({ 'data-state': 'null', 'aria-hidden': 'true' });
			$(id).stop().fadeOut(200, function () { $(this).attr({ 'data-state': 'closed' }).attr('hidden'); });
			$(_this.eleOpener + '[href="' + id + '"]').attr({ 'aria-expanded': 'false' });

			$('.tooltip-close').on('click', function () {
				var tooltipId = $(this).attr('aria-controls');
				$('#' + tooltipId).hide();
			});
		},
	},

	/*
		기능정의: #Drop
		참고사항: href="" / id="" 연결
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	drop: {
		eleWrap: '.drop',
		eleButton: '.drop-toggle',
		init: function () {
			this.event();
		},
		event: function () {
			var _this = this;
			var setTime;
			//토글이벤트(기본기능) Reflow 발생하므로 토글슬라이스 사용안함
			$(this.eleButton).not('.is-toggled').on('click', function () {
				var id = $(this).attr('aria-controls');
				var isActive = $(this).closest(_this.eleWrap).hasClass('is-active');
				if (isActive) { _this.close(id) } //활성화된 경우, 닫기
				if (!isActive) { _this.open(id) } //비활성화 경우, 열기
			}).addClass('is-toggled');
			//모듈내 포커스아웃 닫기 막기
			$(this.eleWrap).not('.is-focusin').on('focusin', function () { clearTimeout(setTime) }).addClass('is-focusin');
			//모듈 포커스아웃 닫기
			$(this.eleWrap).not('.is-focusout').on('focusout', function () {
				var id = $(this).find(_this.eleButton).attr('aria-controls');
				if ($(this).hasClass('is-active')) { setTime = setTimeout(function () { _this.close(id) }, 10) }
			}).addClass('is-focusout');
		},
		open: function (id) {
			//초기화
			var $wrapActive = $(this.eleWrap).filter('.is-active');
			var idActive = $wrapActive.find(this.eleButton).attr('aria-controls');
			this.close(idActive);

			//활성화
			var $id = $('#' + id);
			var $button = $('[aria-controls=' + id + ']');
			var $wrap = $('#' + id).closest(this.eleWrap);
			$id.removeAttr('hidden');
			$button.attr({ 'aria-expanded': 'true' });
			setTimeout(function () { $wrap.addClass('is-active') });
		},
		close: function (id) {
			var $id = $('#' + id);
			var $button = $('[aria-controls=' + id + ']');
			var $wrap = $('#' + id).closest(this.eleWrap);
			$wrap.removeClass('is-active');
			$id.one(transitionend, function () {
				if (!$wrap.hasClass('is-active')) {
					$id.attr({ 'hidden': 'hidden' });
					$button.attr({ 'aria-expanded': 'false' });
				}
			})
		},
	},

	dropSelect: {
		eleModule: '.drop-select',
		eleLabel: '.drop-label',
		eleItem: '.drop-item',
		init: function () {
			this.event();
		},
		event: function () {
			var _this = this;
			$(this.eleModule).find(this.eleItem).children().not('.is-clicked').on('click', function (e) {
				_this.action($(this));
				e.preventDefault();
			}).addClass('is-clicked');
		},
		action: function ($link) {
			var $eleCurrent = $link.closest(this.eleItem);
			var $eleModule = $link.closest(this.eleModule);
			var $eleLabel = $eleModule.find(this.eleLabel);
			$eleCurrent.attr({ 'hidden': 'hidden' }).siblings().removeAttr('hidden');
			$eleLabel.text($link.text());

		},
	},

	/*
		기능정의: #Popup
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	popup: {
		eleModule: '.popup-wrap',
		eleOpener: '.popup-open',
		eleCloser: '.popup-close',
		eleFocus: '.popup-focus',
		eleColserM: '.dimmer',
		zindex: 1000,

		init: function () {
			this.event();
		},

		open: function (id, obj) {
			var _this = this;
			var $id = $('#' + id);
			$(obj).attr({ 'data-popup': id });
			$id.removeAttr('hidden');
			setTimeout(function () { $id.addClass('is-active') }, 0);
			$id.one(transitionend, function () {
				if ($(this).hasClass('is-active')) {
					$(this).find(_this.eleFocus).attr('tabindex', '0').focus();
				}
			});
			dimmer.open($id, 'dimmer-popup');

			return 'Popup Opened';
		},
		close: function (id, callback) {
			var _this = this;
			var $id = $('#' + id);
			var $opner = $('[data-popup=' + id + ']');
			$id.removeClass('is-active');
			$id.one(transitionend, function () {
				if (!$(this).hasClass('is-active')) {
					$id.attr('hidden', 'hidden');
					$opner.focus().removeAttr('data-popup');
					if (callback) { callback }
				}
			});
			dimmer.close($id, 'dimmer-popup');

			return 'Popup Closed';
		},
		event: function () {
			$('.dimmer').on('click', function () {
				var popupId = $(this).closest('.popup-wrap').attr('id');
				ui.popup.close(popupId);
				$('.dimmer').removeClass('is-active');
			});
		}
	},

	/*
		## Full Popup
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	fullpopup: {
		init: function () {
			this.event();
		},
		reset: function ($this) {
			ut.setAnchorAttr($this);
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Fullpopup Action');
		},
	},

	/*
		## Sticky
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	sticky: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Sticky Action');
		},
	},

	/*
		## Spy Scroll
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	spyScroll: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Spy Scroll Action');
		},
	},

	/*
		## Infinit Scroll
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	infiniteScroll: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Infinit Scroll Action');
		},
	},

	/*
		## Floating
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	floating: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Floating Action');
		},
	},

	/*
		## Dimmer
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	dimmer: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Dimmer Action');
		},
	},

	/*
		## Progress
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	progress: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Progress Action');
		},
	},

	/*
		## Waypoint
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	waypoint: {
		init: function () {
			this.event();
		},
		event: function () {
			this.action();
		},
		action: function () {
			console.log('Waypoint Action');
		},
	},

	swiperJs: {
		init: function () {
			this.defaultSwiper();
			this.paginationSwiper();
			this.customProgressBar();
			this.tabSwiper();
			this.carouselFlexSwiper();
			this.verticalSwiper();
			this.responsiveCarousel();
		},
		defaultSwiper: function () {
			let swiperDefault = new Swiper(".defaultSwiper", {});
		},

		paginationSwiper: function () {
			let swiperPagination = new Swiper(".paginationSwiper", {
				pagination: {
					el: ".paginationSwiper .swiper-pagination",
				}
			})
		},

		customProgressBar: function () {
			let autoPlayDelay = 1500;
			let optionsProgress = {
				init: true,
				// Optional parameters
				loop: false,

				autoplay: {
					delay: autoPlayDelay
				},

				// If we need pagination
				/*pagination: {
					el: '.swiper-pagination',
					type: 'progressbar'
				},*/

				// Navigation arrows
				navigation: {
					nextEl: '.pageCounterSwiper .swiper-button-next',
					prevEl: '.pageCounterSwiper .swiper-button-prev'
				}
			};
			let CPswiper = new Swiper('.pageCounterSwiper', optionsProgress);
			let slidersCount = CPswiper.params.loop ? CPswiper.slides.length - 2 : CPswiper.slides.length;
			let widthParts = 100 / slidersCount;
			$('.pageCounterWrap .swiper-counter .total').html(slidersCount);
			for (let i = 0; i < slidersCount; i++) {
				$('.pageCounterWrap .swiper-progress-bar .progress-sections').append('<span></span>');
			}
			function initProgressBar() {
				let calcProgress = (slidersCount - 1) * (autoPlayDelay + CPswiper.params.speed);
				calcProgress += autoPlayDelay;
				$('.pageCounterWrap .swiper-progress-bar .progress').animate({
					width: '100%'
				},
					calcProgress, 'linear');
			}
			initProgressBar();
			CPswiper.on('slideChange', function () {
				let progress = $('.pageCounterWrap .swiper-progress-bar .progress');

				$('.pageCounterWrap .swiper-counter .current').html(this.activeIndex + 1);

				if (
					(
						this.progress == -0 || this.progress == 1 && this.params.loop) &&
					!progress.parent().is('.stopped')) {
					progress.css('width', '0');
					if (this.activeIndex == 0) {
						initProgressBar();
					}
				}

				if (progress.parent().is('.stopped')) {
					progress.animate({
						'width': Math.round(widthParts * (this.activeIndex + 1)) + '%'
					},
						this.params.speed, 'linear');
				}
			});
			CPswiper.on('touchMove', function () {
				$('.pageCounterWrap .swiper-progress-bar .progress').stop().parent().addClass('stopped');
			});
		},

		tabSwiper: function () {
			var swiperTab = new Swiper(".slideTabSwiper", {
				slidesPerView: "auto",
				freeMode: true,
				// preventClicks: true,
				// preventClicksPropagation: false,
				// observer: true,
				// observeParents: true,
				navigation: {
					nextEl: ".sliderTab__next",
					prevEl: ".sliderTab__prev",
				},
				pagination: {
					el: ".slideTabSwiper .swiper-pagination",
					clickable: true
				},
			});

			var $lankTitle = $(".slideTabSwiper .swiper-slide a");

			$lankTitle.click(function () {
				var targetTab = $(this).parent();
				$lankTitle.parent().removeClass("on");
				targetTab.addClass("on");
				muCenter(targetTab);
			});

			// 클릭요소 중앙정렬
			function muCenter(targetTab) {
				var snbwrap = $(".slideTabSwiper .swiper-wrapper");
				var targetPos = targetTab.position();
				var boxWidth = $(".slideTabSwiper").width();
				var wrapWidth = 0;
				snbwrap.find(".swiper-slide").each(function () {
					wrapWidth += $(this).outerWidth();
				});

				var selectTargetPos = targetPos.left + targetTab.outerWidth() / 2;
				var posTab;
				if (selectTargetPos <= boxWidth / 2) {
					posTab = 0;
					$(".sliderTab__prev").addClass("swiper-button-disabled"); // 사이드 그라데이션
				} else if (wrapWidth - selectTargetPos <= boxWidth / 2) {
					posTab = wrapWidth - boxWidth;
					$(".sliderTab__next").addClass("swiper-button-disabled"); // 사이드 그라데이션
				} else {
					posTab = targetPos.left - boxWidth / 2 + targetTab.outerWidth() / 2;
					$(".sliderTab__prev, .sliderTab__next").removeClass(
						"swiper-button-disabled"
					); // 사이드 그라데이션
				}

				if (wrapWidth > boxWidth) {
					setTimeout(function () {
						snbwrap.css({
							transform: "translate3d(" + posTab * -1 + "px, 0, 0)",
							"transition-duration": "500ms"
						});
					}, 200);
				}
			}

			var swiperContent = new Swiper(".sliderContent", {
				slidesPerView: 1,
				allowTouchMove: false,
				thumbs: {
					swiper: swiperTab
				}
			});
		},

		responsiveCarousel: function () {
			var responsiveCarousel = new Swiper(".responsive-carousel .swiper-slider", {
				centeredSlides: true,
				slidesPerView: 1,
				grabCursor: true,
				freeMode: false,
				loop: true,
				mousewheel: false,
				keyboard: {
					enabled: true
				},
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				pagination: {
					el: ".responsive-carousel .swiper-pagination",
					dynamicBullets: false,
					clickable: true
				},
				navigation: {
					nextEl: ".responsive-carousel .swiper-button-next",
					prevEl: ".responsive-carousel .swiper-button-prev"
				},
				// Responsive breakpoints
				breakpoints: {
					360: {
						slidesPerView: 1.25,
						spaceBetween: 20
					},
					640: {
						slidesPerView: 1.5,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 20
					}
				}
			});
		},

		carouselFlexSwiper: function () {
			var swiperCarousel = new Swiper(".carouselFlexWrap", {
				effect: "coverflow",
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: "auto",
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: true
				},
				keyboard: {
					enabled: true
				},
				/* mousewheel: {
					thresholdDelta: 70,
					releaseOnEdges: true
				},
				mousewheelControl: true, */
				spaceBetween: 60,
				loop: true,
				pagination: {
					el: ".carouselFlexWrap .swiper-pagination",
					clickable: true
				}
			});
		},

		verticalSwiper: function () {
			var verticalSwiper = new Swiper(".vertical-slider .swiper-container", {
				direction: "vertical",
				loop: true,
				pagination: {
					el: ".vertical-slider .swiper-pagination",
					clickable: true
				},
				grabCursor: true,
				speed: 1000,
				paginationClickable: true,
				parallax: true,
				autoplay: false,
				effect: "slide",
				/* mousewheel: {
					thresholdDelta: 70,
					releaseOnEdges: true
				},
				mousewheelControl: true, */
			});
		},

	},

	calendarUI: {
		init: function () {
			this.infiniteCalendar();
		},
		infiniteCalendar: function () {
			var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth(),
				yearCounter = year,
				monthCounter = month,
				calendarThead = document.getElementById('CALENDAR__THEAD'),
				calendarTbody = document.getElementById('CALENDAR__TBODY'),
				calendarControls = document.getElementById('CALENDAR__CONTROLS'),
				monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				dayNames = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
				formatMonth;

			var getDaysInMonth = function (month, year) {
				return new Date(year, month + 1, 0).getDate();
			};

			function monthStartDay(thisYear, thisMonth) {
				var date = new Date(thisYear, thisMonth, 1);
				var startDay = date.getDay();

				if (startDay == 0) {
					startDay = 7;
				}

				return startDay;
			}

			function renderControls(target, year, month) {
				var controlLi = document.createElement('li'),
					prevBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
					prevIcn = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
					nextLi = document.createElement('li'),
					nextBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
					nextIcn = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
					todayBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
					todayIcn = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
					titleLi = document.createElement('li'),
					heading = document.createElement('header'),
					title = document.createElement('h3');

				prevIcn.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#arrow');
				nextIcn.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#arrow');
				todayIcn.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#dot');

				titleLi.setAttribute('class', 'flexy__child');

				prevBtn.setAttribute('id', 'CALENDAR__CONTROLS__PREV');
				nextBtn.setAttribute('id', 'CALENDAR__CONTROLS__NEXT');

				controlLi.setAttribute('class', 'flexy__item flexy--items-center');
				nextLi.setAttribute('class', 'flexy__item flexy--items-center');

				prevBtn.setAttribute('class', 'calendar__controls__button svg-icon');
				todayBtn.setAttribute('class', 'calendar__controls__button svg-icon stroke--black');
				nextBtn.setAttribute('class', 'calendar__controls__button svg-icon svg-icon--rotated-180');

				prevBtn.appendChild(prevIcn);
				nextBtn.appendChild(nextIcn);
				todayBtn.appendChild(todayIcn);
				controlLi.appendChild(prevBtn);
				controlLi.appendChild(todayBtn);
				controlLi.appendChild(nextBtn);

				// title.innerHTML = monthNames[month];
				title.innerHTML = '<span class="calendar__controls__button__year">' + year + ' .</span>' + monthNames[month];
				heading.appendChild(title);
				titleLi.appendChild(heading);

				target.appendChild(titleLi);
				target.appendChild(controlLi);

				prevBtn.addEventListener('click', changeMonth);
				nextBtn.addEventListener('click', changeMonth);
				todayBtn.addEventListener('click', goToday);
			}

			function renderDayNames(namesArray) {
				var namesRow = document.createElement('tr');

				namesRow.setAttribute('class', 'calendar__month__week flexy__item');

				for (var i = 0; i < namesArray.length; i++) {
					var thDay = document.createElement('th');
					thDay.setAttribute('class', 'calendar__month__day');
					thDay.innerHTML = namesArray[i];
					namesRow.appendChild(thDay);
				}

				calendarThead.appendChild(namesRow);
			}

			renderDayNames(dayNames);

			function goToday() {
				calendarTbody.setAttribute('class', 'calendar__tbody calendar__tbody--animate');
				setTimeout(function () {
					newMonth(year, month);
				}, 450);
				setTimeout(function () {
					calendarTbody.setAttribute('class', 'calendar__tbody');
				}, 900);
				yearCounter = year;
				monthCounter = month;
			}

			function changeMonth() {
				if (this.id.split('NEXT').length > 1) {
					if (monthCounter < 11) {
						monthCounter++;
					} else {
						monthCounter = 0;
						yearCounter++;
					}
				} else if (this.id.split('PREV').length > 1) {
					if (monthCounter > 0) {
						monthCounter--;
					} else {
						monthCounter = 11;
						yearCounter--;
					}
				}
				calendarTbody.setAttribute('class', 'calendar__tbody calendar__tbody--animate');
				setTimeout(function () {
					newMonth(yearCounter, monthCounter);
				}, 450);
				setTimeout(function () {
					calendarTbody.setAttribute('class', 'calendar__tbody');
				}, 900);
			}

			function renderMonth(thisYear, thisMonth) {
				var days = getDaysInMonth(thisMonth, thisYear),
					startDay = monthStartDay(thisYear, thisMonth),
					monthRow = document.createElement('tr');
				monthRow.setAttribute('id', 'CALENDAR__ROW');
				monthRow.setAttribute('class', 'calendar__month__week flexy__item');
				for (var i = 1; i < (days + startDay); i++) {
					var cellDay = document.createElement('td'),
						timeTag = document.createElement('time');
					cellDay.setAttribute('class', 'calendar__month__day');
					if (i >= startDay) {
						if (thisMonth < 10) {
							formatMonth = '0' + thisMonth;
						}
						timeTag.setAttribute('datetime', thisYear + '-' + formatMonth + '-' + (i - startDay));
						cellDay.setAttribute('id', 'CALENDAR__DAY--' + (i - startDay + 1));
						timeTag.innerHTML = i - startDay + 1;
						cellDay.appendChild(timeTag);
					} else {
						cellDay.innerHTML = '-';
					}
					monthRow.appendChild(cellDay);
				}

				calendarTbody.appendChild(monthRow);
				renderControls(calendarControls, thisYear, thisMonth);

				var today = document.getElementById('CALENDAR__DAY--' + date.getDate());

				if (thisMonth === date.getMonth() && thisYear === date.getFullYear()) {
					setTimeout(function () {
						today.setAttribute('class', 'calendar__month__day today');
					}, 200);
				}
			}

			function newMonth(year, month) {
				var controls = document.getElementById('CALENDAR__CONTROLS'),
					row = document.getElementById('CALENDAR__ROW');

				while (controls.firstChild) {
					controls.removeChild(controls.firstChild);
				}

				calendarTbody.removeChild(row);
				renderMonth(year, month);
			}
			renderMonth(year, month);
		},
	},

	datePickerUI: {
		init: function () {
			this.datePickerModal();
		},
		datePickerModal: function () {
			var datepicker = $('.input__item');
			datepicker.datepicker({
				dateFormat: 'yy-mm-dd',
				showOtherMonths: true,
				showMonthAfterYear: true,
				changeYear: true,
				changeMonth: true,
				showOn: 'both',
				buttonImage: ('../../../components/_common/img/button/btn_calendar.png'),
				buttonImageOnly: true,
				showAnim: '',
				onSelect: function () {
					dimDisplay('none');
				}
			});

			$('#datepicker').datepicker('setDate', 'today');

			const dateInput = document.querySelector('.input__item'),
				dateIcon = document.querySelector('.ui-datepicker-trigger'),
				calendar = document.querySelector('#ui-datepicker-div');

			const dim = document.createElement('div');
			dim.classList.add('datepicker-layer');
			calendar.before(dim);

			dateInput.addEventListener('focus', function () {
				if (calendar.style.display === 'block') {
					dimDisplay('block');
				}
			})
			dateIcon.addEventListener('click', function () {
				if (calendar.style.display == 'block') {
					dimDisplay('block');
				}
			})

			const layerDateLayer = document.querySelector('.datepicker-layer');

			window.addEventListener('click', function (e) {
				if (e.target === layerDateLayer) {
					dimDisplay('none');
				}
			});
			function dimDisplay(display) {
				layerDateLayer.style.display = display;
			}
		},
	}
}

/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
$(document).ready(function () {
	dv.init();   // 유틸리티 - pub_utility.js
	ui.init();  // 개발에서 하나만 호출하도록
});