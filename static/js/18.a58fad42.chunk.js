webpackJsonp([18],{79:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),n=a.n(o),r=a(83),i=a.n(r),l=a(84),c=a.n(l),s=a(85),d=a.n(s),m=function(){return n.a.createElement("section",{id:"intro"},n.a.createElement("h2",{className:"heading"}," Portfolio "),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"grid-12 mgrid p-tb-30"},n.a.createElement(i.a,{duration:800,delay:0},n.a.createElement("a",{href:"https://s0npari11.github.io/"},n.a.createElement("div",{className:"card portfolioCard"},n.a.createElement("img",{alt:"project-image",className:"img",src:c.a}),n.a.createElement("div",{className:"heading"}," Parag Mahale - Portfolio "),n.a.createElement("div",{className:"text"}," A portfolio website keeping simplicity and easy-navigation in mind. ")))),n.a.createElement(i.a,{duration:800,delay:50},n.a.createElement("a",{href:"https://chipmunkstore.com/"},n.a.createElement("div",{className:"card  portfolioCard"},n.a.createElement("img",{alt:"project-image",className:"img",src:d.a}),n.a.createElement("div",{className:"heading"}," Chipmunk Store "),n.a.createElement("div",{className:"text"}," Chipmunk store is India based clothing and apparel eCommerce business, specializing in casual clothing. ")))))))};t.default=m},83:function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.up,r=t.down,i=t.top,l=t.bottom,c=t.mirror,d=t.opposite,u=(a?1:0)|(o?2:0)|(i||r?4:0)|(l||n?8:0)|(c?16:0)|(d?32:0)|(e?64:0);if(m.hasOwnProperty(u))return m[u];if(!c!=!(e&&d)){var p=[o,a,l,i,r,n];a=p[0],o=p[1],i=p[2],l=p[3],n=p[4],r=p[5]}var f=a||o,v=i||l||n||r,b=f||v,g=void 0,h=void 0,y=void 0,E=void 0,x=void 0;return b?e?(h=f?(a?"":"-")+"42px":"0",y=v?(r||i?"-":"")+"60px":"0",E=f?(o?"":"-")+"2000px":"0",x=v?(n||l?"":"-")+"2000px":"0",g="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+h+", "+y+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+E+", "+x+", 0);\n          transform-origin: "+(v?"center bottom":(a?"left":"right")+" center")+";\n        }"):(h=f?(a?"-":"")+"1000px":"0",y=v?(r||i?"-":"")+"1000px":"0",E=f?(o?"-":"")+"10px":"0",x=v?(n||l?"-":"")+"60px":"0",g="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+h+", "+y+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+E+", "+x+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }"):g=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",m[u]=(0,s.animation)(g),m[u]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,i=e.duration,l=void 0===i?s.defaults.duration:i,d=e.delay,m=void 0===d?s.defaults.delay:d,u=e.count,p=void 0===u?s.defaults.count:u,f=o(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===r?l:r,delay:m,forever:a,count:p,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),l=a(63),c=function(e){return e&&e.__esModule?e:{default:e}}(l),s=a(62),d={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=d,t.default=r,e.exports=t.default},84:function(e,t,a){e.exports=a.p+"static/media/s0npaRi11-portfolio-img.5fc8d187.webp"},85:function(e,t,a){e.exports=a.p+"static/media/chipmunk-store-img.84c6f540.webp"}});
//# sourceMappingURL=18.a58fad42.chunk.js.map