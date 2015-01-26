        var languages = {
            AFRIKAANS: "af",
            ALBANIAN: "sq",
            AMHARIC: "am",
            ARABIC: "ar",
            ARMENIAN: "hy",
            AZERBAIJANI: "az",
            BASQUE: "eu",
            BELARUSIAN: "be",
            BENGALI: "bn",
            BIHARI: "bh",
            BRETON: "br",
            BULGARIAN: "bg",
            BURMESE: "my",
            CATALAN: "ca",
            CHEROKEE: "chr",
            CHINESE: "zh",
            CHINESE_SIMPLIFIED: "zh-CN",
            CHINESE_TRADITIONAL: "zh-TW",
            CORSICAN: "co",
            CROATIAN: "hr",
            CZECH: "cs",
            DANISH: "da",
            DHIVEHI: "dv",
            DUTCH: "nl",
            ENGLISH: "en",
            ESPERANTO: "eo",
            ESTONIAN: "et",
            FAROESE: "fo",
            FILIPINO: "tl",
            FINNISH: "fi",
            FRENCH: "fr",
            FRISIAN: "fy",
            GALICIAN: "gl",
            GEORGIAN: "ka",
            GERMAN: "de",
            GREEK: "el",
            GUJARATI: "gu",
            HAITIAN_CREOLE: "ht",
            HEBREW: "iw",
            HINDI: "hi",
            HUNGARIAN: "hu",
            ICELANDIC: "is",
            INDONESIAN: "id",
            INUKTITUT: "iu",
            IRISH: "ga",
            ITALIAN: "it",
            JAPANESE: "ja",
            JAVANESE: "jw",
            KANNADA: "kn",
            KAZAKH: "kk",
            KHMER: "km",
            KOREAN: "ko",
            KURDISH: "ku",
            KYRGYZ: "ky",
            LAO: "lo",
            LAOTHIAN: "lo",
            LATIN: "la",
            LATVIAN: "lv",
            LITHUANIAN: "lt",
            LUXEMBOURGISH: "lb",
            MACEDONIAN: "mk",
            MALAY: "ms",
            MALAYALAM: "ml",
            MALTESE: "mt",
            MAORI: "mi",
            MARATHI: "mr",
            MONGOLIAN: "mn",
            NEPALI: "ne",
            NORWEGIAN: "no",
            OCCITAN: "oc",
            ORIYA: "or",
            PASHTO: "ps",
            PERSIAN: "fa",
            POLISH: "pl",
            PORTUGUESE: "pt",
            PORTUGUESE_PORTUGAL: "pt-PT",
            PUNJABI: "pa",
            QUECHUA: "qu",
            ROMANIAN: "ro",
            RUSSIAN: "ru",
            SANSKRIT: "sa",
            SCOTS_GAELIC: "gd",
            SERBIAN: "sr",
            SINDHI: "sd",
            SINHALESE: "si",
            SLOVAK: "sk",
            SLOVENIAN: "sl",
            SPANISH: "es",
            SUNDANESE: "su",
            SWAHILI: "sw",
            SWEDISH: "sv",
            SYRIAC: "syr",
            TAGALOG: "tl",
            TAJIK: "tg",
            TAMIL: "ta",
            TATAR: "tt",
            TELUGU: "te",
            THAI: "th",
            TIBETAN: "bo",
            TONGA: "to",
            TURKISH: "tr",
            UIGHUR: "ug",
            UKRAINIAN: "uk",
            //UNKNOWN: "",
            URDU: "ur",
            UZBEK: "uz",
            VIETNAMESE: "vi",
            WELSH: "cy",
            YIDDISH: "yi",
            YORUBA: "yo"
        }
        localStorage['languages'] || (localStorage['languages'] = JSON.stringify(languages));

        var defaults = {
            from: 'auto',
            first: navigator.language.split('-')[0],
            second: 'en',
            ctrl: false,
            alt: false,
            meta: false,
            shift: false,
            selection: true,
            mouseover: false,
            theme: 'black',
            service: 'google'
        };
        localStorage['defaults'] = JSON.stringify(defaults);

        //if(!localStorage['options']) {
            // set defaults
            localStorage['options'] = JSON.stringify([defaults]);
        //}

        var options = JSON.parse(localStorage['options']);
        if(!(options instanceof Array)) {
            // TODO convert old options to new format
            //options = [defaults];
            old = options;
            options = [];
            for(i in old.hotkeys) {
                i.split('+');
                var o = JSON.parse(localStorage['defaults']);
                o.theme = old.theme;
                o.from = old.hotkeys[i].from.value || 'auto';
                old.hotkeys[i].first.value && (o.first = old.hotkeys[i].first.value);
                o.second = old.hotkeys[i].second.value;
                i.split('+').forEach(function(k) {
                    o[k.toLowerCase()] = true;
                });
                options.push(o);
            }
            localStorage['options'] = JSON.stringify(options);
        }

        var branding = '<img src="http://www.google.com/uds/css/small-logo.png" onclick="document.location.href=\\\'http://translate.google.com/\\\';" style="position: absolute !important; z-index: -1 !important; right: 1px !important; top: -20px !important; cursor: pointer !important;-webkit-border-radius: 20px; background-color: rgba(200, 200, 200, 0.3) !important; padding: 3px 5px 0 !important; margin: 0 !important;" />';
        var brandingS = '<img src="https://www.google.com/uds/css/small-logo.png" onclick="document.location.href=\\\'http://translate.google.com/\\\';" style="position: absolute !important; z-index: -1 !important; right: 1px !important; top: -20px !important; cursor: pointer !important;-webkit-border-radius: 20px; background-color: rgba(200, 200, 200, 0.3) !important; padding: 3px 5px 0 !important; margin: 0 !important;" />';
        var themes = {
            'black': '<div style="' +
                        'max-width: 300px !important;' +
                        'color: #EEE !important;' +
                        //'opacity: 0.8 !important;' +
                        'border-color: #111 !important;' +
                        'border-width: 0px !important;' +
                        '-webkit-border-radius: 5px !important;' +
                        'background-color: rgba(17,17,17,0.9) !important;' +
                        'font-size: 16px !important;' +
                        'padding: 8px !important;' +
                        'overflow: visible !important;' +
                        'font-family: Zawgyi-One;' +
                        //'background-image: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #000), color-stop(50%, #363636), color-stop(100%, #000));' +
                        'z-index: 999999 !important;' +
                        'text-align: left  !important;' +
                        'box-shadow: #666 2px 2px 2px !important;' +
                      '"><div class="translation"></div><div class="additional"></div></div>',
            'white': '<div style="' +
                        'max-width: 300px !important;' +
                        'color: #111 !important;' +
                        'opacity: 1 !important;' +
                        'border: 1px solid #BBB !important;' +
                        '-webkit-border-radius: 5px !important;' +
                        'background-color: rgba(255, 255, 255, 0.9) !important;' +
                        'font-size: 16px !important;' +
                        'padding: 8px !important;' +
                        'overflow: visible !important;' +
                        'font-family: Zawgyi-One;' +
                        //'background-image: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #FFF), color-stop(50%, #EEE), color-stop(100%, #FFF));' +
                        'z-index: 999999 !important;' +
                        'text-align: left  !important;' +
                        'box-shadow: #AAA 2px 2px 2px !important;' +
                      '"><div class="translation"></div><div class="additional"></div></div>',
            'customize': '',
        };


        // TODO
        //localStorage['themes'] = JSON.stringify(themes);
        //themes = JSON.parse(localStorage['themes']);

        /*if(!options.theme) {
            options.theme = 'black';
        }*/

        var holds, holdsMap;
        var keys = ['Ctrl', 'Alt', 'Shift', 'Meta'];
        function pushHold(hold, o) {
            holds.push(hold);
            holdsMap[hold] = o;
        }
        function load() {
            holds = [], holdsMap = {};
            options = JSON.parse(localStorage['options']);
            hotkeys = [];
            options.forEach(function(o){
                var h = [];
                keys.forEach(function(k){
                    o[k.toLowerCase()] && h.push(k);
                });
                o.selection && pushHold(h.join('+') + '+Selection', o);
                o.mouseover && pushHold(h.join('+') + '+Mouseover', o);
            });
        }
        load();

        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

            var scheme = tab.url.substring(0, 5);
            if(scheme == 'https' || scheme == 'http:') {
                //var theme = "window['-chrome-auto-translate-core-data-theme'] = '" + themes[options.theme] + (scheme == 'https' ? brandingS : branding) + "';";
                var theme = '';
                //chrome.tabs.executeScript(tabId, {code: theme, allFrames: true}, function() {
                    chrome.tabs.executeScript(tabId, {code: 'var holds = ' + JSON.stringify(holds), allFrames: true}, function() {
                        chrome.tabs.executeScript(tabId, {file: 'inject.js', allFrames: true});
                    });
                //});
            }
        });

        chrome.extension.onConnect.addListener(function(port) {
            port.onMessage.addListener(function(m) {
                switch(m.message) {
                    case 'translate':
                        var options;
                        if(options = holdsMap[m.context.hotkeys]) {
                            m.context.theme = themes[options.theme]
                            translate(m.context.text, port, options, m.context);
                        }
                        break;
                    case 'options':
                        load();
                        break;
                }
            });
        });

        var latest = 'auto';

        function _translate(text, from, to, options, callback) {
            //var url = 'http://translate.google.com/translate_a/t?client=t&otf=1&pc=0';
            //var url = 'http://translate.google.com/translate_a/t?client=t';
            var url = 'http://www.ornagai.com/search/';
            //url += '&text=' + text;
            //url += '&hl=' + options.first;

			url += text;

            //if(from != 'auto') {
            //    url += '&sl=' + from;
            //}
            //url += '&tl=' + to;
		
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    // JSON.parse does not evaluate the attacker's scripts.                   
                    var r = JSON.parse(xhr.responseText);
                    
                    callback(r, text);
                }
            }
            xhr.send();
        }

        function translate(text, port, options, context) {
                    
            function translate(text, from) {
                var to = options.first;
                if(from == to) {
                    to = options.second;
                }
                _translate(text, from, to, options, function(result, text) {
                                        
                    /*
                    if(result[8] && result[8][0][0] == to && to != from) {
                        return translate(text, to);
                    }
                    latest = result[8] ? result[8][0][0] : from;
                    
                    
                    var text = [], i;
                    for(i=0; i<result[0].length; i++) {
                        text.push(result[0][i][0]);
                    }
                    text = text.join('');
                    var additional = '';
                    
                    
                    if(result[1]) {
                        for(i=0; i<result[1].length; i++) {
                            if(result[1][i][0].length) {
                                additional += '<div><b>' + result[1][i][0] + '</b>: ';
                      
                      
                      additional += '<i>' + result[1][i][1].join(', ') + '</i></div>';
                            } else {
                                text += ', ' + result[1][i][1].join(', ');
                            }
                        }
                    }
                    */
                    var translation = text;
                    if (result[0]) {
                    	translation = text + ": " + result[0].def;
                    }
                    var additional = '';
                    
                    //alert("result[0].def = " + text);

                    context.translation = translation;
                    context.additional = additional;
                    
                    port.postMessage({
                        message: 'result',
                        context: context
                    });
                });
            }
            translate(text, ((options.from == 'latest') ? latest : options.from));
        }

		