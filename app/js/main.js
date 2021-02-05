$(function(){

    $('.star').rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $('.shop__product-star').rateYo({
        starWidth: "17px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $('.filter__price-input').ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 100.00,
        to: 500.00,
        prefix: "$",
        onStart: function (data){
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
        onChange: function (data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
    });

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