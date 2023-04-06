$("img.img-back").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

$('.solution__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    appendArrows: $('.slick-slider-nav'),
    appendDots: $('.slick-slider-dots'),
    prevArrow: "<button class='slick-prev solution__btns'><div class='outline'><img src='icons/left.svg' alt='left'></div></button>",
    nextArrow: "<button class='slick-next solution__btns'><div class='outline'><img src='icons/right.svg' alt='right'></div></button>",
});