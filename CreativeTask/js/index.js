document.addEventListener('DOMContentLoaded', function(){
    let sum = document.getElementById('sum'),
        month = document.getElementById('time')

    document.getElementById("money").oninput = function() {
        this.style.background = 'linear-gradient(to right, #FEE600 0%, #FEE600 ' + this.value + '%, #E1E1E3 ' + this.value + '%, #E1E1E3 100%)';
        let x = this.value*19100+90000;
        sum.textContent = (x < 1000000) ? `${(x)/1000} 000 ₽` : `${Math.floor((x)/1000000)} ${Math.floor((x)/10000)} 000 ₽` ;
    };

    document.getElementById("month").oninput = function() {
        let x = (this.value < 30) ? (+this.value-7) : (this.value > 48) ? (+this.value+35) : this.value*100/60-10;
        this.style.background = 'linear-gradient(to right, #FEE600 0%, #FEE600 ' + x + '%, #E1E1E3 ' + x + '%, #E1E1E3 100%)';
        month.textContent = (+this.value)+" мес.";
    };

    window.addEventListener('scroll', function() {
        if (pageYOffset > 627 || pageYOffset > 3332){
            document.querySelector('.btn_mob_fixed').style.opacity = 1;
        }
        if (pageYOffset < 627 || (pageYOffset > 2353 && pageYOffset < 3332) ){
            document.querySelector('.btn_mob_fixed').style.opacity = 0;
        }
    });
});

$(document).ready(function(){
    if (document.documentElement.clientWidth < 1025){
        $('.mobile__slider').on('init', function(event, slick){
            var $items = slick.$dots.find('li');
            $items.addClass('transparent-circle');
            $items.find('button').remove();
         });
    }
    $('.mobile__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<div class='prev'><img src='img/left.svg' class='prev__img' alt='prev'></div>",
        nextArrow: "<div class='next'><img src='img/right.svg' class='next__img' alt='next'></div>",
        responsive: [
            {
                breakpoint: 1325,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '180px',
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '180px',
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 690,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '200px',
                    dots: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 476,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '70px',
                    dots: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    dots: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 374,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    dots: true,
                    slidesToShow: 1
                }
            },
            {
              breakpoint: 321,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                dots: true,
                slidesToShow: 1
              }
            },
          ]
      });
  });

