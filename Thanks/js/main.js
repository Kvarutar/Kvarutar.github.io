$(document).ready(function () {

	var body = $("body");
	

	//*****************Слайдер со скроллом********************************
	if ($('.about_app_img').length > 0) {
	
	var count_of_slide = $('.js-swipe > .about_app_img').length; 
	
	for (var i = 1; i <= count_of_slide; i++)
	{
		$('.about_app_list_bullet').append('<span class="js_bullet" data-img="' + i + '"></span>');
	}		
	
	
	$('.js_bullet[data-img="' + 1 + '"]').addClass("active");
  
  $(".js-swipe").swipe( {
	  
	  
	  allowPageScroll:"vertical",
    //Generic swipe handler for all directions
	//swipe:function(event, direction, distance, duration, fingerCount, fingerData) {      $(this).text("You swiped " + direction );      }
	
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {      




	if (direction == 'left')
	{
		var needed_link = parseInt($('.about_app_item.active').data("img")) + 1;
		if (needed_link < count_of_slide)
		{	_slider_scroll(needed_link); }
		else
		{	_slider_scroll(count_of_slide);}
	}

	if (direction == 'right')
	{
		var needed_link = parseInt($('.about_app_item.active').data("img")) - 1;
		if (needed_link > 0)
		{	_slider_scroll(needed_link); }
		
	}



	}
	
	
	
  });
  
  
  
  
  
  
	function CsonScroll(event) {
		if ($(window).width() > 767)
		{
		var scrollPosition = $(document).scrollTop();
		var windowHeight = $(window).height();

		var stringoffset = 100;
		var scrollgoffset = 250;
		var about_app_flex_offset = $(".about_app_flex").offset().top;
		var about_app_flex_height = $(".about_app_flex").height();

		if ((about_app_flex_offset <= scrollPosition + windowHeight) && (about_app_flex_offset + about_app_flex_height > scrollPosition)) {

			//console.log('Блок видим');
			//console.log (about_app_flex_offset);
			//console.log ();

			var nizScreen = scrollPosition + windowHeight;

			var startBlock = about_app_flex_offset + scrollgoffset;
			var endBlock = about_app_flex_offset + about_app_flex_height;

			//console.log('nizScreen' + nizScreen);
			//console.log('startBlock' + startBlock);

			if (startBlock < nizScreen) {
				//console.log('1');
				_slider_scroll(1);
			}
			if (startBlock < (nizScreen - stringoffset)) {
				//console.log('2');
				_slider_scroll(2);
			}
			if (startBlock < (nizScreen - stringoffset * 2)) {
				//console.log('3');
				_slider_scroll(3);
			}
			if (startBlock < (nizScreen - stringoffset * 3)) {
				//console.log('4');
				_slider_scroll(4);
			}
			if (startBlock < (nizScreen - stringoffset * 4)) {
				//console.log('5');
				_slider_scroll(5);
			}


		} else {

			//console.log('Блок невидим');
		}
		}
	}

//	CsonScroll();
//	$(document).on("scroll", CsonScroll);
//	$(window).resize(CsonScroll);

	function _slider_scroll(needed_link) {
		$(".about_app_item").removeClass("active");
		$('.js_bullet').removeClass("active");
		$('.js_bullet[data-img="' + needed_link + '"]').addClass("active");
		$('.about_app_item[data-img="' + needed_link + '"]').addClass("active");
		$('.about_app_img').removeClass("active");
		$('.about_app_img').removeClass("next");
		$('.about_app_img').removeClass("prev");
		$('.about_app_img').removeClass("next_second");
		$('.about_app_img').removeClass("prev_second");
		$('.about_app_img').removeClass("prev_second_op");
		$('.about_app_img').removeClass("next_second_op");

		needed_link_prev_second = needed_link - 2;
		needed_link_prev = needed_link - 1;
		needed_link_next = needed_link + 1;
		needed_link_next_second = needed_link + 2;

		let i = 1;
		while (i < needed_link_prev_second) {

			$(".about_app_img_counter").find(".a" + i).addClass("prev_second_op");
			i++;
		}

		let n = 10;
		while (n > needed_link_next_second) {

			$(".about_app_img_counter").find(".a" + n).addClass("next_second_op");
			n--;
		}

		$(".about_app_img_counter").find(".about_app_img").removeClass("prev_second");
		$(".about_app_img_counter").find(".about_app_img").removeClass("prev");
		$(".about_app_img_counter").find(".about_app_img").removeClass("active");
		$(".about_app_img_counter").find(".about_app_img").removeClass("next");
		$(".about_app_img_counter").find(".about_app_img").removeClass("next_second");

		$(".about_app_img_counter").find(".a" + needed_link_prev_second).addClass("prev_second");
		$(".about_app_img_counter").find(".a" + needed_link_prev_second).removeClass("prev_second_op");
		$(".about_app_img_counter").find(".a" + needed_link_prev).addClass("prev");
		$(".about_app_img_counter").find(".a" + needed_link_prev).removeClass("prev_second_op");

		//Текущий
		$(".about_app_img_counter").find(".a" + needed_link).addClass("active");
		$(".about_app_img_counter").find(".a" + needed_link).removeClass("next");
		$(".about_app_img_counter").find(".a" + needed_link).removeClass("next_second");
		$(".about_app_img_counter").find(".a" + needed_link).removeClass("next_second_op");
		$(".about_app_img_counter").find(".a" + needed_link).removeClass("prev");
		$(".about_app_img_counter").find(".a" + needed_link).removeClass("prev_second");
		$(".about_app_img_counter").find(".a" + needed_link).removeClass("prev_second_op");

		//Следующий
		$(".about_app_img_counter").find(".a" + needed_link_next).addClass("next");
		$(".about_app_img_counter").find(".a" + needed_link_next).removeClass("next_second_op");
		$(".about_app_img_counter").find(".a" + needed_link_next_second).addClass("next_second");
		$(".about_app_img_counter").find(".a" + needed_link_next_second).removeClass("next_second_op");

	}
	
	//Клик по тексту

	$(".js-about_app_item").click(function () {

		var needed_link = parseInt($(this).data("img"));

		_slider_scroll(needed_link);

	});	
		
	//Клик по стрелке

	$(".js-next").click(function () {

		var needed_link = parseInt($('.about_app_item.active').data("img")) + 1;
		if (needed_link < count_of_slide)
		{	_slider_scroll(needed_link); }
		else
		{	_slider_scroll(count_of_slide);}
		});	

		$(".js-prev").click(function () {
		var needed_link = parseInt($('.about_app_item.active').data("img")) - 1;
		if (needed_link > 0)
		{	_slider_scroll(needed_link); }
		
	
	});	
	
	//Клик по точке

	$(".js_bullet").click(function () {

		var needed_link = parseInt($(this).data("img"));

		_slider_scroll(needed_link);

	});
	
	}
	//***************** / Слайдер со скроллом********************************


	$(".site-menu-cat > li > a").hover(function () {
		var needed_link = $(this).data("img");
		$(".menu-data__img-menu").find("[data-img='" + needed_link + "']").addClass("hover");
	}, function () {
		var needed_link = $(this).data("img");
		$(".menu-data__img-menu").find("[data-img='" + needed_link + "']").removeClass("hover");
	});

	$('.js-go-to').on('click', function (e) {
		e.preventDefault();

		var hash = $(this).attr('href');
		$('html, body').stop().animate({
			'scrollTop': $(hash).offset().top
		}, 500, 'swing');
	});

	function onScroll() {
		if ($('.tooltip__pop-up').length > 0) {
			var tooltip = $('.tooltip__pop-up');
			var windowElem = $(window);
			var tooltipHeight = tooltip.outerHeight();
			var windowHeight = windowElem.height();
			var scrollTop = windowElem.scrollTop();
			var tooltopBottom = tooltip.offset().top + tooltipHeight;
			var windowBottom = scrollTop + windowHeight;

			if (tooltopBottom > windowBottom - 100) {
				tooltip.css({
					top: 'auto',
					bottom: '110%'
				})
			}

			if (tooltip.offset().top < windowElem.scrollTop()) {
				tooltip.css({
					top: '110%',
					bottom: 'auto'
				})
			}
		}
	}

	$(document).on("scroll", onScroll);
	onScroll();

	// Скоролл по якорям и обработка ссылок с якорем

	$("body").on("click", ".js-scroll", function (e) {
		e.preventDefault();
		var target = this.hash;
		var blockHeight = 0;
		$("body").css('margin-top', '-' + 0 + 'px');
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - blockHeight
		}, 500, 'swing', function () {
			//window.location.hash = target;
		});

	});

	//onScroll();
	$(document).on("scroll", onScroll);
	$(window).resize(onScroll);

	function onScroll(event) {

		if ($(window).width() < 768) {

			var promoHeight = 0;

			if ($('.promo ').length > 0) {
				var promoHeight = $(".promo").outerHeight(true);

			}

			var scrollPosition = $(document).scrollTop();
			var windowHeight = $(window).height();

			var FormOffset = 0;

			if ($('.js-form-offset ').length > 0) {
				var FormOffset = $(".js-form-offset").offset().top;

			}

			if ($('.js-form-offset').length > 0) {

				if (FormOffset <= scrollPosition + windowHeight) {
					$('.promo_btn').addClass('hide');
				} else {
					$('.promo_btn').removeClass('hide');
				}
			}
			if (scrollPosition == 0) {
				$('.promo_btn').removeClass('hide');
			}

		}
	}

	// Calculate
	$(function () {

		var $amountOnAccountSlider = $("#amountOnAccountSlider");
		var $ostatok_deposite_Slider = $('#ostatok_deposite_Slider'); // Срок


		var $summValue = $('.js-summ-val');
		var $termValue = $('.js-term-val');

		var $endPercent = $('.js-end-percent');
		var $endSumm = $('.js-end-summ');

		var $monthlyReplenishment = false;

		var $amountOnAccountStartValue = 30000;
		var $amountOnAccountMinValue = 0;
		var $amountOnAccountMaxValue = 200000;

		var $termStartValue = 50000;
		var $termMinValue = 0;
		var $termMaxValue = 1000000;

		var $CashbackStart = 10000; // Сумма, с которой начисляется кешбек на покупки
		var $CashbackMax = 3000; // Сумма, с которой начисляется кешбек на покупки

		var $PercentStart = 30000; // Сумма покупок, с которой начисляется другой процент на накопительный счет
		var $PercentLow = 4.5; // Сумма, с которой начисляется процент на счет
		var $PercentHight = 5; // Сумма, с которой начисляется процент на счет


		function formatInputValue(value) {
			return value.replace(/[^0-9]/g, '').trim();
		}

		function formatOutputValue(value) {
			return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',');
		}

		function setResult(PurchasesPerMonth, ostatok_deposite, IsStart) {

			var PurchasesPerMonth = parseInt(PurchasesPerMonth);
			var ostatok_deposite = parseInt(ostatok_deposite);
			var itog_cashback = 0;

			//Считаем кешбек

			if (PurchasesPerMonth < $CashbackStart) {
				itog_cashback = 0;
			} else {

				//ЕСЛИ(И(B2>=30000;B2*1,5%<=3000);B2*1,5%;ЕСЛИ(B2*1,5%>=3000;3000;B2*1%)))

				//ЕСЛИ ИСТИНА(B2>=30000;B2*1,5%<=3000)
				if ((PurchasesPerMonth >= $PercentStart) && ((PurchasesPerMonth / 100 * 1.5) <= $CashbackMax)) {
					//то B2*1,5%

					itog_cashback = parseInt(PurchasesPerMonth / 100 * 1.5);
				} else {
					//иначе ЕСЛИ(B2*1,5%>=3000;3000;B2*1%)
					if ((PurchasesPerMonth / 100 * 1.5) >= $CashbackMax) {
						itog_cashback = 3000;

					} else {
						itog_cashback = parseInt(PurchasesPerMonth / 100 * 1);
					}

				}

			}

			//Процент на накопительном зависит от трат

			if (PurchasesPerMonth < $PercentStart) {
				itog_deposite = parseInt(($PercentLow / 12 / 100) * Number(ostatok_deposite));
			} else {
				itog_deposite = parseInt(($PercentHight / 12 / 100) * Number(ostatok_deposite));
			}

			//return ((percent / 12) * Number(summ));


			//while (i <= (Number(ostatok_deposite))) {


			//$endPercent.text(formatOutputValue(perc_summ_itog_final));
			$endSumm.text(formatOutputValue(itog_cashback + itog_deposite));

		}

		$amountOnAccountSlider.slider({
			range: "max",
			min: $amountOnAccountMinValue,
			max: $amountOnAccountMaxValue,
			step: 5000,
			value: $amountOnAccountStartValue,
			slide: function (event, ui) {
				var $value = ui.value;
				var $term = $ostatok_deposite_Slider.slider('value');

				// get old value
				var previousVal = parseInt($(this).data("value"));

				if (isNaN(previousVal)) {
					previousVal = parseInt($amountOnAccountStartValue);
				}

				// save new value
				$(this).data({
					"value": parseInt(ui.value)
				});

				if (previousVal > parseInt(ui.value)) {
					// value decreased


					//console.log('sumAccount left ' + $value  + 'rub');
				}
				// value increased
				else {}

				setResult($value, $term, 0);

				$summValue.val(formatOutputValue($value));

			}
		});

		$ostatok_deposite_Slider.slider({
			range: "max",
			step: 5000,
			min: $termMinValue,
			max: $termMaxValue,
			value: $termStartValue,
			slide: function (event, ui) {
				var $value = ui.value;
				var $amountOnAccount = $amountOnAccountSlider.slider('value'); // Начальный деп


				// get old value
				var previousVal = parseInt($(this).data("value"));

				if (isNaN(previousVal)) {
					previousVal = parseInt($termStartValue);
				}

				// save new value
				$(this).data({
					"value": parseInt(ui.value)
				});

				if (previousVal > parseInt(ui.value)) {
					// value decreased

				}
				// value increased
				else {

					//console.log('timeAccount right ' + $value  + 'm');
				}

				setResult($amountOnAccount, $value, 0);
				$termValue.val(formatOutputValue($value));
			}
		});

		function focusInputFirmated() {
			var $value = $(this).val();
			var $foramtValue = formatInputValue($value);
			$(this).val($foramtValue);
		}

		function focusOutputFirmated() {
			var $value = $(this).val();
			var $foramtValue = formatOutputValue($value);
			$(this).val($foramtValue);
		}

		$summValue.on('input keypress', function () {
			var $value = $(this).val();
			var $foramtValue = formatInputValue($value);
			var $term = $ostatok_deposite_Slider.slider('value');

			if ($foramtValue < $amountOnAccountMinValue) {
				$foramtValue = $amountOnAccountMinValue;
			}

			if ($foramtValue > $amountOnAccountMaxValue) {
				$foramtValue = $amountOnAccountMaxValue;
			}
			$(this).val($foramtValue);

			if ($foramtValue == '') {
				$foramtValue = 0;
			}

			$amountOnAccountSlider.slider({
				value: $foramtValue
			});
			setResult($foramtValue, $term, 0);
		});

		$summValue.focus(focusInputFirmated);
		$summValue.focusout(focusOutputFirmated);

		$termValue.on(' input keypress', function () {
			var $value = $(this).val();
			var $foramtValue = formatInputValue($value);
			var $amountOnAccount = $amountOnAccountSlider.slider('value');

			if ($foramtValue < $termMinValue) {
				$foramtValue = $termMinValue;
			}

			if ($foramtValue > $termMaxValue) {
				$foramtValue = $termMaxValue;
			}

			$(this).val($foramtValue);

			if ($foramtValue == '') {
				$foramtValue = 0;
			}

			$ostatok_deposite_Slider.slider({
				value: $foramtValue
			});
			setResult($amountOnAccount, $foramtValue, 0);

		});

		$termValue.focus(focusInputFirmated);
		$termValue.focusout(focusOutputFirmated);

		setResult($amountOnAccountStartValue, $termStartValue, 1);

	});
	//v 13.01.20//
});







	
