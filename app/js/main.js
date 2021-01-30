$(function(){

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true
    });

    $('[video]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    var mixer1 = mixitup('.product__content', {
        
    });

});