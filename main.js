(()=>{"use strict";let e=[];const t=document.getElementById("side-bar"),n=document.getElementById("main");function r(){let e=document.getElementById("side-bar").getElementsByClassName("folder");for(var t=0;t<e.length;t++)e[t].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace(" active","")),this.className+=" active",n.querySelectorAll(".card").forEach((e=>e.remove())),u()}))}function a(e){let n=document.createElement("a");n.innerHTML=`${e}`,n.classList.add("folder"),n.dataset.title=e,o(e,n),t.prepend(n),r(),c()}function o(n,r){let a=document.createElement("span");a.classList.add("project-del-btn"),a.textContent="x",r.appendChild(a),a.addEventListener("click",(r=>{confirm("Are you sure you want to delete this folder? All associated TODO's will be removed.")&&function(n,r){for(let t=0;t<e.length;t++)e[t].folder==r&&e.splice(t,1);let a=n.target.parentElement;t.removeChild(a),c()}(r,n)}))}function i(e,t,n,r,a){this.folder=e,this.title=t,this.date=n,this.description=r,this.complete=a}function u(){if(null!=document.querySelector(".active")){let t=document.querySelector(".active").dataset.title;e.length>0&&e.forEach((e=>{if(t===e[Object.keys(e)[0]]){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n      <div class= "card-header">\n      <strong>Title:</strong><br>${e.title}\n      </div>\n      <div class="card-body">\n      <strong>Description:</strong><br>${e.description}\n      </div>\n      <div class="card-footer">\n    <strong>Date:</strong> ${e.date}\n          </div>`,function(e,t){let n=document.createElement("span");n.classList.add("task-complete-btn"),n.innerHTML='<i class="fas fa-check"></i>',e.appendChild(n),n.addEventListener("click",(n=>{!1===t.complete?(t.complete=!0,e.style.textDecoration="line-through",c()):(t.complete=!1,e.style.textDecoration="none",c())}))}(t,e),s(t),n.prepend(t)}}))}}function s(t){let r=document.createElement("span");r.classList.add("task-del-btn"),r.textContent="x",t.appendChild(r),r.addEventListener("click",(t=>{e.splice(e.indexOf(i),1),function(e){let t=e.target.parentElement;n.removeChild(t),c()}(t)}))}function c(){localStorage.setItem("taskList",JSON.stringify(e))}const d=function(){const t=document.getElementById("content"),n=document.getElementById("main"),i=function(){const t=document.getElementById("side-bar"),n=document.createElement("a");return document.createElement("a"),function(e,t){const n=document.createTextNode("example");t.appendChild(n),t.setAttribute("data-title","example"),t.classList.add("folder"),t.classList.add("active"),o(n,t),e.appendChild(t)}(t,n),function(e){const t=document.createElement("div"),n=document.createElement("button");t.classList.add("button-container"),n.classList.add("folder-add"),n.innerHTML="<span>New Folder</span>",n.addEventListener("click",openFolderForm),t.appendChild(n),e.appendChild(t)}(t),e.forEach((function(e){let t=e[Object.keys(e)[0]];"example"!=t&&a(t)})),t}();t.appendChild(i);const u=function(){const e=document.createElement("div");return e.setAttribute("id","form-container"),e.innerHTML='\n  <form id="form">\n  <h1 class=\'d-flex justify-content-center pt-2\'>TODO</h1>\n\n    <div class="form-group p-2">\n      <label for="title">Title:</label>\n      <input id="title" type="text" class="form-control" placeholder="name" name="title" value="" required/>\n    </div>\n\n    <div class="form-group p-2">\n      <label for="date-input">Date:</label>\n      <input id="date" type="date" class="form-control" placeholder="01-01-2020" name="date" value="2021-01-01" required/>\n    </div>\n\n    <div class="form-group p-2">\n      <label for="textarea">Description:</label>\n      <textarea id="description" class="form-control" placeholder="Details" name="date" value=""></textarea>\n    </div>\n\n    <div class="button w-100 d-flex justify-content-center pb-2">\n     <button class="add-btn btn btn-primary m-2" type="button" form="form" onclick="submitForm()">Add</button>\n     <button class="cancel-btn btn btn-secondary m-2" type="button" onclick="closeForm()">Close</button>\n   </div>\n  </form>\n  ',e}();t.appendChild(u);const s=function(){const e=document.createElement("div");return e.setAttribute("id","folder-form-container"),e.innerHTML='\n  <form id="folder-form">\n  <h1 class=\'d-flex justify-content-center pt-2\'>New Folder</h1>\n    <div class="form-group p-2">\n      <label for="new-folder">Name:</label>\n      <input id="new-folder" type="text" class="form-control" placeholder="name" name="new-folder" value="" required/>\n    </div>\n    <div class="button w-100 d-flex justify-content-center pb-2">\n     <button class="add-btn btn btn-primary m-2" type="button" form="form" onclick="newFolder()">Add</button>\n     <button class="cancel-btn btn btn-secondary m-2" type="button" onclick="closeForm()">Close</button>\n   </div>\n  </form>\n  ',e}();t.appendChild(s);const c=function(){const e=document.createElement("div");return e.classList.add("btn-div"),e.innerHTML='<button class="new-task-btn" onclick="openForm()"><i class="fas fa-plus fa-lg"></i></button>',e}();n.appendChild(c),r()},l=document.getElementById("main");function m(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function f(e){m(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function h(e){m(1,arguments);var t=f(e);return!isNaN(t)}window.openForm=function(){document.getElementById("form-container").style.display="block"},window.openFolderForm=function(){document.getElementById("folder-form-container").style.display="block"},window.closeForm=function(){document.getElementById("form-container").style.display="none",document.getElementById("folder-form-container").style.display="none"},window.submitForm=function(){!function(){let t=document.querySelector(".active");if(null==t)alert("Please choose a folder to submit TODO");else{let n=document.getElementById("title").value,r=document.getElementById("date").value,a=document.getElementById("description").value,o=t.dataset.title,s=!1;""==n||""==r||""==a?alert("Please fill TODO correctly."):(function(t,n,r,a,o){let u=new i(t,n,r,a,o);e.push(u),c()}(o,n,r,a,s),l.querySelectorAll(".card").forEach((e=>e.remove())),u(),closeForm(),form.reset())}}()},window.newFolder=function(){let e=document.getElementById("new-folder").value,t=document.getElementById("folder-form");""==e?alert("Please add a folder name."):1==function(e){let t,n=document.getElementById("side-bar").querySelectorAll(".folder");for(t=0;t<n.length;t++)if(n[t].dataset.title===e)return!0}(e)?alert("Folder names must be unique."):(a(e),closeForm(),t.reset())};var g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var b,v={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function p(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function T(e){return function(t,n){var r=String(t),a=n||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=r.match(i);if(!u)return null;var s,c=u[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(d),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}const C={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof g[e]?g[e]:1===t?g[e].one:g[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:function(e,t,n,r){return y[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:p({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:p({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:p({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:p({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:p({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(b.matchPattern);if(!a)return null;var o=a[0],i=n.match(b.parsePattern);if(!i)return null;var u=b.valueCallback?b.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function M(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function x(e,t){m(2,arguments);var n=f(e).getTime(),r=M(t);return new Date(n+r)}function E(e,t){m(2,arguments);var n=M(t);return x(e,-n)}function k(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const D=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return k("yy"===t?r%100:r,t.length)},P=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):k(n+1,2)},S=function(e,t){return k(e.getUTCDate(),t.length)},U=function(e,t){return k(e.getUTCHours()%12||12,t.length)},O=function(e,t){return k(e.getUTCHours(),t.length)},L=function(e,t){return k(e.getUTCMinutes(),t.length)},W=function(e,t){return k(e.getUTCSeconds(),t.length)},N=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return k(Math.floor(r*Math.pow(10,n-3)),t.length)};var q=864e5;function Y(e){m(1,arguments);var t=1,n=f(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function F(e){m(1,arguments);var t=f(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Y(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=Y(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function B(e){m(1,arguments);var t=F(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=Y(n);return r}var j=6048e5;function H(e,t){m(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:M(a),i=null==n.weekStartsOn?o:M(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=f(e),s=u.getUTCDay(),c=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function z(e,t){m(1,arguments);var n=f(e,t),r=n.getUTCFullYear(),a=t||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:M(i),s=null==a.firstWeekContainsDate?u:M(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=H(c,t),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var h=H(l,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function A(e,t){m(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:M(a),i=null==n.firstWeekContainsDate?o:M(n.firstWeekContainsDate),u=z(e,t),s=new Date(0);s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0);var c=H(s,t);return c}var I=6048e5;function X(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+k(o,2)}function Q(e,t){return e%60==0?(e>0?"-":"+")+k(Math.abs(e)/60,2):G(e,t)}function G(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+k(Math.floor(a/60),2)+n+k(a%60,2)}const R={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return D(e,t)},Y:function(e,t,n,r){var a=z(e,r),o=a>0?a:1-a;return"YY"===t?k(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):k(o,t.length)},R:function(e,t){return k(F(e),t.length)},u:function(e,t){return k(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){m(1,arguments);var n=f(e),r=H(n,t).getTime()-A(n,t).getTime();return Math.round(r/I)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):k(a,t.length)},I:function(e,t,n){var r=function(e){m(1,arguments);var t=f(e),n=Y(t).getTime()-B(t).getTime();return Math.round(n/j)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):k(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):S(e,t)},D:function(e,t,n){var r=function(e){m(1,arguments);var t=f(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/q)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):k(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return k(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return k(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):O(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):L(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W(e,t)},S:function(e,t){return N(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Q(a);case"XXXX":case"XX":return G(a);case"XXXXX":case"XXX":default:return G(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Q(a);case"xxxx":case"xx":return G(a);case"xxxxx":case"xxx":default:return G(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+X(a,":");case"OOOO":default:return"GMT"+G(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+X(a,":");case"zzzz":default:return"GMT"+G(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return k(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return k((r._originalDate||e).getTime(),t.length)}};function J(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function $(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const _={p:$,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return J(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",J(a,t)).replace("{{time}}",$(o,t))}};var V=6e4;function K(e){return e.getTime()%V}function Z(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(V+K(t))%V:K(t);return n*V+r}var ee=["D","DD"],te=["YY","YYYY"];function ne(e){return-1!==ee.indexOf(e)}function re(e){return-1!==te.indexOf(e)}function ae(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ue=/^'([^]*?)'?$/,se=/''/g,ce=/[a-zA-Z]/;function de(e){return e.match(ue)[1].replace(se,"'")}!function(){if(localStorage.taskList){let t=localStorage.getItem("taskList");t=JSON.parse(t),e=t,d(),u()}else d()}(),function(){const e=function(e,t,n){m(2,arguments);var r=String(t),a=n||{},o=a.locale||C,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:M(i),s=null==a.firstWeekContainsDate?u:M(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:M(c),l=null==a.weekStartsOn?d:M(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=f(e);if(!h(g))throw new RangeError("Invalid time value");var w=Z(g),b=E(g,w),v={firstWeekContainsDate:s,weekStartsOn:l,locale:o,_originalDate:g};return r.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,_[t])(e,o.formatLong,v):e})).join("").match(oe).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return de(n);var i=R[r];if(i)return!a.useAdditionalWeekYearTokens&&re(n)&&ae(n,t,e),!a.useAdditionalDayOfYearTokens&&ne(n)&&ae(n,t,e),i(b,n,o.localize,v);if(r.match(ce))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date,"PPPP");document.querySelector("h1 > span").textContent=e}()})();