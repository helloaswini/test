!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("pouchdb-browser")):"function"==typeof define&&define.amd?define(["pouchdb-browser"],n):"object"==typeof exports?exports["uam-vuejs-cache"]=n(require("pouchdb-browser")):t["uam-vuejs-cache"]=n(t["pouchdb-browser"])}("undefined"!=typeof self?self:this,function(t){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=35)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(26)("wks"),o=e(27),i=e(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(11),o=e(24);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n,e){var r=e(0),o=e(3),i=e(9),c=e(4),u=e(12),s=function(t,n,e){var a,f,l,p=t&s.F,v=t&s.G,h=t&s.S,d=t&s.P,_=t&s.B,y=t&s.W,m=v?o:o[n]||(o[n]={}),x=m.prototype,g=v?r:h?r[n]:(r[n]||{}).prototype;v&&(e=n);for(a in e)(f=!p&&g&&void 0!==g[a])&&u(m,a)||(l=f?g[a]:e[a],m[a]=v&&"function"!=typeof g[a]?e[a]:_&&f?i(l,r):y&&g[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((m.virtual||(m.virtual={}))[a]=l,t&s.R&&x&&!x[a]&&c(x,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(10);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(2),o=e(42),i=e(43),c=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(5),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(50),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(26)("keys"),o=e(27);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(11).f,o=e(12),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(10);t.exports.f=function(t){return new r(t)}},function(t,n,e){"use strict";var r=e(22),o=e(8),i=e(44),c=e(4),u=e(7),s=e(45),a=e(19),f=e(53),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,d,_,y){s(e,n,h);var m,x,g,w=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",P="values"==d,j=!1,S=t.prototype,T=S[l]||S["@@iterator"]||d&&S[d],E=T||w(d),O=d?P?w("entries"):E:void 0,A="Array"==n?S.entries||T:T;if(A&&(g=f(A.call(new t)))!==Object.prototype&&g.next&&(a(g,b,!0),r||"function"==typeof g[l]||c(g,l,v)),P&&T&&"values"!==T.name&&(j=!0,E=function(){return T.call(this)}),r&&!y||!p&&!j&&S[l]||c(S,l,E),u[n]=E,u[b]=v,d)if(m={values:P?E:w("values"),keys:_?E:w("keys"),entries:O},y)for(x in m)x in S||i(S,x,m[x]);else o(o.P+o.F*(p||j),n,m);return m}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(13),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(2),o=e(10),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c=e(9),u=e(65),s=e(29),a=e(16),f=e(0),l=f.process,p=f.setImmediate,v=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,_=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){m.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++_]=function(){u("function"==typeof t?t:Function(t),n)},r(_),_},v=function(t){delete y[t]},"process"==e(13)(l)?r=function(t){l.nextTick(c(m,t,1))}:d&&d.now?r=function(t){d.now(c(m,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=x,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),m.call(t)}}:function(t){setTimeout(c(m,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(2),o=e(5),i=e(20);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(36),o={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t._uam_vuejs_cache_installed){var e=n.axios,o=n.cacheRoute,i=n.databaseName||"_uam_vuejs_cache",c=n.dbVersionHeaderKey,u=n.isCacheRoutePublic,s=n.store,a=n.storeModuleName||"uam_cache",f=n.userId||null;t._cacheInitialized=Object(r.a)(s,e,c,o,f,i,a,u),t._uam_vuejs_cache_installed=!0}}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),n.default=o},function(t,n,e){"use strict";function r(t,n,e,r,i){if(!_[i]){var u=c(t,n,e,r,i);_[i]=u.then(function(){o(i)}).catch(function(t){throw o(i),t})}return _[i]}function o(t){_[t]=null}function i(t,n,e,o,i,c,u){return{state:{cache:n,db_version:t,updating_cache:!1,user_id:e},actions:{reset:function(t){var n=t.getters;return r(i,o,u,c,n.userId)},updateCachedUserId:function(t,n){(0,t.commit)("UPDATE_CACHED_USER_ID",n)}},getters:{cacheData:function(t){return function(n){return t.cache[n]}},cachedUserId:function(t){return t.user_id},dbVersion:function(t){return t.db_version},updatingCache:function(t){return t.updating_cache},userId:function(t){return t.user_id}},mutations:{UPDATE_DB_VERSION:function(t,n){t.db_version=n},UPDATE_CACHE:function(t,n){t.cache=n,t.updating_cache=!1},UPDATE_CACHE_START:function(t){t.updating_cache=!0},UPDATE_CACHED_USER_ID:function(t,n){t.user_id!==n&&(t.user_id=n,y||n?m(n).allDocs({include_docs:!0,keys:["db_version","cache"]}).then(function(e){var s=e.rows[0].error?null:e.rows[0].doc.data,a=e.rows[1].error?{}:e.rows[1].doc.data;t.cache=a,s!==t.db_version&&(t.db_version=s,r(i,o,u,c,n))}):t.cache={})}},namespaced:!0}}function c(t,n,e,r,o){return new f.a(function(i,c){y||o?(n.commit(d+"/UPDATE_CACHE_START"),t.get(e).then(function(t){var e=t.headers[r];n.commit(d+"/UPDATE_DB_VERSION",e),n.commit(d+"/UPDATE_CACHE",t.data),m(o).get("cache").then(function(n){n.data=t.data,m(o).put(n)}).catch(function(n){m(o).put({_id:"cache",data:t.data})}),m(o).get("db_version").then(function(t){t.data=e,m(o).put(t)}).catch(function(t){m(o).put({_id:"db_version",data:e})}),i()}).catch(function(t){c(t)})):i()})}function u(t,n,e,o){n.interceptors.response.use(function(i){var c=t.getters[d+"/userId"];if(y||c){var u=document.createElement("a"),s="^/?"+o+"$";if(u.href=i.config.url,!u.pathname.match(s)){var a=i.headers[e];t.getters[d+"/dbVersion"]!==a&&r(n,t,o,e,c)}}return i})}function s(t,n,e,r,o,c,s,a){return h=c,d=s,y=a,new f.a(function(c){if(a||o)m(o).allDocs({include_docs:!0,keys:["db_version","cache"]}).then(function(s){var a=s.rows[0].error?"":s.rows[0].doc.data,f=s.rows[1].error?{}:s.rows[1].doc.data,l=i(a,f,o,t,n,e,r);t.registerModule(d,l),u(t,n,e,r),c(l)});else{var s=i("",{},o,t,n,e,r);t.registerModule(d,s),u(t,n,e,r),c(s)}})}n.a=s;var a=e(37),f=e.n(a),l=e(72),p=e.n(l),v={},h="",d="",_={},y=!0,m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return v[t]||(v[t]=new p.a(h+(t?"_"+t:""),{adapter:"idb",revs_limit:1})),v[t]}},function(t,n,e){t.exports={default:e(38),__esModule:!0}},function(t,n,e){e(39),e(40),e(55),e(59),e(70),e(71),t.exports=e(3).Promise},function(t,n){},function(t,n,e){"use strict";var r=e(41)(!0);e(21)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(14),o=e(15);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),s=r(e),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},function(t,n,e){t.exports=!e(6)&&!e(23)(function(){return 7!=Object.defineProperty(e(16)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var r=e(46),o=e(24),i=e(19),c={};e(4)(c,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(2),o=e(47),i=e(28),c=e(18)("IE_PROTO"),u=function(){},s=function(){var t,n=e(16)("iframe"),r=i.length;for(n.style.display="none",e(29).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(11),o=e(2),i=e(48);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,s=0;u>s;)r.f(t,e=c[s++],n[e]);return t}},function(t,n,e){var r=e(49),o=e(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(12),o=e(17),i=e(51)(!1),c=e(18)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),s=0,a=[];for(e in u)e!=c&&r(u,e)&&a.push(e);for(;n.length>s;)r(u,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(17),o=e(25),i=e(52);t.exports=function(t){return function(n,e,c){var u,s=r(n),a=o(s.length),f=i(c,a);if(t&&e!=e){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(14),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(12),o=e(54),i=e(18)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(56);for(var r=e(0),o=e(4),i=e(7),c=e(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var a=u[s],f=r[a],l=f&&f.prototype;l&&!l[c]&&o(l,c,a),i[a]=i.Array}},function(t,n,e){"use strict";var r=e(57),o=e(58),i=e(7),c=e(17);t.exports=e(21)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,c,u=e(22),s=e(0),a=e(9),f=e(30),l=e(8),p=e(5),v=e(10),h=e(60),d=e(61),_=e(31),y=e(32).set,m=e(66)(),x=e(20),g=e(33),w=e(34),b=s.TypeError,P=s.process,j=s.Promise,S="process"==f(P),T=function(){},E=o=x.f,O=!!function(){try{var t=j.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(T,T)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n}catch(t){}}(),A=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,c,u=o?n.ok:n.fail,s=n.resolve,a=n.reject,f=n.domain;try{u?(o||(2==t._h&&D(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),c=!0)),e===n.promise?a(b("Promise-chain cycle")):(i=A(e))?i.call(e,s,a):s(e)):a(r)}catch(t){f&&!c&&f.exit(),a(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&C(t)})}},C=function(t){y.call(s,function(){var n,e,r,o=t._v,i=L(t);if(i&&(n=g(function(){S?P.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=S||L(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){y.call(s,function(){var n;S?P.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=A(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,a(I,r,1),a(R,r,1))}catch(t){R.call(r,t)}}):(e._v=t,e._s=1,M(e,!1))}catch(t){R.call({_w:e,_d:!1},t)}}};O||(j=function(t){h(this,j,"Promise","_h"),v(t),r.call(this);try{t(a(I,this,1),a(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(67)(j.prototype,{then:function(t,n){var e=E(_(this,j));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=S?P.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(I,t,1),this.reject=a(R,t,1)},x.f=E=function(t){return t===j||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!O,{Promise:j}),e(19)(j,"Promise"),e(68)("Promise"),c=e(3).Promise,l(l.S+l.F*!O,"Promise",{reject:function(t){var n=E(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!O),"Promise",{resolve:function(t){return w(u&&this===c?j:this,t)}}),l(l.S+l.F*!(O&&e(69)(function(t){j.all(t).catch(T)})),"Promise",{all:function(t){var n=this,e=E(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,c=1;d(t,!1,function(t){var u=i++,s=!1;e.push(void 0),c++,n.resolve(t).then(function(t){s||(s=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=E(n),r=e.reject,o=g(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(9),o=e(62),i=e(63),c=e(2),u=e(25),s=e(64),a={},f={},n=t.exports=function(t,n,e,l,p){var v,h,d,_,y=p?function(){return t}:s(t),m=r(e,l,n?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=u(t.length);v>x;x++)if((_=n?m(c(h=t[x])[0],h[1]):m(t[x]))===a||_===f)return _}else for(d=y.call(t);!(h=d.next()).done;)if((_=o(d,m,h.value,n))===a||_===f)return _};n.BREAK=a,n.RETURN=f},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(7),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(30),o=e(1)("iterator"),i=e(7);t.exports=e(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(32).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==e(13)(c);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){c.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve();e=function(){f.then(a)}}else e=function(){o.call(r,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(4);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(3),i=e(11),c=e(6),u=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(8),o=e(3),i=e(0),c=e(31),u=e(34);r(r.P+r.R,"Promise",{finally:function(t){var n=c(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(8),o=e(20),i=e(33);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(n,e){n.exports=t}])});