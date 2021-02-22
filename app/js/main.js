$(function(){

    $('.shop__filter-btn').on('click', function(){
        $('.shop__filter').slideToggle();
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.related-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/angel-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/angel-next.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.details-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
        $(this).addClass('details-tabs__top-item--active');

        $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
        $($(this).attr('href')).addClass('details-tabs__content-item--active');
    });

    $('.details-item__num').styler();

    $('.details-slide__thumb').slick({
        asNavFor: '.details-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });
    $('.details-slide__big').slick({
        asNavFor: '.details-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    draggable: true,
                }
            },
        ]
    });


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

    var mixer1 = mixitup('.design-content', {
        
    });

});