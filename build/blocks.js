this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks.blocks=function(t){function e(e){for(var n,i,s=e[0],u=e[1],a=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,a||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,s=1;s<o.length;s++){var u=o[s];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={9:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=u;return c.push([761,2,0,1]),o()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},27:function(t,e){!function(){t.exports=this.wp.compose}()},29:function(t,e){!function(){t.exports=this.wc.wcSettings}()},30:function(t,e){!function(){t.exports=this.wp.blocks}()},447:function(t,e,o){},450:function(t,e){(0,wp.hooks.addFilter)("blocks.getBlockAttributes","woocommerce-blocks/get-block-attributes",(function(t,e){return e.name.startsWith("woocommerce/")&&Object.keys(e.attributes).map((function(o){return void 0===t[o]&&void 0!==e.defaults&&void 0!==e.defaults[o]&&(t[o]=e.defaults[o]),o})),t}))},5:function(t,e){!function(){t.exports=this.lodash}()},761:function(t,e,o){"use strict";o.r(e);var n=o(73),r=o.n(n),c=o(0),i=o(30),s=o(1),u=o(53),a=o(7),l=o.n(a),f=function(t){var e=t.className,o=t.size;return Object(c.createElement)(u.c,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 145",className:l()("woo-icon",e),width:Math.floor(1.67*o),height:o},Object(c.createElement)("path",{fill:"#96588A",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(c.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))},p=(o(447),o(448),o(11)),h=o.n(p),b=o(20),d=o.n(b),m=o(26),v=o.n(m),w=o(16),k=o.n(w),g=o(21),y=o.n(g),O=o(22),j=o.n(O),x=o(10),W=o.n(x),A=o(6),M=o.n(A),z=o(27),C=o(29);function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var P=wp.blocks.getBlockType,_=wp.hooks.addFilter,B=Object(z.createHigherOrderComponent)((function(t){return function(e){y()(r,e);var o,n=(o=r,function(){var t,e=W()(o);if(D()){var n=W()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j()(this,t)});function r(){var t;d()(this,r);for(var e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return t=n.call.apply(n,[this].concat(o)),M()(k()(t),"mounted",!1),t}return v()(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.block,o=t.setAttributes;e.name.startsWith("woocommerce/")&&o(this.getAttributesWithDefaults())}},{key:"componentDidUpdate",value:function(){this.props.block.name.startsWith("woocommerce/")&&!this.mounted&&(this.mounted=!0)}},{key:"getAttributesWithDefaults",value:function(){var t=P(this.props.block.name),e=this.props.attributes;return!this.mounted&&this.props.block.name.startsWith("woocommerce/")&&void 0!==t.attributes&&void 0!==t.defaults&&(e=Object.assign({},this.props.attributes||{}),Object.keys(t.attributes).map((function(o){return void 0===e[o]&&void 0!==t.defaults[o]&&(e[o]=t.defaults[o]),o}))),e}},{key:"render",value:function(){return Object(c.createElement)(t,h()({},this.props,{attributes:this.getAttributesWithDefaults()}))}}]),r}(c.Component)}),"withDefaultAttributes");Object(C.compareWithWpVersion)("5.3","<=")&&_("editor.BlockListBlock","woocommerce-blocks/block-list-block",B);o(450);Object(i.setCategories)([].concat(r()(Object(i.getCategories)().filter((function(t){return"woocommerce"!==t.slug}))),[{slug:"woocommerce",title:Object(s.__)("WooCommerce","woo-gutenberg-products-block"),icon:Object(c.createElement)(f,null)}]))}});