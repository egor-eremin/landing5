import __CONFIG_GLOBAL from '../../../site.config.json'; // глобальный файл конфигурации сайта
import __FULL_CONTENT from '../../../build/content.json'; // весь сгенерированный контент

import '@babel/polyfill';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;
import AOS from "aos";
import Parallax from 'parallax-js';
import 'slick-carousel';
import 'select2';
import 'jquery-validation';
import 'jquery-mask-plugin';
import 'magnific-popup';

require('./blocks/dotdot/jquery.dotdotdot.min');
require('./vendor/jquery.animateNumber.min');
require('./vendor/jquery.viewportchecker.min');
require('./blocks/slicknav/jquery.slicknav.min');
require('./blocks/forms');
require('./blocks/news');
require('./blocks/table');
require('./blocks/tradeview');
require('./blocks/footer');
require('./blocks/calculator');
// require('./blocks/select');
require('./blocks/index');
require('./blocks/about');
require('./blocks/market');
require('./blocks/licenses');
// require('./blocks/benefits');

getCountry();

$(document).on('click', '.js-btn-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});

(function switchesCountry(){
    $.get('https://api.ipstack.com/check?access_key=9ac3ab92ce4396c8da8c45f1d3c524e6', function(data){
        // debugger;
        let curCountry = data.country_code.toLowerCase();
        let referrer = document.referrer;
        let referrerHostname = returnHostname(referrer)
        let curHostname = location.hostname

        if (localStorage.getItem('lang')) {

            if ( referrer ) {
                localStorage.setItem('lang', definesLanguage());
            } else {
                if ( definesLanguage() != localStorage.getItem('lang') ) {
                    window.location = returnNewLocation(window.location, localStorage.getItem('lang'));
                }
            }
        } else {
            localStorage.setItem('lang', definesLanguage());
            if (definesLanguage() == 'en') {
                if (!(referrer && curHostname == referrerHostname)) {
                    switch (curCountry) {
                        // case 'es':
                        // case 'de':
                        // case 'fr':
                        // case 'it':
                        //     localStorage.setItem('lang', curCountry);
                        //     window.location = returnNewLocation(window.location, curCountry);
                        //     break;
                        // case 'ru':
                        // case 'ua':
                        // case 'by':
                        //     localStorage.setItem('lang', 'ru');
                        //     window.location = returnNewLocation(window.location, 'ru');
                        //     break;
                        // case 'cn':
                        //     localStorage.setItem('lang', 'ch');
                        //     window.location = returnNewLocation(window.location, 'ch');
                        case 'tr':
                            localStorage.setItem('lang', 'tr');
                            window.location = returnNewLocation(window.location, 'tr');
                    }
                }
            }

        }



    })
})();

function definesLanguage() {
    let pageUrl = location.pathname.split('/');
    let curLanguage;
    for (let i = 0; i < pageUrl.length; i++) {
        if (pageUrl[i] == 'ru' || pageUrl[i] == 'es' || pageUrl[i] == 'de' || pageUrl[i] == 'pl' || pageUrl[i] == 'tr' || pageUrl[i] == 'fr' || pageUrl[i] == 'it' || pageUrl[i] == 'ch') {
            curLanguage = pageUrl[i];
            break;
        } else {
            curLanguage = "en";
        }
    }

    return curLanguage;
}

function returnNewLocation(curLocation, lang) {
    let arrPathname = curLocation.pathname.split('/');
    let newPathname;

    if (lang == 'en') {

        if (arrPathname.includes('ru') || arrPathname.includes('es') || arrPathname.includes('de') || arrPathname.includes('pl') || arrPathname.includes('tr') || arrPathname.includes('fr') || arrPathname.includes('it') || arrPathname.includes('zh')) {
            if (arrPathname.includes('beta')) {
                arrPathname.splice(2, 1);
            } else {
                arrPathname.splice(1,1);
            }
        } else {
            if (arrPathname.includes('beta')) {
                arrPathname.splice(2,0);
            } else {
                arrPathname.splice(1,0);
            }
        }

    } else {

        if (arrPathname.includes('ru') || arrPathname.includes('es') || arrPathname.includes('de') || arrPathname.includes('fr') || arrPathname.includes('pl') || arrPathname.includes('tr') || arrPathname.includes('it') || arrPathname.includes('zh')) {
            if (arrPathname.includes('beta')) {
                arrPathname.splice(2, 1, lang);
            } else {
                arrPathname.splice(1,1, lang);
            }
        } else {
            if (arrPathname.includes('beta')) {
                arrPathname.splice(2,0, lang);
            } else {
                arrPathname.splice(1,0, lang);
            }
        }

    }



    newPathname = arrPathname.join('/');
    return newPathname;

}

function returnHostname(data) {
    let a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

(function fixedMenu() {
    var coordinateMenu = $(".nav").offset().top;
    $(window).scroll(function() {
        if ($(this).scrollTop() > coordinateMenu) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }
    });
})();
(function addedAosPlagin() {
    AOS.init({
        duration: __CONFIG_GLOBAL.javascript.aos.duration,
    });
})();
(function addedParallax() {
    $('.scene').each(function(i, e) {
        var scene = e;
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
        });
    });
})();
(function addSlickNav() {
    if ($('.nav').length) {
        $('.nav-list:not(.list-lang)').slicknav({
            prependTo: '.nav-wrapper',
            label: '',
            allowParentLinks: true,
            animations: '',
        });

        $(document).on('click', '.slicknav_btn', function () {
            if (!$('.nav-wrapper').hasClass('show-menu')) {
                $('.nav-wrapper').addClass('show-menu');
                $('html, body').addClass('overflow-hidden');
                calcVH();
                window.addEventListener('onorientationchange', calcVH, true);
                window.addEventListener('resize', calcVH, true);
            } else {
                $('.nav-wrapper').removeClass('show-menu');
                $('html, body').removeClass('overflow-hidden');
                window.removeEventListener('onorientationchange', calcVH, true);
                window.removeEventListener('resize', calcVH, true);
                $('.nav-wrapper').removeAttr('style');
            }
        });

        media('all and (min-width: 1161px)', function () {
            if ($('.nav-wrapper').hasClass('show-menu')) {
                $('html, body').removeClass('overflow-hidden');
                $('.nav-wrapper').removeClass('show-menu');
                window.removeEventListener('onorientationchange', calcVH, true);
                window.removeEventListener('resize', calcVH, true);
                $('.nav-wrapper').removeAttr('style');
                $('.nav-list').slicknav('close');
            }
        });
    }
})();
(function addedParallax() {
    $('.scene').each(function (i, e) {
        var scene = e;
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
        });
    });
})();

