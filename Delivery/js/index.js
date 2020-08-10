$(document).ready(function(){
	$('.review__slider').slick({
			//centerMode: true,
			//centerPadding: '60px',
			slidesToShow: 1,
			prevArrow: '<button type="button" class="slick-prev"><img src="img/LeftArrow.png"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/RightArrow.png"></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						//arrows: false,
						//centerMode: true,
						//centerPadding: '40px',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						//arrows: false,
						//centerMode: true,
						//centerPadding: '40px',
						slidesToShow: 1
					}
				}
			] 
	});
	$("input[name=phone]").mask("+7(999) 999-99-99");
});
document.addEventListener('DOMContentLoaded', function(){
	//hamburger
	let hamburger = document.querySelector('.hamburger'),
		navBar = document.querySelector('.header__links');

	hamburger.addEventListener('click', function(){
		if (hamburger.classList.contains('hamburger_active')){
			hamburger.classList.remove('hamburger_active');
			navBar.classList.remove('header__links_active');
		} else{
			hamburger.classList.add('hamburger_active');
			navBar.classList.add('header__links_active');
		}
	});

	
	//выпадающее меню
	let links = document.querySelectorAll('.promo_link');

	links.forEach(link => {
		link.addEventListener('click', function(){
			hamburger.classList.remove('hamburger_active');
			navBar.classList.remove('header__links_active');
		})
	});

	//validation
	let forms = document.querySelectorAll('.feed-form');

	console.log(forms);

	forms.forEach(form => {
		let FormFields = form.querySelectorAll('.feed-form__field'),
			button = form.querySelector('.form-button');

		button.addEventListener('click', function(e){
			e.preventDefault();

			FormFields.forEach(item => {
				if (!item.value) {
					item.classList.add('error')
				}
			})
			console.log(validationResult)
			if(validationResult[0] || validationResult[1] || validationResult[2]){
				if (document.querySelector('.overlay').classList.contains('overlay_active')){
					document.querySelector('.overlay').classList.remove('overlay_active');
					document.querySelector('.modal').classList.remove('modal_active');
				}
				document.querySelector('.overlay').classList.add('overlay_active');
				document.querySelector('.modal_thanks').classList.add('modal_active');
			}
		});

		let formName  = form.querySelector('.name'),
			formPhone = form.querySelector('.phone'),
			formEmail = form.querySelector('.email'),
			validationResult = [false, false, false]

		formName.addEventListener('blur', function(){
			let error = form.querySelector('.error1');
			if (!formName.value) {
				formName.classList.add('error')
			}
			else if (formName.value.length < 2){
				formName.classList.add('error')
			} else if (!isNaN(formName.value)){
				formName.classList.add('error')
			}
			else if(formName.value || formName.classList.contains('error')) {
				formName.classList.remove('error')
				validationResult[0] = true;
			}
		})

		formPhone.addEventListener('blur', function(){
			if (formPhone.value != '') {
				formPhone.classList.remove('error')
				validationResult[1] = true;
			} else {
				formPhone.classList.add('error')
			}
		})

		formEmail.addEventListener('blur', function(){
			if (formEmail.value != '') {
				formEmail.classList.remove('error')
				validationResult[2] = true;
			} else {
				formEmail.classList.add('error')
			}
		})
	})

	//modal
	let modalButton = document.querySelector('.button_header'),
		modalButton1 = document.querySelector('.button_footer'),
		close = document.querySelectorAll('.modal__close'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal');
	
	modalButton.addEventListener('click', function(){
		overlay.classList.add('overlay_active');
		modal.classList.add('modal_active');
		document.body.style.overflow = 'hidden';
	});

	modalButton1.addEventListener('click', function(){
		overlay.classList.add('overlay_active');
		modal.classList.add('modal_active');
		document.body.style.overflow = 'hidden';
	});

	close.forEach(i => {
		i.addEventListener('click', function(){
			if (i.id == "thanks"){
				overlay.classList.remove('overlay_active');
				document.querySelector('.modal_thanks').classList.remove('modal_active');
				document.body.style.overflow = 'visible';
			}else{
				overlay.classList.remove('overlay_active');
				modal.classList.remove('modal_active');
				document.body.style.overflow = 'visible';
			}
		});
	})

	function submitHandler(e) {
		e.preventDefault();
	  
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() { 
		  console.log("readyState=", this.readyState, "statis=", this.status);
		  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			  // success, show this.responseText here
			  console.log("SUCCESS", this);
		  }
		}
		
		request.open(this.method, this.action, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		var data = new FormData(this);
		for (var key of data.keys())
		  console.log(key, data.get(key));
		  
		request.send(data);
	  }
	  
	  document.querySelectorAll("form").forEach(form =>
		form.addEventListener("submit", submitHandler)
	  );
})