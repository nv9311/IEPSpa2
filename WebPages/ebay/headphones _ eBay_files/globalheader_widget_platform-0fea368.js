/* Global Widget Delivery Platform - GlobalHeaderFrontEnd$17.0.0 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("HttpClient",t()):e.HttpClient=t()}(this,function(){"use strict";function e(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o=Object.keys(Object(r)),a=0,s=o.length;a<s;a++){var c=o[a],u=Object.getOwnPropertyDescriptor(r,c);void 0!==u&&u.enumerable&&(n[c]=r[c])}}return n}({assign:e,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:e})}}).polyfill();var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),u=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0},r=function(){function r(e){f(this,r),this.win=e||window,this.initialize()}return t(r,[{key:"initialize",value:function(){var e,t=this;this.HOST_NAME=this.win.location.hostname,this.IS_LATEST=-1!==this.HOST_NAME.indexOf("latest"),this.IS_PARADISE=-1!==this.HOST_NAME.indexOf("paradise"),this.IS_DEV_MACHINE_HOST=5<this.win.location.origin.lastIndexOf(":")&&-1===t.HOST_NAME.indexOf("lvs")&&-1===t.HOST_NAME.indexOf("slc")&&-1===t.HOST_NAME.indexOf("phx"),this.ENV=(e=o(t.win.GH)!==r.TYPE_UNDEFINED&&o(t.win.GH.C)!==r.TYPE_UNDEFINED&&t.win.GH.C.env||r.ENV_ENUM.PRODUCTION,t.IS_DEV_MACHINE_HOST&&(e=r.ENV_ENUM.DEV),e),this.URL_QUERY_MAP=function(e){var n={},t=e.split("?");2===t.length&&t[1].split("&").forEach(function(e){var t=e.split("=");t&&2===t.length&&t[0]&&t[1]&&(n[t[0]]=t[1])});return n}(this.win.location.search)}},{key:"sanitizeRequestUrlByEnv",value:function(e){if(e){var t=this.win.location.origin;return this.ENV!==r.ENV_ENUM.STAGING&&this.ENV!==r.ENV_ENUM.FEATURE&&this.ENV!==r.ENV_ENUM.SANDBOX&&this.ENV!==r.ENV_ENUM.DEV||this.IS_PARADISE?this.ENV!==r.ENV_ENUM.PREPROD||this.IS_LATEST||(t=r.LATEST):t=r.QA,this.URL_QUERY_MAP._ghpool&&this.ENV!==r.ENV_ENUM.PRODUCTION&&(t=decodeURIComponent(this.URL_QUERY_MAP._ghpool)),this.ENV===r.ENV_ENUM.PRODUCTION&&r.DOMAIN_REGEX_CHECK.test(this.HOST_NAME)&&(t=this.getProductionEnvUrl()),t+=e}}},{key:"getProductionEnvUrl",value:function(){var e="",t="",n=this.HOST_NAME;n.match(r.DUAL_TLD_REGEX_CHECK)&&(n=n.replace(r.DUAL_TLD_REGEX_CHECK,function(e){return t=e,""}));var i=n.split(".");return(i=this.buildProductionUrl(i)).length?(0===i.indexOf("ebay")&&-1===i.indexOf("www")&&i.unshift("www"),i=i.join("."),""!==t.trim()&&(i+=t),e="https://"+i):(console.debug("Not a valid TLD"),e=""),console.debug("Updated xhrRequestURL = "+e),e}},{key:"buildProductionUrl",value:function(e){for(var t=[];e.length;){var n=e[0];-1===r.WHITELISTED_DOMAIN_PREFIXES.indexOf(n)&&-1===r.WHITELISTED_TLDS.indexOf(n)?e.shift():-1!==r.WHITELISTED_TLDS.indexOf(n)&&-1===t.indexOf("ebay")?e.shift():t.push(e.shift())}return t}},{key:"addQueryParam",value:function(e){var o=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=Object.assign({},this.URL_QUERY_MAP);return(a=Object.assign(a,t))._showdiag=a._showdiag&&"1"===a._showdiag?a._showdiag:void 0,(e=r.ALLOWED_QUERY_PARAMS.reduce(function(e,t){var n=t.name,i=a[n];if(i&&t.denied!==o.ENV){var r=-1<e.indexOf("?")?"&":"?";e=""+e+r+n+"="+encodeURIComponent(i)}return e},e)).replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"").replace(/\?$/,"")}}],[{key:"TYPE_UNDEFINED",get:function(){return"undefined"}},{key:"ENV_ENUM",get:function(){return{PRODUCTION:"production",DEV:"dev",PREPROD:"preprod",STAGING:"staging",FEATURE:"feature",SANDBOX:"sandbox"}}},{key:"QA",get:function(){return"https://www.qa.ebay.com"}},{key:"LATEST",get:function(){return"https://www.latest.ebay.com"}},{key:"ROUTE_REGEX_CHECK",get:function(){return/(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)/i}},{key:"DOMAIN_REGEX_CHECK",get:function(){return/(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)$/i}},{key:"DUAL_TLD_REGEX_CHECK",get:function(){return/[\.]{1}(com.au|com.hk|co.jp|com.my|com.sg|com.tw|co.th|co.uk)$/i}},{key:"ALLOWED_QUERY_PARAMS",get:function(){return[{name:"_showdiag",denied:""},{name:"correlation",denied:""},{name:"mock",denied:r.ENV_ENUM.PRODUCTION},{name:"scenario",denied:r.ENV_ENUM.PRODUCTION},{name:"show_optin_banner",denied:""},{name:"behavior",denied:""},{name:"moduleType",denied:""},{name:"phone_number",denied:""},{name:"authentication_code",denied:""},{name:"country_code",denied:""},{name:"supportedUxComponentNames",denied:""},{name:"resend",denied:""},{name:"SSRFallback",denied:""}]}},{key:"WHITELISTED_DOMAIN_PREFIXES",get:function(){return["www","m","ebay","benl","befr","cafr"]}},{key:"WHITELISTED_TLDS",get:function(){return["com","com.au","at","be","ca","cn","fr","de","com.hk","in","ie","it","co.jp","com.my","nl","ph","pl","com.sg","es","se","ch","com.tw","co.th","co.uk","vn"]}}]),r}(),i=function(e){function c(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=arguments[5];f(this,c);var a=o||("undefined"!=typeof window?window:{});t=t.toUpperCase();var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a));return s.ctx=a,s.shouldRetry=r.shouldRetry||!1,s.timeout=r.timeout||c.MAX_TIMEOUT,s.hasFullXhrUrl=r.hasFullXhrUrl||!1,s.queryParamObj=n,s.method=-1!==c.ALLOWED_METHODS.indexOf(t)?t:"GET",s.route=e,s.async=!0,"boolean"==typeof r.async&&!1===r.async&&(s.async=!1),s.hasFullXhrUrl?(s.baseUrl="",s.requestUrl=u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"addQueryParam",s).call(s,s.route,s.queryParamObj)):(s.baseUrl=u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"sanitizeRequestUrlByEnv",s).call(s,s.route),s.requestUrl=u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"addQueryParam",s).call(s,s.baseUrl,s.queryParamObj)),s.payload=i,s.retries=0,s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,r),t(c,[{key:"handlers",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.handlers=e,this}},{key:"delay",value:function(e,t){setTimeout(e.bind(this),t)}},{key:"maybeRetry",value:function(){var e=this;if(this.shouldRetry){if(this.retries>=c.MAX_RETRIES)return;this.retries++,this.delay(function(){e.initializeAndTrigger()},this.retryTimeout)}}},{key:"initializeAndTrigger",value:function(){var t,n=this;try{this.xhr=new XMLHttpRequest;var e=this.ctx.location&&this.ctx.location.hostname;(this.hasFullXhrUrl&&r.ROUTE_REGEX_CHECK.test(this.route)||!this.hasFullXhrUrl&&r.DOMAIN_REGEX_CHECK.test(e))&&(this.xhr.withCredentials=!0),this.xhr.open(this.method,this.requestUrl,this.async),this.async&&(this.xhr.timeout=this.timeout),this.xhr.setRequestHeader("Content-Type","text/plain");var i=this.shouldRetry?(t=this,function(e){e instanceof ProgressEvent&&t.maybeRetry(t)}):c.NOOP;c.DEFAULT_XHR_EVENTS.forEach(function(e){var t=-1!==c.DEFAULT_RETRY_EVENTS.indexOf(e);n.xhr[e]=n.handlers[e]||(t?i:c.NOOP)}),this.xhr.send(this.payload)}catch(e){console.debug("Global HTTPClient requests failing",e)}}},{key:"retryTimeout",get:function(){return Math.min(c.MAX_TIMEOUT,100*(2^this.retries))}}],[{key:"ALLOWED_METHODS",get:function(){return["GET","POST","HEAD"]}},{key:"NOOP",get:function(){return function(){}}},{key:"MAX_TIMEOUT",get:function(){return 5e3}},{key:"MAX_RETRIES",get:function(){return 1}},{key:"DEFAULT_XHR_EVENTS",get:function(){return["onload","onloadstart","onloadend","onprogress","onreadystatechange","onerror","onabort","ontimeout"]}},{key:"DEFAULT_RETRY_EVENTS",get:function(){return["onerror","onabort","ontimeout"]}}]),c}();!function(){var i=document.fonts,e="font-marketsans",r="https://ir.ebaystatic.com/cr/v/c1/vendor/fontfaceobserver.js";function o(){try{localStorage.setItem("ebay-font",e)}catch(e){}}function t(){var e,t,n;!function(){var e=i&&i.load;if(e&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);e=!(t&&parseInt(t[1],10)<603)}return e}()?(e=r,t=function(){var e=new FontFaceObserver("Market Sans"),t=new FontFaceObserver("Market Sans",{weight:"bold"});Promise.all([e.load(),t.load()]).then(o)},(n=document.createElement("script")).type="application/javascript",n.async=!0,n.onload=t,n.src=e,document.documentElement.firstChild.appendChild(n)):(i.load("1em Market Sans"),i.load("bold 1em Market Sans"),i.ready.then(o))}"fontDisplay"in document.documentElement.style||localStorage&&localStorage.getItem("ebay-font")===e||window.addEventListener("load",function(){requestAnimationFrame?requestAnimationFrame(t):t()})}();!function(){if("undefined"!=typeof Element){var e=function(){var e=document.createElement("div"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]}()}}();if("undefined"!=typeof Element)for(var n=["matches","matchesSelector","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],a=0;a<n.length;a++){var s=n[a];if(Element.prototype[s]){s;break}}var c=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window;return"requestAnimationFrame"in t?t.requestAnimationFrame(e):t.setTimeout(e,0)},h=function(){function o(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document;f(this,o),this.doc=i,this.cb=n,this.js=e,this.jsSize=this.js&&this.js.length,this.css=t,this.cssSize=this.css&&this.css.length;var r=(i.body||i.getElementsByTagName("head")[0]).childNodes;this.ref=r[r.length-1]}return t(o,[{key:"init",value:function(){var e=this;this.js&&this.css?this.loadJS(this.js,function(){return e.loadCSS(e.css)}):this.cb()}},{key:"loadJS",value:function(e,t){var n=this;if(e)if(Array.isArray(e))e.forEach(function(e){n.loadJS(e,t)});else{var i=this.doc.createElement("script");i.defer=!0,i.src=e,i.type="text/javascript";i.addEventListener("load",function e(){i.addEventListener&&i.removeEventListener("load",e),n.jsSize--,n.jsSize<=0&&t()}),this.ref.parentNode.insertBefore(i,this.ref.nextSibling)}}},{key:"loadCSS",value:function(e){var t=this;if(e)if(Array.isArray(e))e.forEach(function(e){t.loadCSS(e)});else{var n=this.doc.createElement("link");n.rel="stylesheet",n.href=e,n.media="temp";n.addEventListener("load",function e(){n.addEventListener&&n.removeEventListener("load",e),n.media="all",t.cssSize--,t.cssSize<=0&&t.cb()}),this.ref.parentNode.insertBefore(n,this.ref.nextSibling)}}}]),o}(),p=c,E="gh_user",l={initAndRenderWidgets:function(l){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.hasEncodedHtml,d=void 0===t||t,n=e.js,i=e.css,r=e.jsInline,f=void 0===r?"":r;new h(n,i,function(){var e,t=document.getElementById(E)||((e=document.createElement("div")).id=E,e.style.display="none",document.body.appendChild(e),e),n=l.reduce(function(e,t){return e+(d?decodeURI(t.html):t.html)},"");t.innerHTML+=n;var i,r,o,a=t.querySelectorAll("script"),s=(i=[],r=[],a.forEach(function(e){"nb_script"===e.id?i.push(e.innerHTML):r.push(e.innerHTML)}),i.concat(r)),c=l.map(function(e){return e.init}),u="";f&&(u=(o=d?decodeURI(f):f).slice(o.indexOf(">")+1,o.lastIndexOf("<")).trim()),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document,n=t.createTextNode(e),i=t.createElement("script");i.appendChild(n),p(function(){return t.body.appendChild(i)})}(c.join(" ; ").concat(" ; ").concat(s).concat(" ; ").concat(u)),"function"==typeof window.markoDynamicInitComponents&&window.markoDynamicInitComponents()}).init()}},d={HOLDER_ID:E};l.privates=d;var y=l.initAndRenderWidgets,v=function(e){"complete"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document).readyState?e():window.addEventListener("load",e)},m=function(e){var t=e.renderedComponents,n=e.html,i=e.content,r=e.js,o=e.css,a=e.jsInline,s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:y;window.widget_platform_renderedComponents=t,s([{html:n||i,init:""}],{hasEncodedHtml:!1,js:r,css:o,jsInline:a})},g=function(e){var t=e.renderType,n=e.renderDelay,i=e.widgets,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:y,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,a=i&&i[0],s=a&&a.js,c=a&&a.css,u=a&&a.jsInline;1===t?r(i,{js:s,css:c,jsInline:u}):2===t?v(function(){return r(i,{js:s,css:c,jsInline:u})},o):function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;v(function(){window.setTimeout(t,e)},n)}(n,function(){return r(i,{js:s,css:c,jsInline:u})},o)},_=function(){function d(e){var t=e.widgetResponse,n=void 0===t?{}:t,i=e.onFallback,r=e.initializer,o=void 0===r?g:r;f(this,d);var a=n.widgets,s=n.queryParam,c=n.triggerFallBack,u=n.renderType,l=n.renderDelay;this.props={widgets:a||[],queryParam:s||{},triggerFallBack:void 0===c||c,onFallback:i,initializer:o,renderType:u,renderDelay:l}}return t(d,[{key:"initializeWidgets",value:function(){var e=this.props,t=e.widgets;(0,e.initializer)({widgets:t,renderType:e.renderType,renderDelay:e.renderDelay})}},{key:"handleFallback",value:function(){var e=this.props,t=e.queryParam;(0,e.onFallback)(t)}},{key:"init",value:function(){this.props.triggerFallBack?this.handleFallback():this.initializeWidgets()}}]),d}(),w=function(){var e=!1;return"serviceWorker"in navigator&&"Notification"in window&&(e="default"===Notification.permission),e},T={DATA_MISSING:"dataMissing",TYPE_MISMATCH:"typeMismatch"},b=void 0;function O(e){return Array.isArray(e)?"array":null===e?"null":void 0===e?"undefined":o(e)}function S(e){return"string"==typeof e&&(e=e.split(".").join(",").replace(/\[\d\]/g,function(e){return e=","+(e=e.replace(/[\[\]']+/g,""))}).split(",")),e}function N(e,t){return t.reduce(function(e,t){return e&&void 0!==e[t]?e[t]:void 0},e)}function A(e,t,n){var i,r,o,a,s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"warn",c=void 0,u=N(e,t=S(t)),l=O(u),d=O(n);return"undefined"===d?(n="",d="string"):"object"===d&&function(e){if(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}}(n)&&(n={__isEmpty:!0}),"undefined"!==l?l!==d&&(c=T.TYPE_MISMATCH,u=n):(c=T.DATA_MISSING,u=n),b&&s&&c&&(i=c,r=t,o=n,b[a=s]&&b[a]("event: %s, path: %s, default: %s",i,r,o)),u}var I={has:function(e,t){var n=N(e,t=S(t)),i=O(n);return n=!("undefined"===i||"null"===i)},get:function(e,t,n){return A(e,t,n)},need:function(e,t,n,i){return A(e,t,n,i)},setLogger:function(e){b=e}},R={EVENT_TYPES:T};I.privates=R;var k=I.has,U=I.get,D="X_EBAY_C_CORRELATION_SESSION",M="raptor.require",C="trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo",P=w,j=function(){var e=function(){if(k(window,C))return U(window,C,function(){})()}(),t={},n=null;if(e)return e;try{n=function(){if(k(window,M))return U(window,M,function(){})("ebay.context.Context")}()}catch(e){n=null}var i,r=n&&n.pid;return r?(t[D]="operationId="+r,i=t,window.trkCorrelationSessionInfo={},window.trkCorrelationSessionInfo.getTrackingInfo=function(){return JSON.parse(JSON.stringify(i))},window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo=function(){return i[D]},t[D]):null},H=m,L=function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,n="undefined"!==o((e=t).GH)&&e.GH&&"function"==typeof e.GH.getWidgetDeliveryPlatform&&e.GH.getWidgetDeliveryPlatform(),i=n&&n.base_path,r=n&&n.new_buyer_acquistion;return i&&r?i+r:"/gh/useracquisition"},x=function(e){var t=function(e){if(e instanceof ProgressEvent){var t=e.target||e.currentTarget;if(t instanceof XMLHttpRequest)return t.responseText}}(e);if(t)try{var n=t&&JSON.parse(t);H(n)}catch(e){console.debug("Unable to parse Response",e)}},F=function(e){console.debug("useracquisition request has failed!",e)},V=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=L(),n=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t={correlation:j(),show_optin_banner:P()};return Object.assign(t,e)}(e);return new i(t,"GET",n,{},{shouldRetry:!1,timeout:1e4},window).handlers({onload:x,onerror:F})};return new _({widgetResponse:window.widget_platform,onFallback:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};V(e).initializeAndTrigger()}}).init(),function(){if("undefined"!=typeof window&&"function"==typeof window.define&&window.define.amd)window.HttpClient=i}(),i});
/* Delivered by Global Header, ISPROD=true */
