(function initMainSlider() {
    if( $('div').is('.js-main-slider') ) {
        $('.js-main-slider').slick({
            arrows: false,
            dots: true,
            fade: true,
            speed: 0,
            autoplay: true,
            autoplaySpeed: 4000,
            // appendArrows: '.dots-wrapper_main-slider-js',
            appendDots: '.dots-main-slider-js',
            asNavFor: '.js-bg-main',
            pauseOnHover: false,
            pauseOnFocus: false,
            prevArrow: '<button type="button" class="slick-prev slick-main-slider">' +
                '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M18.44 25.3334C18.2408 25.3341 18.044 25.2901 17.864 25.2047C17.684 25.1193 17.5255 24.9947 17.4 24.84L10.96 16.84C10.7639 16.6015 10.6567 16.3022 10.6567 15.9934C10.6567 15.6845 10.7639 15.3853 10.96 15.1467L17.6267 7.14671C17.853 6.87442 18.1782 6.70319 18.5308 6.67068C18.8833 6.63817 19.2344 6.74706 19.5067 6.97338C19.779 7.19969 19.9502 7.52491 19.9827 7.87748C20.0152 8.23005 19.9063 8.58109 19.68 8.85337L13.72 16L19.48 23.1467C19.643 23.3424 19.7466 23.5807 19.7784 23.8335C19.8103 24.0862 19.7691 24.3428 19.6597 24.5728C19.5502 24.8028 19.3772 24.9967 19.1611 25.1315C18.9449 25.2663 18.6947 25.3363 18.44 25.3334Z" fill="#525151"/>\n' +
                '</svg>\n' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-main-slider">' +
                '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M13.3334 25.3333C13.0218 25.3339 12.7199 25.2254 12.48 25.0267C12.345 24.9147 12.2334 24.7773 12.1516 24.6221C12.0698 24.467 12.0194 24.2973 12.0033 24.1226C11.9872 23.948 12.0057 23.7719 12.0578 23.6044C12.1098 23.437 12.1944 23.2814 12.3067 23.1467L18.28 16L12.52 8.84C12.4093 8.70362 12.3266 8.54669 12.2767 8.37824C12.2267 8.20979 12.2106 8.03313 12.2292 7.85843C12.2478 7.68372 12.3007 7.51441 12.385 7.36023C12.4692 7.20605 12.5831 7.07003 12.72 6.96C12.858 6.83862 13.0195 6.74706 13.1946 6.69108C13.3696 6.63509 13.5543 6.61589 13.7371 6.63467C13.9199 6.65345 14.0968 6.70981 14.2568 6.80021C14.4167 6.89061 14.5563 7.01311 14.6667 7.16L21.1067 15.16C21.3028 15.3986 21.41 15.6978 21.41 16.0067C21.41 16.3155 21.3028 16.6148 21.1067 16.8533L14.44 24.8533C14.3063 25.0147 14.1364 25.1422 13.9441 25.2256C13.7518 25.309 13.5426 25.3459 13.3334 25.3333Z" fill="#525151"/>\n' +
                '</svg>' +
                '</button>',
        });
    }
    $('.js-bg-main').slick({
        asNavFor: '.js-main-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false,
    });
})();
(function initAccountSlider() {
    if ( $('div').is('.accounts-list') ) {
        $('.accounts-img-slider_js').slick({
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            appendArrows: '.accounts-arrow_desctop',
            asNavFor: '.accounts-slider-js',
            prevArrow: '<button type="button" class="slick-prev slick-main-arrow slick-prev-main">' +
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M13.83 19C13.6806 19.0005 13.533 18.9675 13.398 18.9035C13.263 18.8395 13.1441 18.746 13.05 18.63L8.22 12.63C8.07292 12.4511 7.99251 12.2266 7.99251 11.995C7.99251 11.7634 8.07292 11.5389 8.22 11.36L13.22 5.36C13.3897 5.15578 13.6336 5.02736 13.8981 5.00298C14.1625 4.9786 14.4258 5.06026 14.63 5.23C14.8342 5.39974 14.9626 5.64365 14.987 5.90808C15.0114 6.1725 14.9297 6.43578 14.76 6.64L10.29 12L14.61 17.36C14.7323 17.5068 14.81 17.6855 14.8338 17.8751C14.8577 18.0646 14.8268 18.257 14.7447 18.4296C14.6627 18.6021 14.5329 18.7475 14.3708 18.8486C14.2087 18.9497 14.021 19.0022 13.83 19Z" fill="white"/>\n' +
                '</svg>' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-main-arrow slick-next-main">' +
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10 19C9.76636 19.0004 9.53992 18.9191 9.36001 18.77C9.25875 18.686 9.17505 18.5829 9.1137 18.4666C9.05235 18.3502 9.01455 18.2229 9.00248 18.0919C8.9904 17.961 9.00428 17.8289 9.04333 17.7033C9.08237 17.5777 9.14581 17.461 9.23001 17.36L13.71 12L9.39001 6.62997C9.30695 6.52768 9.24492 6.40999 9.20748 6.28365C9.17005 6.15731 9.15796 6.02482 9.1719 5.89379C9.18584 5.76276 9.22553 5.63578 9.28871 5.52014C9.35188 5.40451 9.43729 5.30249 9.54001 5.21997C9.64348 5.12893 9.76464 5.06027 9.89591 5.01828C10.0272 4.97629 10.1657 4.96189 10.3028 4.97597C10.4399 4.99005 10.5726 5.03232 10.6926 5.10013C10.8125 5.16793 10.9172 5.2598 11 5.36997L15.83 11.37C15.9771 11.5489 16.0575 11.7733 16.0575 12.005C16.0575 12.2366 15.9771 12.461 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.4581 18.9192C10.3138 18.9817 10.1569 19.0094 10 19Z" fill="white"/>\n' +
                '</svg>' +
                '</button>',
            pauseOnHover: false,
            pauseOnFocus: false,
            focusOnSelect: true,
        });
        $('.accounts-slider-js').slick({
            arrows: false,
            dots: false,
            fade: true,
            initialSlide: 1,
            asNavFor: '.accounts-img-slider_js',
            pauseOnHover: false,
            pauseOnFocus: false,
            appendArrows: '.arrow-slider-wrapper_account-desctop',
            prevArrow: '<button type="button" class="slick-prev slick-account-arrow slick-main-arrow slick-prev-main">' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M14.2388 12L15 11.2137L8.38061 4.37607L8 4L7.61939 4.37607L0.999999 11.2137L1.76123 12L8 5.55556L14.2388 12Z" fill="white"/>\n' +
                '</svg>\n' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-account-arrow slick-main-arrow slick-next-main">' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M14.2388 4L15 4.78632L8.38061 11.6239L8 12L7.61939 11.6239L0.999999 4.78632L1.76123 4L8 10.4444L14.2388 4Z" fill="white"/>\n' +
                '</svg>' +
                '</button>',
        });
    }
})();

function onSliderInit(event, slick) {
    var countSlide = $(this).siblings('.dots-wrapper').find('.slick-dots li:last-child button').text();
    var activeSlide = $(this).siblings('.dots-wrapper').find('.slick-dots .slick-active button').text();

    $(this).parents('.wrapper').find('.current-slide').text(activeSlide);
    $(this).parents('.wrapper').find('.number-of-slides').text(countSlide);
};
