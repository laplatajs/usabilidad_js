!function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var i={};for(var o in e)e.hasOwnProperty(o)&&(i[o]=t.util.clone(e[o]));return i;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var i=t.util.clone(t.languages[e]);for(var o in n)i[o]=n[o];return i},insertBefore:function(e,n,i,o){o=o||t.languages;var r=o[e],a={};for(var s in r)if(r.hasOwnProperty(s)){if(s==n)for(var l in i)i.hasOwnProperty(l)&&(a[l]=i[l]);a[s]=r[s]}return o[e]=a},DFS:function(e,n){for(var i in e)n.call(e,i,e[i]),"Object"===t.util.type(e)&&t.languages.DFS(e[i],n)}},highlightAll:function(e,n){for(var i,o=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;i=o[r++];)t.highlightElement(i,e===!0,n)},highlightElement:function(i,o,r){for(var a,s,l=i;l&&!e.test(l.className);)l=l.parentNode;if(l&&(a=(l.className.match(e)||[,""])[1],s=t.languages[a]),s){i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,l=i.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var c=i.textContent;if(c){var u={element:i,language:a,grammar:s,code:c};if(t.hooks.run("before-highlight",u),o&&self.Worker){var p=new Worker(t.filename);p.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),a),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u)},p.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(i),t.hooks.run("after-highlight",u)}}},highlight:function(e,i,o){var r=t.tokenize(e,i);return n.stringify(t.util.encode(r),o)},tokenize:function(e,n){var i=t.Token,o=[e],r=n.rest;if(r){for(var a in r)n[a]=r[a];delete n.rest}e:for(var a in n)if(n.hasOwnProperty(a)&&n[a]){var s=n[a];s="Array"===t.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],u=c.inside,p=!!c.lookbehind,f=0,d=c.alias;c=c.pattern||c;for(var g=0;g<o.length;g++){var b=o[g];if(o.length>e.length)break e;if(!(b instanceof i)){c.lastIndex=0;var h=c.exec(b);if(h){p&&(f=h[1].length);var m=h.index-1+f,h=h[0].slice(f),v=h.length,y=m+v,k=b.slice(0,m+1),w=b.slice(y+1),x=[g,1];k&&x.push(k);var z=new i(a,u?t.tokenize(h,u):h,d);x.push(z),w&&x.push(w),Array.prototype.splice.apply(o,x)}}}}}return o},hooks:{all:{},add:function(e,n){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(n)},run:function(e,n){var i=t.hooks.all[e];if(i&&i.length)for(var o,r=0;o=i[r++];)o(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,i,o){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,i,e)}).join("");var r={type:e.type,content:n.stringify(e.content,i,o),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:o};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var a="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,a)}t.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,o=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(o,t.languages[i])))),self.close()},!1),self.Prism):self.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/gi},n.languages.markup&&n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/gi,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.css}}}),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var i=t.getAttribute("data-src"),o=(i.match(/\.(\w+)$/)||[,""])[1],r=e[o]||o,a=document.createElement("code");a.className="language-"+r,t.textContent="",a.textContent="Loading…",t.appendChild(a);var s=new XMLHttpRequest;s.open("GET",i,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(a.textContent=s.responseText,n.highlightElement(a)):a.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})}}()},{}],2:[function(e,t){t.exports=function(e){return function(t){var n,i,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return l(1)?(s(n,i+1),!1):(o[e]&&s(e,0),void 0)},a=function(){var e=n-1;return l(-1)?(s(n,i-1),!1):(o[e]&&s(e,o[e].length-1),void 0)},s=function(e,t){n=e,i=t,o.forEach(function(n,i){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=o?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==o[n][i+e]};t.on("next",r),t.on("prev",a),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],3:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],4:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],o=i.offsetHeight,r=i.offsetWidth,a="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",n.insertBefore(t,e),t.appendChild(e),t},l=a?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),u=a?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},p=function(){var e=n.offsetWidth/r,t=n.offsetHeight/o;l.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",p),p()}}},{}],5:[function(e,t){t.exports=function(){return function(e){var t=function(t,n){var i=n.slide.getAttribute("data-bespoke-state");i&&i.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],6:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof i?o=i:"undefined"!=typeof self&&(o=self);var r=o;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.voltaire=e()}}(function(){return function t(n,i,o){function r(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=i[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return r(t?t:e)},u,u.exports,t,n,i,o)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t){var n=e("bespoke-classes"),i=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}.bespoke-parent{font-size:1.5em;background:#111;color:#fff;font-family:gill sans,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;width:720px;height:480px;position:absolute;top:50%;left:50%;margin-left:-360px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bespoke-active{-webkit-transition-delay:.3s;transition-delay:.3s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw}.bespoke-progress-bar{background:#fff;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}h1 strong{font-weight:600}h1,h2,h3,p,li{padding-left:20px;padding-right:20px}h1,h3,p,li,pre{font-weight:200}h1{font-family:didot,times new roman,serif;font-style:italic;margin:.17em 0}h2{font-family:gill sans,helvetica,arial,arial,sans-serif;font-weight:400;font-size:1.1em;margin:.1em 0}h2,h3{font-style:normal}h3{font-size:.6em;margin:1.1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30;text-shadow:0 2px 0 rgba(0,0,0,.75)}';return i(e,{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var r=e.slides[e.slide()],a=o-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var i=document.createElement("style");i.setAttribute("type","text/css"),"textContent"in i?i.textContent=e:i.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(i,o.childNodes[0]):o.appendChild(i)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t){t.exports=function(e){return function(t){var n,i,o="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+o],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+o]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],8:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),i=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),o=i[0],r={},a=function(e,t){i[e]&&(u("deactivate",p(o,t)),o=i[e],u("activate",p(o,t)))},s=function(e,t){return arguments.length?(u("slide",p(i[e],t))&&a(e,t),void 0):i.indexOf(o)},l=function(e,t){var n=i.indexOf(o)+e;u(e>0?"next":"prev",p(o,t))&&a(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}},u=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},p=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,fire:u,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),a(0),f};t.exports={from:n}},{}],9:[function(e){var t=e("bespoke"),n=e("bespoke-theme-voltaire"),i=e("bespoke-keys"),o=e("bespoke-touch"),r=e("bespoke-bullets"),a=e("bespoke-scale"),s=e("bespoke-state");t.from("article",[n(),i(),o(),r("li, .bullet"),a(),s()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,bespoke:8,"bespoke-bullets":2,"bespoke-keys":3,"bespoke-scale":4,"bespoke-state":5,"bespoke-theme-voltaire":6,"bespoke-touch":7}]},{},[9]);