function calcVH() {
    var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var thisElement = document.getElementsByClassName("show-menu")[0];
    thisElement.setAttribute("style", "height:" + vH + "px;");
}
function media(mediaQueryString, action){
    var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) { //Попадает в запроc
            if (action  && typeof(action) === 'function') {
                action();
            }
        }
    };
    var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
}
if ($('div').is('.clc-arrowSelect')) {
    $(".clc-arrowSelect").click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active')
        }
    });
}

function getCountry() {
    var black_list_conutry = __CONFIG_GLOBAL.javascript.ip_restrictions.ip_countries;


    if (__CONFIG_GLOBAL.javascript.ip_restrictions.ip_restrictions_flag === true) {

        if ( localStorage.getItem('countryCode') === null ) {
            $.get('https://api.ipstack.com/check?access_key=9ac3ab92ce4396c8da8c45f1d3c524e6', function(data){
                localStorage.setItem('countryCode', data.country_code.toLowerCase());
            }).done(function (data) {
                countryErrorPopup(black_list_conutry, data.country_code.toLowerCase());
            });
        } else  {
            countryErrorPopup(black_list_conutry, localStorage.getItem('countryCode'));
        }
    }
};

export function countryErrorPopup(blackList, currentCountryCode) {
    if( blackList.indexOf( currentCountryCode ) !== -1 ) {
        setTimeout(function(){
            $.magnificPopup.open({
                items: {
                    src: '#countryorder'
                },
                type: 'inline'
            });
        });
    };
};
