import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта
import { definesLanguage } from './global'; // хук для определения языка

/**
 * Автоматическая генерация футера
 */
(function() {
    var lang = definesLanguage(), // получение языка сайта
        blockid = '#page-footer',
        baseDir = lang == __CONFIG_GLOBAL.defaultLanguage ? '' : '../'; // определение корня сайта для ссылок

    let vars = {
        name: __CONFIG_GLOBAL.companyData.title,
        adr: __CONFIG_GLOBAL.companyData.adres,
        phoneNumber: __CONFIG_GLOBAL.companyData.phone,
        phone: "<a href='tel:" + __CONFIG_GLOBAL.companyData.phone + "'>" + __CONFIG_GLOBAL.companyData.phone + "</a>",
        mail: "<a href='mailto:" + __CONFIG_GLOBAL.companyData.email + "'>" + __CONFIG_GLOBAL.companyData.email + "</a>",
        lic: __CONFIG_GLOBAL.companyData.license.lls1,
        lic2: __CONFIG_GLOBAL.companyData.license.lls2,
        lic3: __CONFIG_GLOBAL.companyData.license.lls3,

    };

    let fDatas = {
        address: {
            ru: "<span>Компания " + vars.name + " зарегистрирована по адресу:</span> " + vars.adr + '.',
            en: "<span>" +vars.name + " is registered at </span>" + vars.adr + '.',
            es: "<span>" + vars.name + " está registrada en </span>" + vars.adr + '.',
            de: "<span>" + vars.name + " ist registriert i </span>" + vars.adr + '.',
            fr: "<span>" + vars.name + " est enregistré au </span>" + vars.adr + '.',
            it: "<span>" + vars.name + " è registrato al </span>" + vars.adr + '.',
            zh: "<span>" + vars.name + "註冊於 </span>" + vars.adr + '。'
        },
        // info: {
        //     en: "The company operates under the requirements of the Cyprus Securities and Exchange Commission" + (vars.lic ? " (Licence Number: " + vars.lic + ")" : "") + ", the International Financial Services Commission (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " and the Financial Services Commission of the Republic of Mauritius" + (vars.lic3 ? " (Investment Dealer Licence Number: " + vars.lic3 + ")" : "") + ".",
        //     ru: "Деятельность компании осуществляется в соответствии с требованиями Кипрской комиссии по ценным бумагам и биржам" + (vars.lic ? " (номер лицензии: " + vars.lic + ")" : "") + ", Комиссии по международным финансовым услугам (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " и Комиссии по финансовым услугам Республики Маврикия" + (vars.lic3 ? " (номер лицензии инвестиционного дилера: " + vars.lic3 + ")" : "") + ".",
        //     de: "Das Unternehmen betreibt unter den Anforderungen der Cysec" + (vars.lic ? " (Lizenznummer: " + vars.lic + ")" : "") + ", die International Financial Services Commission (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " und der Financial Services Commission der Republik Mauritius" + (vars.lic3 ? " (Investment Dealer Lizenznummer: " + vars.lic3 + ")" : "") + ".",
        //     es: "La compañía opera bajo los requerimientos de la Comisión de Valores de Chipre" + (vars.lic ? " (número de licencia: " + vars.lic + ")" : "") + ", la Comisión Internacional de Servicios Financieros (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " y la Comisión de Servicios Financieros de la República de Mauricio" + (vars.lic3 ? " (inversión Licencia distribuidor Número: " + vars.lic3 + ")" : "") + ".",
        //     fr: "La société exerce ses activités sous les exigences de la Commission des valeurs mobilières de Chypre et d'échange" + (vars.lic ? " (Numéro de licence: " + vars.lic + ")" : "") + ", la Commission internationale des services financiers (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " et la Commission des services financiers de la République de Maurice" + (vars.lic3 ? " (investissement Licence de concessionnaire Numéro: " + vars.lic3 + ")" : "") + ".",
        //     it: "La società opera con i requisiti della Cyprus Securities and Exchange Commission" + (vars.lic ? " (numero di licenza: " + vars.lic + ")" : "") + ", la Commissione Financial Services International (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " e alla Commissione servizi finanziari della Repubblica di Mauritius" + (vars.lic3 ? " (Investment Dealer Licenza Numero: " + vars.lic3 + ")" : "") + ".",
        //     zh: "該公司在塞浦路斯證券交易委員會的要求下運營" + (vars.lic ? " (許可證號: " + vars.lic + ")" : "") + " 国际金融服务委员会（IFSC）" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + "和毛里求斯共和国金融服务委员会" + (vars.lic3 ? " (本公司根据塞浦路斯证券交易委员会的要求工作投资经销商许可证编号: " + vars.lic3 + ")" : "") + "。"
        // },
        info: {
            en: "The company operates under the requirements of the Financial Conduct Authority | FCA, the International Financial Services Commission (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " and the Financial Services Commission of the Republic of Mauritius" + (vars.lic3 ? " (Investment Dealer Licence Number: " + vars.lic3 + ")" : "") + ".",
            ru: "Деятельность компании осуществляется в соответствии с требованиями управления по финансовому регулированию и надзору Великобритании (FCA), Комиссии по международным финансовым услугам (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " и Комиссии по финансовым услугам Республики Маврикия" + (vars.lic3 ? " (номер лицензии инвестиционного дилера: " + vars.lic3 + ")" : "") + ".",
            tr: "Şirket, Birleşik Krallık Finansal Davranış Otoritesi (FCA), Uluslararası Finansal Hizmetler Komisyonu (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " ve Mauritius Cumhuriyeti Finansal Hizmetler Komisyonu gerekliliklerine uygun olarak faaliyet göstermektedir" + (vars.lic3 ? " (yatırımcı lisans numarası: " + vars.lic3 + ")" : "") + ".",
            de: "Das Unternehmen arbeitet gemäß den Anforderungen der Financial Conduct Authority | FCA, die International Financial Services Commission (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " und der Financial Services Commission der Republik Mauritius" + (vars.lic3 ? " (Investment Dealer Lizenznummer: " + vars.lic3 + ")" : "") + ".",
            es: "La empresa opera bajo los requisitos de la Autoridad de Conducta Financiera | FCA, la Comisión Internacional de Servicios Financieros (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " y la Comisión de Servicios Financieros de la República de Mauricio" + (vars.lic3 ? " (inversión Licencia distribuidor Número: " + vars.lic3 + ")" : "") + ".",
            fr: "La société opère selon les exigences de la Financial Conduct Authority | FCA, la Commission internationale des services financiers (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " et la Commission des services financiers de la République de Maurice" + (vars.lic3 ? " (investissement Licence de concessionnaire Numéro: " + vars.lic3 + ")" : "") + ".",
            it: "La società opera secondo i requisiti della Financial Conduct Authority | FCA, la Commissione Financial Services International (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " e alla Commissione servizi finanziari della Repubblica di Mauritius" + (vars.lic3 ? " (Investment Dealer Licenza Numero: " + vars.lic3 + ")" : "") + ".",
            pl: "Firma działa zgodnie z wymogami Financial Conduct Authority | FCA, Międzynarodowa Komisja Usług Finansowych (IFSC)" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + " oraz Komisja ds Usług Finansowych Republiki Mauritiusa" + (vars.lic3 ? " (Numer licencji dealera inwestycyjnego: " + vars.lic3 + ")" : "") + ".",
            zh: "公司按照金融行为监管局的要求运营| FCA 国际金融服务委员会（IFSC）" + (vars.lic2 ? " (" + vars.lic2 + ")" : "") + "和毛里求斯共和国金融服务委员会" + (vars.lic3 ? " (本公司根据塞浦路斯证券交易委员会的要求工作投资经销商许可证编号: " + vars.lic3 + ")" : "") + "。"
        },
        copy: {
            ru: "<span class=\"footer-ssl\">Защищено SSL. </span><span class=\"footer-copyright\">Авторское право © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Все права защищены.</span>",
            en: "<span class=\"footer-ssl\">Secured by SSL. </span><span class=\"footer-copyright\">Copyright © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">All rights reserved.</span>",
            tr: "<span class=\"footer-ssl\">SSL ile güvenli. </span><span class=\"footer-copyright\">Telif hakkı © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Tüm hakları Saklıdır.</span>",
            es: "<span class=\"footer-ssl\">Asegurado por SSL. </span><span class=\"footer-copyright\">Copyright © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Todos los derechos reservados.</span>",
            de: "<span class=\"footer-ssl\">Gesichert durch SSL. </span><span class=\"footer-copyright\">Urheberrecht © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Alle Rechte vorbehalten.</span>",
            fr: "<span class=\"footer-ssl\">Sécurisé par SSL. </span><span class=\"footer-copyright\">Copyright © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Tous droits réservés.</span>",
            it: "<span class=\"footer-ssl\">Protetto da SSL. </span><span class=\"footer-copyright\">Copyright © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Tutti i diritti riservati.</span>",
            pl: "<span class=\"footer-ssl\">Zabezpieczone przez SSL. </span><span class=\"footer-copyright\">Prawa autorskie © 2019 - 2022 " + vars.name + ". </span><span class=\"footer-secure\">Wszelkie prawa zastrzeżone.</span>",
            zh: "<span class=\"footer-ssl\">受SSL保護。</span><span class=\"footer-copyright\">版權所有©2019-2022 " + vars.name + "。</span><span class=\"footer-secure\">版權所有</span>",
        },
    };

    var footer = "<div class='footer-js footer-information-wrapper'>\
					<div class='footer-col footer-col_1'>\
                        <p class='footer-p'>"+fDatas.address[lang]+" "+fDatas.info[lang] + "</p>\
                        <p class='footer-p footer-p_copy'>"+fDatas.copy[lang]+"</p>\
					</div>\
				</div>",
        m = footer,
        fs = blockid;
    if (typeof jQuery === 'function') { jQuery(function() { jQuery(fs).html(m).on('copy', function(e) { e.preventDefault(); return !1 }) }) } else {
        var da = document.addEventListener,
            c = function() {
                if (da || window.event.type === 'load' || document.readyState === 'complete') {
                    d();
                    r()
                }
            };
        var n = function(e) {
            var a = e || window.event;
            a.preventDefault();
            return !1
        };
        var r = function() {
            var e = document.querySelector(fs);
            if (e) {
                e.innerHTML = m;
                if (da) e.addEventListener('copy', n);
                else e.attachEvent("oncopy", n)
            }
        };
        var d = function() {
            if (da) {
                document.removeEventListener('DOMContentLoaded', c);
                window.removeEventListener('load', c)
            } else {
                document.detachEvent('onreadystatechange', c);
                window.detachEvent('onload', c)
            }
        };
        if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) { window.setTimeout(r) } else if (da) {
            da("DOMContentLoaded", c);
            window.addEventListener("load", c)
        } else {
            document.attachEvent("onreadystatechange", c);
            window.attachEvent("onload", c)
        }
    }
})();
