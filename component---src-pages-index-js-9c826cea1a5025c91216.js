webpackJsonp([35783957827783],{98:function(e,t,n){"use strict";function l(e){return e}function a(e,t,n){function a(e,t){var n=g.hasOwnProperty(t)?g[t]:null;M.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var l=e.prototype,r=l.__reactAutoBindPairs;n.hasOwnProperty(s)&&b.mixins(e,n.mixins);for(var u in n)if(n.hasOwnProperty(u)&&u!==s){var o=n[u],c=l.hasOwnProperty(u);if(a(c,u),b.hasOwnProperty(u))b[u](e,o);else{var d=g.hasOwnProperty(u),m="function"==typeof o,E=m&&!d&&!c&&n.autobind!==!1;if(E)r.push(u,o),l[u]=o;else if(c){var h=g[u];i(d&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,u),"DEFINE_MANY_MERGED"===h?l[u]=f(l[u],o):"DEFINE_MANY"===h&&(l[u]=p(l[u],o))}else l[u]=o}}}else;}function c(e,t){if(t)for(var n in t){var l=t[n];if(t.hasOwnProperty(n)){var a=n in b;i(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;i(!r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=l}}}function d(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),l=t.apply(this,arguments);if(null==n)return l;if(null==l)return n;var a={};return d(a,n),d(a,l),a}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var l=t[n],a=t[n+1];e[l]=m(e,a)}}function h(e){var t=l(function(e,l,a){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=l,this.refs=o,this.updater=a||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;i("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new N,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,v),r(t,e),r(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var a in g)t.prototype[a]||(t.prototype[a]=null);return t}var y=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=u({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=u({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=u({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},N=function(){};return u(N.prototype,e.prototype,M),h}var r,u=n(3),o=n(36),i=n(1),s="mixins";r={},e.exports=a},171:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,r=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,s=i&&i(Object);e.exports=function e(t,c,d){if("string"!=typeof c){if(s){var f=i(c);f&&f!==s&&e(t,f,d)}var p=r(c);u&&(p=p.concat(u(c)));for(var m=0;m<p.length;++m){var E=p[m];if(!(n[E]||l[E]||d&&d[E])){var h=o(c,E);try{a(t,E,h)}catch(e){}}}return t}return t}},3:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var l=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==l.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=l()?Object.assign:function(e,t){for(var l,o,i=n(e),s=1;s<arguments.length;s++){l=Object(arguments[s]);for(var c in l)r.call(l,c)&&(i[c]=l[c]);if(a){o=a(l);for(var d=0;d<o.length;d++)u.call(l,o[d])&&(i[o[d]]=l[o[d]])}}return i}},231:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a);t.default=function(e){var t=e.children;return r.default.createElement("div",{style:{display:"flex",flexFlow:"row wrap",width:"815px",height:"100%",margin:"auto",backgroundColor:"rgb(255, 255, 255)",boxShadow:"0px 2px 5px #000000"}},t)},e.exports=t.default},232:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a);t.default=function(e){var t=e.children;return r.default.createElement("div",{style:{paddingBottom:"72",display:"flex",width:"100%",backgroundColor:"rgb(255, 255, 255)"}},t)},e.exports=t.default},233:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a);t.default=function(e){var t=e.children;return r.default.createElement("div",{style:{paddingTop:"0.95in",paddingLeft:"0.6in",paddingRight:"0.9in",display:"flex",width:"100%",backgroundColor:"rgb(255, 255, 255)"}},t)},e.exports=t.default},234:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a);t.default=function(e){var t=e.children;return r.default.createElement("div",{style:{flex:"0 0 36%",backgroundColor:"rgb(255, 255, 255)"}},t)},e.exports=t.default},235:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a);t.default=function(e){var t=e.children;return r.default.createElement("div",{style:{paddingTop:"0.15in",paddingLeft:"0.6in",paddingRight:"0.6in",display:"flex",width:"100%"}},t)},e.exports=t.default},236:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a);t.default=function(e){var t=e.children;return r.default.createElement("div",{style:{flex:"1",backgroundColor:"rgb(255, 255, 255)"}},t)},e.exports=t.default},239:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),r=l(a),u=n(166),o=(l(u),n(231)),i=l(o),s=n(234),c=l(s),d=n(236),f=l(d),p=n(233),m=l(p),E=n(235),h=l(E),y=n(232),g=l(y);t.default=function(){return r.default.createElement(i.default,null,r.default.createElement(m.default,null,r.default.createElement(c.default,null,r.default.createElement("h1",{className:"mainName"},r.default.createElement("span",null,"Daniel")," ",r.default.createElement("span",null,"Graf")),r.default.createElement("h3",null,"Developer | Innovator")),r.default.createElement(f.default,null,r.default.createElement("h3",{className:"right"},r.default.createElement("span",null,r.default.createElement("br",null),"danielgraf.developer@gmail.com",r.default.createElement("br",null),"(610) 763-1629")))),r.default.createElement(h.default,null,r.default.createElement(c.default,null,r.default.createElement("h2",null,"Education"),r.default.createElement("h4",null,r.default.createElement("span",null,"Carnegie Mellon University")),r.default.createElement("p",null,"August 2013 - May 2017 ",r.default.createElement("br",null),"B.S. Information Systems ",r.default.createElement("br",null),"w/ University Honors ",r.default.createElement("br",null),"Minor in German ",r.default.createElement("br",null),"3.6 GPA"),r.default.createElement("h4",null,r.default.createElement("span",null,"TU Dresden")),r.default.createElement("p",null,"Spring 2016 ",r.default.createElement("br",null),"Study Abroad ",r.default.createElement("br",null)),r.default.createElement("h4",null,r.default.createElement("span",null,"Reading High School")),r.default.createElement("p",null,"August 2009 - May 2013 ",r.default.createElement("br",null),"4.0 GPA ",r.default.createElement("br",null)),r.default.createElement("h2",null,"Skills"),r.default.createElement("h5",null,"Leadership | Microsoft Office ",r.default.createElement("br",null),"Project Management | UI/UX ",r.default.createElement("br",null),"Mobile Dev | Public Speaking ",r.default.createElement("br",null),"Frontend & Backend Dev ",r.default.createElement("br",null)),r.default.createElement("h2",null,"Programming"),r.default.createElement("h5",null,"Ruby on Rails | Ruby | SQL ",r.default.createElement("br",null),"Git | HTML | CSS | JavaScript ",r.default.createElement("br",null),"Swift | C | Python | NodeJS ",r.default.createElement("br",null),"Java | ReactJS | AngularJS ",r.default.createElement("br",null)),r.default.createElement("h2",null,"Languages"),r.default.createElement("h5",null,"English | German")),r.default.createElement(f.default,null,r.default.createElement("h2",null,"Work Experience"),r.default.createElement("h4",null,r.default.createElement("span",null,"Tech. Consultant")," • Palauan Ministry of Education • Summer ‘17"),r.default.createElement("ul",{className:"dashed"},r.default.createElement("li",null,"- Evaluated the paper-based Teacher Evaluation System"),r.default.createElement("li",null,"- Developed a full-stack Ruby on Rails solution with a MySQL database"),r.default.createElement("li",null,"- Implemented a system with log-in functionality for all staff to be able to go online and see their respective evaluations")),r.default.createElement("h4",null,r.default.createElement("span",null,"Teaching Assistant ")," • App Design and Development • Spring ‘17"),r.default.createElement("p",null,"- Worked as a TA for 67-272, the first major Information Systems course in ",r.default.createElement("br",null),"terms of web application development (Ruby on Rails) ",r.default.createElement("br",null),"- Graded tests and projects while also running weekly labs"),r.default.createElement("h4",null,r.default.createElement("span",null,"Camp Counselor")," • Bear Creek Camp • Summers ‘14-‘16"),r.default.createElement("p",null,"- Worked as a camp counselor for 10 weeks throughout the summer",r.default.createElement("br",null),"- Supervised new groups of 10-20 kids, ages 8-18, every week"),r.default.createElement("h2",null,"Project Experience"),r.default.createElement("h4",null,r.default.createElement("span",null,"Beaver County Humane Society Foster Portal ")," • Spring ‘17"),r.default.createElement("p",null,"- Continued a Ruby on Rails project that was started in 2016 ",r.default.createElement("br",null),"- Fixed bugs, reorganized basic functionality, and implemented a complete ",r.default.createElement("br",null),"design overhaul."),r.default.createElement("h4",null,r.default.createElement("span",null,"CMU Soundbytes Website")," • Spring ‘17"),r.default.createElement("p",null,"- Built a website for the CMU Soundbytes a cappella group using the",r.default.createElement("br",null),"Jekyll Ruby gem and launched it through GitHub Pages"),r.default.createElement("h4",null,r.default.createElement("span",null,"CMU Safety Pin")," • Fall ‘16"),r.default.createElement("p",null,"- An iOS application with a web-application backend ",r.default.createElement("br",null),"- Developed the iOS frontend and interactions throughout the app"),r.default.createElement("h2",null,"Other Experiences"),r.default.createElement("h4",null,r.default.createElement("span",null,"Study Abroad")," • Spring ‘16"),r.default.createElement("p",null,"- Attended the Technische Universität Dresden ",r.default.createElement("br",null),"- Developed use of German in a classroom/group setting"),r.default.createElement("h4",null,r.default.createElement("span",null,"Technical Assistant ")," • Center for Pain Control • Jan – Feb ‘16"),r.default.createElement("p",null,"- Served as tech support, set up and connected new computers to a server"),r.default.createElement("h4",null,r.default.createElement("span",null,"Guatemalan Mission Trips")," • Summers 2007-2009"),r.default.createElement("p",null,"- Provided medical aid, vacation bible school, and construction crews to ",r.default.createElement("br",null),"local families, schools, and orphanages"))),r.default.createElement(g.default,null,r.default.createElement("h2",{className:"center"},"References Available Upon Request")))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-9c826cea1a5025c91216.js.map