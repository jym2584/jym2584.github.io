"use strict";(self.webpackChunkjym2584_react=self.webpackChunkjym2584_react||[]).push([[883],{5510:function(n,r,t){t.d(r,{Z:function(){return f}});var e=t(7462),a=t(3366),i=t(7294),o=t(5505),c=t(9408),s=t(2307),u=t(2371),d=t(240);function l(n){return(0,d.Z)("MuiCardContent",n)}(0,t(2194).Z)("MuiCardContent",["root"]);var m=t(5893),p=["className","component"],g=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=i.forwardRef((function(n,r){var t=(0,u.Z)({props:n,name:"MuiCardContent"}),i=t.className,s=t.component,d=void 0===s?"div":s,f=(0,a.Z)(t,p),v=(0,e.Z)({},t,{component:d}),x=function(n){var r=n.classes;return(0,c.Z)({root:["root"]},l,r)}(v);return(0,m.jsx)(g,(0,e.Z)({as:d,className:(0,o.Z)(x.root,i),ownerState:v,ref:r},f))}))},664:function(n,r,t){t.d(r,{Z:function(){return v}});var e=t(7462),a=t(3366),i=t(7294),o=t(5505),c=t(9408),s=t(2307),u=t(2371),d=t(8953),l=t(240);function m(n){return(0,l.Z)("MuiCard",n)}(0,t(2194).Z)("MuiCard",["root"]);var p=t(5893),g=["className","raised"],f=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(){return{overflow:"hidden"}})),v=i.forwardRef((function(n,r){var t=(0,u.Z)({props:n,name:"MuiCard"}),i=t.className,s=t.raised,d=void 0!==s&&s,l=(0,a.Z)(t,g),v=(0,e.Z)({},t,{raised:d}),x=function(n){var r=n.classes;return(0,c.Z)({root:["root"]},m,r)}(v);return(0,p.jsx)(f,(0,e.Z)({className:(0,o.Z)(x.root,i),elevation:d?8:void 0,ref:r,ownerState:v},l))}))},4320:function(n,r,t){t.d(r,{ZP:function(){return k}});var e=t(2982),a=t(4942),i=t(3366),o=t(7462),c=t(7294),s=t(5505),u=t(2692),d=t(8297),l=t(9408),m=t(2307),p=t(2371);var g=c.createContext(),f=t(240);function v(n){return(0,f.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Z=(0,t(2194).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,e.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,e.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,e.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,e.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,e.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,e.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,e.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,e.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),w=t(5893),S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function h(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function b(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r||!n||n<=0)return[];if("string"==typeof n&&!Number.isNaN(Number(n))||"number"==typeof n)return[t["spacing-xs-".concat(String(n))]||"spacing-xs-".concat(String(n))];var e=n.xs,a=n.sm,i=n.md,o=n.lg,c=n.xl;return[Number(e)>0&&(t["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))),Number(a)>0&&(t["spacing-sm-".concat(String(a))]||"spacing-sm-".concat(String(a))),Number(i)>0&&(t["spacing-md-".concat(String(i))]||"spacing-md-".concat(String(i))),Number(o)>0&&(t["spacing-lg-".concat(String(o))]||"spacing-lg-".concat(String(o))),Number(c)>0&&(t["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var M=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState,a=t.container,i=t.direction,o=t.item,c=t.lg,s=t.md,u=t.sm,d=t.spacing,l=t.wrap,m=t.xl,p=t.xs,g=t.zeroMinWidth;return[r.root,a&&r.container,o&&r.item,g&&r.zeroMinWidth].concat((0,e.Z)(b(d,a,r)),["row"!==i&&r["direction-xs-".concat(String(i))],"wrap"!==l&&r["wrap-xs-".concat(String(l))],!1!==p&&r["grid-xs-".concat(String(p))],!1!==u&&r["grid-sm-".concat(String(u))],!1!==s&&r["grid-md-".concat(String(s))],!1!==c&&r["grid-lg-".concat(String(c))],!1!==m&&r["grid-xl-".concat(String(m))]])}})((function(n){var r=n.ownerState;return(0,o.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"nowrap"===r.wrap&&{flexWrap:"nowrap"},"reverse"===r.wrap&&{flexWrap:"wrap-reverse"})}),(function(n){var r=n.theme,t=n.ownerState,e=(0,u.P$)({values:t.direction,breakpoints:r.breakpoints.values});return(0,u.k9)({theme:r},e,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(Z.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,t=n.ownerState,e=t.container,i=t.rowSpacing,o={};if(e&&0!==i){var c=(0,u.P$)({values:i,breakpoints:r.breakpoints.values});o=(0,u.k9)({theme:r},c,(function(n){var t=r.spacing(n);return"0px"!==t?(0,a.Z)({marginTop:"-".concat(h(t))},"& > .".concat(Z.item),{paddingTop:h(t)}):{}}))}return o}),(function(n){var r=n.theme,t=n.ownerState,e=t.container,i=t.columnSpacing,o={};if(e&&0!==i){var c=(0,u.P$)({values:i,breakpoints:r.breakpoints.values});o=(0,u.k9)({theme:r},c,(function(n){var t=r.spacing(n);return"0px"!==t?(0,a.Z)({width:"calc(100% + ".concat(h(t),")"),marginLeft:"-".concat(h(t))},"& > .".concat(Z.item),{paddingLeft:h(t)}):{}}))}return o}),(function(n){var r,t=n.theme,e=n.ownerState;return t.breakpoints.keys.reduce((function(n,a){var i={};if(e[a]&&(r=e[a]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:e.columns,breakpoints:t.breakpoints.values}),s="object"==typeof c?c[a]:c;if(null==s)return n;var d="".concat(Math.round(r/s*1e8)/1e6,"%"),l={};if(e.container&&e.item&&0!==e.columnSpacing){var m=t.spacing(e.columnSpacing);if("0px"!==m){var p="calc(".concat(d," + ").concat(h(m),")");l={flexBasis:p,maxWidth:p}}}i=(0,o.Z)({flexBasis:d,flexGrow:0,maxWidth:d},l)}return 0===t.breakpoints.values[a]?Object.assign(n,i):n[t.breakpoints.up(a)]=i,n}),{})})),k=c.forwardRef((function(n,r){var t,a=(0,p.Z)({props:n,name:"MuiGrid"}),u=(0,d.Z)(a),m=u.className,f=u.columns,x=u.columnSpacing,Z=u.component,h=void 0===Z?"div":Z,k=u.container,N=void 0!==k&&k,W=u.direction,C=void 0===W?"row":W,P=u.item,E=void 0!==P&&P,z=u.lg,R=void 0!==z&&z,j=u.md,y=void 0!==j&&j,G=u.rowSpacing,B=u.sm,$=void 0!==B&&B,F=u.spacing,L=void 0===F?0:F,O=u.wrap,T=void 0===O?"wrap":O,_=u.xl,D=void 0!==_&&_,q=u.xs,A=void 0!==q&&q,H=u.zeroMinWidth,I=void 0!==H&&H,J=(0,i.Z)(u,S),K=G||L,Q=x||L,U=c.useContext(g),V=f||U||12,X=(0,o.Z)({},u,{columns:V,container:N,direction:C,item:E,lg:R,md:y,sm:$,rowSpacing:K,columnSpacing:Q,wrap:T,xl:D,xs:A,zeroMinWidth:I}),Y=function(n){var r=n.classes,t=n.container,a=n.direction,i=n.item,o=n.lg,c=n.md,s=n.sm,u=n.spacing,d=n.wrap,m=n.xl,p=n.xs,g={root:["root",t&&"container",i&&"item",n.zeroMinWidth&&"zeroMinWidth"].concat((0,e.Z)(b(u,t)),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==p&&"grid-xs-".concat(String(p)),!1!==s&&"grid-sm-".concat(String(s)),!1!==c&&"grid-md-".concat(String(c)),!1!==o&&"grid-lg-".concat(String(o)),!1!==m&&"grid-xl-".concat(String(m))])};return(0,l.Z)(g,v,r)}(X);return t=(0,w.jsx)(M,(0,o.Z)({ownerState:X,className:(0,s.Z)(Y.root,m),as:h,ref:r},J)),12!==V?(0,w.jsx)(g.Provider,{value:V,children:t}):t}))},9616:function(n,r,t){t.r(r);var e=t(7294),a=t(5327),i=t(3751),o=t(4320),c=t(664),s=t(5510),u=t(9308);r.default=function(n){var r=n.data,t=n.location,d=r.site.siteMetadata.title;return e.createElement(a.Z,{location:t,title:d},e.createElement(i.Z,{title:"404"}),e.createElement(o.ZP,{container:!0,spacing:2,direction:"row"},e.createElement(o.ZP,{item:!0,xs:12},e.createElement(c.Z,{style:{border:"none",boxShadow:"none"}},e.createElement(s.Z,null,e.createElement(u.Z,{variant:"h4"},"404 - Page not found")))),e.createElement(o.ZP,{item:!0,xs:12},e.createElement(c.Z,null,e.createElement(s.Z,null,e.createElement(u.Z,null,"Feelsbadman"))))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-fcf0841d9c8cc7b3877a.js.map