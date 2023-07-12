import { definesLanguage } from './global'; // хук для определения языка
import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта
import __NEWS_JSON from './json/news.json'; // подключение объекта со всеми статичными переводами для новостей
import 'jquery-rss'; // подключение плагина для подгрузки rss новостей

let rssUrl = isbeta();

function isbeta(name) {

    let url = name; // путь к файлу - если у вас другой - то его и указываете
    let pathname = location.pathname.split('/');
    for (let i = 0; i < pathname.length; i++) {
        if (pathname[i] == 'beta') url = '/beta' + name; // если мы на бете, то добавляем подддомен 'beta' к пути
    }
    return url;
}

(function getnewsrss() {
    let newsImg = __CONFIG_GLOBAL.javascript.news.imgblock
    let langData = definesLanguage(),
        baseDir = langData == __CONFIG_GLOBAL.defaultLanguage ? '' : '../';
    langData = (langData === 'zh') ? 'cn' : langData;
    var html = '';
    $.ajax({
        url: isbeta('/rssrequest.php'),
        method: 'GET',
        data: {
            lang: langData
        },
        type: 'json',
        success: function success(data) {

            var res = JSON.parse(data);
            var img
            for (var i = 0; i < res.length; i++) {
                // var author = res[i].author != '' ? textLang[langData].authors + ': ' + res[i].author : '',
                //     date = res[i].date != '' ? textLang[langData].date + ': ' + res[i].date : '';
                var author = res[i].author != '' ? res[i].author : '',
                    date = res[i].date != '' ? res[i].date : '',
                    classNotImg = res[i].img_url == '' ? 'notImg' : '';
                img = res[i].img_url != '' ? res[i].img_url : isbeta(newsImg);

                html += '\
		<div class="news-item">\
			<a class="news-wrapper-inner ' + classNotImg + '" target="_blank" href="' + res[i].link + '" >\
                    <img class="news-item__img" src="' + img + '">\
                    <div class="news-item__content">\
                        <div class="news-information-text news-information-text_author">\
                            <div class="news-item__text news-item__author">' + author + '</div>\
                            <div class="news-item__text news-item__date">' + date + '</div>\
                        </div>\
                        <div class="news-information-text news-information-text_title">\
                             <div class="news-item__title h3-title" data-dot>' + res[i].title + '</div>\
                        </div>\
                    </div>\
			</a>\
		</div>\
		';
            }


            $('.news-slider').html(html);

            // $('.news-slider').on('init', onSliderInit);
            // $('.news-slider').on('afterChange', onSliderInit);

            $('.news-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                // centerMode: true,
                // variableWidth: true,
                // touchThreshold: 10,
                dots: true,
                arrows: true,
                appendDots: '.dots-news-slider-js',
                appendArrows: '.news-arrow',
                prevArrow: '<button type="button" class="slick-prev slick-main-arrow slick-prev-main">' +
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2928 11.1774C20.6922 11.2324 21 11.5798 21 12.0001C21 12.4587 20.6337 12.8305 20.1818 12.8305H5.80007L10.9953 18.0816L11.0747 18.1745C11.313 18.4991 11.2876 18.9604 10.9977 19.2558C10.6788 19.5808 10.1608 19.5819 9.84062 19.2583L3.25226 12.5998C3.21304 12.5617 3.17756 12.5196 3.14642 12.4743C2.92336 12.15 2.95478 11.7002 3.24067 11.4113L9.84067 4.74218L9.9326 4.66198C10.2534 4.4215 10.7079 4.44929 10.9977 4.74471C11.3166 5.06966 11.3155 5.59539 10.9953 5.91895L5.79877 11.1698L20.1818 11.1698L20.2928 11.1774Z" fill="#E3E6EC"/>\n' +
                    '</svg>' +
                    '</button>',
                nextArrow: '<button type="button" class="slick-next slick-main-arrow slick-next-main">' +
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 12.8229C3.3078 12.7679 3 12.4205 3 12.0001C3 11.5415 3.36631 11.1698 3.81818 11.1698H18.1999L13.0047 5.91866L12.9253 5.8257C12.687 5.50114 12.7124 5.0398 13.0023 4.74441C13.3212 4.41948 13.8392 4.41839 14.1594 4.74198L20.7477 11.4004C20.787 11.4386 20.8224 11.4806 20.8536 11.526C21.0766 11.8502 21.0452 12.3001 20.7593 12.5889L14.1593 19.2581L14.0674 19.3383C13.7466 19.5787 13.2921 19.551 13.0023 19.2555C12.6834 18.9306 12.6845 18.4049 13.0047 18.0813L18.2012 12.8304L3.81818 12.8304L3.70716 12.8229Z" fill="#E3E6EC"/>\n' +
                    '</svg>' +
                    '</button>',
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1161,
                        settings: {
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 901,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 761,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            dots: false,
                            variableWidth: false,
                        }
                    }
                ]
            });

            $('[data-dot]').dotdotdot();
            $(window).resize(function() {
                $('[data-dot]').dotdotdot();
            });
            function onSliderInit(event, slick) {
                var countSlide = $(this).siblings('.dots-wrapper').find('.slick-dots li:last-child button').text();
                var activeSlide = $(this).siblings('.dots-wrapper').find('.slick-dots .slick-active button').text();

                $(this).parents('.wrapper').find('.current-slide').text(activeSlide);
                $(this).parents('.wrapper').find('.number-of-slides').text(countSlide);
            };


        },
        error: function error() {
            console.log('error');
        }
    });

})();
