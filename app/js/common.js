$(function() {

    hidePopapp();
    initSlickCarousel();
    getCategoryId();
    getCurrentItem();
    goToItemSlider();


        if($(window).width() < 768) {
            initSlickNavMenu();
        } else {
            $('.slick-nav-menu').slick('unslick');
        }
        $(window).resize(function(){
            if($(window).width() < 768) {
                initSlickNavMenu();
            } else {
                $('.slick-nav-menu').slick('unslick');
            }
        });

});

function hidePopapp(e) {
    $('#hide-popupp').on('click', function (e) {
        $('.main-content-popapp').addClass('hiden');
        $('.main-content').addClass('main-content-active');
    })
}
function initSlickCarousel() {
    jQuery('.slick-slider').slick({
        slidesToScroll: 1,
        // centerMode: true,
        adaptiveHeight: true,
        // variableWidth: true,
        infinite: true,
        dots: false,
        arrows: true,
        // rtl: true,
        // autoplay: true,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>',
        // speed: 2000,
        slidesToShow: 1
        // infinite: true,
        // adaptiveHeight: true,
        // rows: 0,
        // prevArrow: '<span class="slick-prev"></span>',
        // nextArrow: '<span class="slick-next"></span>',
        // responsive: [{
        //     breakpoint: 992,
        //     settings: {
        //         slidesToScroll: 1,
        //         centerMode: true,
        //         adaptiveHeight: true,
        //         variableWidth: true,
        //         infinite: true,
        //         dots: true,
        //         arrows: false,
        //         autoplay: true,
        //         // speed: 2000,
        //         slidesToShow: 1
        //     }
        // }]
    });
}
function initSlickNavMenu() {
    jQuery('.slick-nav-menu').slick({
        slidesToScroll: 2,
        // centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        infinite: true,
        dots: false,
        arrows: false,
        // rtl: true,
        // autoplay: true,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>',
        // speed: 2000,
        slidesToShow: 4,
        // infinite: true,
        // adaptiveHeight: true,
        // rows: 0,
        // prevArrow: '<span class="slick-prev"></span>',
        // nextArrow: '<span class="slick-next"></span>',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                // centerMode: true,
                // adaptiveHeight: true,
                // variableWidth: true,
                infinite: true,
                // dots: true,
                arrows: false,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 3
            }
        }]
    });
}

//get category id and set current item
function getCategoryId() {
    $('span[data-slide]').click(function(e) {
        e.preventDefault();


        $('.slick-nav-menu span').removeClass('active');
        $(this).addClass('active');


        var slideno = $(this).data('slide');
        // console.log(slideno);
        var searchLine = '.slick-slider li[data-category="' + slideno + '"]';
        var dataIndexEll = $(searchLine).data('data', 'slick-index');
        var datIndexId = dataIndexEll[1]['dataset']['slickIndex'];
        // console.log(dataIndexEll);
        // console.log(datIndexId);
        $('.slick-slider').slick('slickGoTo', datIndexId);


    });
}

//get current item and set activ class to current category
function getCurrentItem() {
    $('.slick-slider').on('afterChange', function(e, slick, currentSlide){
        // console.log(currentSlide);
        var currentSlideEll = '.slick-slider li[data-slick-index="' + currentSlide + '"]';
        var dataCategory = $(currentSlideEll).data('data', 'category')[0]['dataset']['category'];
        // console.log(dataCategory);
        $('.slick-nav-menu span').removeClass('active');
        var itemDataId = '.slick-nav-menu span[data-slide="' + dataCategory + '"]';
        $(itemDataId).addClass('active');



    });
}

//go to item slid from popapp page
function goToItemSlider() {
    $('#items .item a').on('click', function (e) {
        e.preventDefault();
        var dataItemId = $(this).data('data','item-id')[0]['dataset']['itemId'];

        var searchLine = '.slick-slider li[data-item-id="' + dataItemId + '"]';
        var dataIndexEll = $(searchLine).data('data', 'slick-index');

        var datIndexId = dataIndexEll[1]['dataset']['slickIndex'];

        var datIndexIdPlus = Number(datIndexId);
        $('.slick-slider').slick('slickGoTo', datIndexIdPlus);
        $('.main-content-popapp').addClass('hiden');
        $('.main-content').addClass('main-content-active');

        // console.log(dataItemId);
        // console.log(datIndexId);
        // console.log(datIndexIdPlus);
    });
}

