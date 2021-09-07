$(document).ready(function () {
    $('.pincode__slider').slick({
        dots: true,
        prevArrow: '<div class="slick-prev"><img src="img/icons/left.svg" alt="left"></div>',
        nextArrow: '<div class="slick-next"><img src="img/icons/right.svg" alt="right"></div>',
    });
    
    let menu = document.querySelector('.menu'),
        header = document.querySelector('.header');

    if (document.documentElement.clientWidth > 769) {
        window.addEventListener('scroll', function(){

            console.log(window.pageYOffset)
            if (header.getBoundingClientRect().bottom < 0) {
                menu.classList.add('menu_fixed');
                header.classList.add('header_fixed');
            }else if (header.getBoundingClientRect().bottom > 0){
                menu.classList.remove('menu_fixed');
                header.classList.remove('header_fixed');
            }
        });
    }

    let burger = document.querySelector('.header__right'),
        close = document.querySelector('.close');

    burger.addEventListener('click', function(e){
        console.log(e.target)
        menu.classList.add('menu_active')
    })
    close.addEventListener('click', function(e){
        console.log(e.target)
        menu.classList.remove('menu_active')
    })

    let moreBtns = document.querySelectorAll('.first-item__link');
    let text = document.querySelectorAll('.more_info_text');
    let show = document.querySelectorAll('.show');
    let hidden = document.querySelectorAll('.hide');

    moreBtns.forEach((btn) => {
        btn.addEventListener('click', function(e){
            e.preventDefault();
            if (text[btn.id-1].classList.contains('more_info_text_active')){
                text[btn.id-1].classList.remove('more_info_text_active');
                hidden[btn.id-1].classList.remove('hide_active');
                show[btn.id-1].classList.remove('show_disable');
            }else{
                text[btn.id-1].classList.add('more_info_text_active');
                hidden[btn.id-1].classList.add('hide_active');
                show[btn.id-1].classList.add('show_disable');

            }
        })
    })

    let dotted = document.querySelectorAll('.dotted'),
        more_info = document.querySelectorAll('.more_info');

    dotted.forEach((dott) => {
        dott.addEventListener('mouseover', function(e){
            e.preventDefault();
            more_info[dott.id-1].classList.add('more_info_active')
        })
        dott.addEventListener('mouseout', function(e){
            e.preventDefault();
            more_info[dott.id-1].classList.remove('more_info_active')
        })
    })
})