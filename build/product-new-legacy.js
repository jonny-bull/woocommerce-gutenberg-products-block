this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-new"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],p=0,b=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);b.length;)b.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={16:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return c.push([588,0,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.React}()},12:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},13:function(e,t){!function(){e.exports=this.moment}()},20:function(e,t){!function(){e.exports=this.wp.editor}()},21:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(12),o=r.n(n),c=r(22),i=r.n(c),u=function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},26:function(e,t,r){"use strict";r.d(t,"g",(function(){return b})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return h})),r.d(t,"f",(function(){return m})),r.d(t,"a",(function(){return O})),r.d(t,"h",(function(){return w}));var n=r(6),o=r.n(n),c=r(9),i=r(7),u=r.n(i),a=r(5),s=r(4);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,l=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,a={per_page:s.g?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)(s.d.products,p({},a,{},u))];return s.g&&r.length&&l.push(Object(c.addQueryArgs)(s.d.products,{catalog_visibility:"any",status:"publish",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return p({},e,{parent:0})}))})).catch((function(e){throw e}))},d=function(e){return u()({path:"".concat(s.d.products,"/").concat(e)})},f=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("".concat(s.d.products,"/tags"),{per_page:s.h?100:-1,orderby:s.h?"count":"name",order:s.h?"desc":"asc",search:n})];return s.h&&r.length&&o.push(Object(c.addQueryArgs)("".concat(s.d.products,"/tags"),{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},g=function(e){return u()({path:"".concat(s.d.categories,"/").concat(e)})},h=function(e){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/categories"),p({per_page:-1},e))})},m=function(e){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/").concat(e,"/variations"),{per_page:-1})})},O=function(){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/attributes"),{per_page:-1})})},w=function(e){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/attributes/").concat(e,"/terms"),{per_page:-1})})}},27:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},28:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(27));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},3:function(e,t){!function(){e.exports=this.wp.components}()},35:function(e,t){!function(){e.exports=this.wp.keycodes}()},4:function(e,t,r){"use strict";r.d(t,"n",(function(){return g})),r.d(t,"o",(function(){return h})),r.d(t,"i",(function(){return m})),r.d(t,"k",(function(){return O})),r.d(t,"a",(function(){return w})),r.d(t,"j",(function(){return y})),r.d(t,"m",(function(){return j})),r.d(t,"c",(function(){return v})),r.d(t,"l",(function(){return _})),r.d(t,"b",(function(){return k})),r.d(t,"g",(function(){return P})),r.d(t,"h",(function(){return E})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return S})),r.d(t,"p",(function(){return x})),r.d(t,"d",(function(){return R}));var n=r(6),o=r.n(n),c=r(7),i=r.n(c),u=r(37);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},p=s({},l,{},"object"===("undefined"==typeof wcSettings?"undefined":r.n(u)()(wcSettings))?wcSettings:{});function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=p.hasOwnProperty(e)?p[e]:t;return r(n,t)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}p.currency=s({},l.currency,{},p.currency),p.locale=s({},l.locale,{},p.locale);var f=b("storeApiNonce");i.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var r=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{"X-WC-Store-API-Nonce":f})}return t(e,t)})),i.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(f=t)};b("currentUserIsAdmin",!1);var g=b("reviewRatingsEnabled",!0),h=b("showAvatars",!0),m=b("max_columns",6),O=b("min_columns",1),w=b("default_columns",3),y=b("max_rows",6),j=b("min_rows",1),v=b("default_rows",3),_=b("min_height",500),k=b("default_height",500),P=(b("placeholderImgSrc",""),b("thumbnail_size",300),b("isLargeCatalog")),E=b("limitTags"),C=(b("hasProducts",!0),b("hasTags",!0)),S=b("homeUrl",""),x=(b("couponsEnabled",!0),b("shippingEnabled",!0),b("displayShopPricesIncludingTax",!1),b("displayCartPricesIncludingTax",!1),b("productCount",0),b("attributes",[]),b("isShippingCalculatorEnabled",!0),b("isShippingCostHidden",!1),b("wcBlocksAssetUrl","")),D=(b("shippingCountries",{}),b("allowedCountries",{}),b("shippingStates",{}),b("allowedStates",{}),b("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),A=b("storePages",{shop:D,cart:D,checkout:D,privacy:D,terms:D}),R=(A.shop.permalink,A.checkout.id,A.checkout.permalink,A.privacy.permalink,A.privacy.title,A.terms.permalink,A.terms.title,A.cart.id,A.cart.permalink,{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")})},42:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(4),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:n.a},rows:{type:"number",default:n.c},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},43:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(3));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(s({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return t(s({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(s({},r,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(s({},r,{button:!n}))}}))}},45:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(0),i=r(1),u=r(5),a=(r(2),r(29)),s=r(3),l=r(12),p=r.n(l),b=r(22),d=r.n(b),f=r(16),g=r.n(f),h=r(17),m=r.n(h),O=r(14),w=r.n(O),y=r(18),j=r.n(y),v=r(19),_=r.n(v),k=r(10),P=r.n(k),E=r(21),C=r(26),S=r(25);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var D=Object(E.createHigherOrderComponent)((function(e){return function(t){j()(i,t);var r,n=(r=i,function(){var e,t=P()(r);if(x()){var n=P()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _()(this,e)});function i(){var e;return g()(this,i),(e=n.apply(this,arguments)).state={error:null,loading:!1,categories:null},e.loadCategories=e.loadCategories.bind(w()(e)),e}return m()(i,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(C.b)({show_review_count:this.props.showReviewCount||!1}).then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=d()(p.a.mark((function t(r){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(r);case 2:n=t.sent,e.setState({categories:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(c.createElement)(e,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),i}(c.Component)}),"withCategories"),A=r(28),R=(r(100),function(e){var t=e.categories,r=e.error,n=e.isLoading,l=e.onChange,p=e.onOperatorChange,b=e.operator,d=e.selected,f=e.isSingle,g=e.showReviewCount,h={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(A.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return Object(u.find)(t,{id:e})})).filter(Boolean),onChange:l,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==t.parent&&s.push("is-skip-level");var l=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,p=g?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",t.review_count,"woo-gutenberg-products-block"),l,t.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),l,t.count),b=g?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",t.count,"woo-gutenberg-products-block"),t.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},e,{showCount:!0,countLabel:b,"aria-label":p}))},messages:h,isHierarchical:!0,isSingle:f}),!!p&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:b,onChange:p,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});R.defaultProps={operator:"any",isSingle:!1};t.a=D(R)},48:function(e,t){!function(){e.exports=this.ReactDOM}()},49:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(5),i=(r(2),r(3)),u=r(4);t.a=function(e){var t=e.columns,r=e.rows,a=e.setAttributes,s=e.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,u.k,u.i);a({columns:Object(c.isNaN)(t)?"":t})},min:u.k,max:u.i}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(c.clamp)(e,u.m,u.j);a({rows:Object(c.isNaN)(t)?"":t})},min:u.m,max:u.j}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(0),o=r(8),c=r.n(o),i=r(66),u=r.n(i),a=r(4);function s(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,p=r.products,b=r.columns||a.a,d=r.rows||a.c,f=new Map;switch(f.set("limit",d*b),f.set("columns",b),c&&c.length&&(f.set("category",c.join(",")),i&&"all"===i&&f.set("cat_operator","AND")),n&&n.length&&(f.set("terms",n.map((function(e){return e.id})).join(",")),f.set("attribute",n[0].attr_slug),o&&"all"===o&&f.set("terms_operator","AND")),l&&("price_desc"===l?(f.set("orderby","price"),f.set("order","DESC")):"price_asc"===l?(f.set("orderby","price"),f.set("order","ASC")):"date"===l?(f.set("orderby","date"),f.set("order","DESC")):f.set("orderby",l)),t){case"woocommerce/product-best-sellers":f.set("best_selling","1");break;case"woocommerce/product-top-rated":f.set("orderby","rating");break;case"woocommerce/product-on-sale":f.set("on_sale","1");break;case"woocommerce/product-new":f.set("orderby","date"),f.set("order","DESC");break;case"woocommerce/handpicked-products":if(!p.length)return"";f.set("ids",p.join(",")),f.set("limit",p.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g,h="[products",m=s(f);try{for(m.s();!(g=m.n()).done;){var O=u()(g.value,2);h+=" "+O[0]+'="'+O[1]+'"'}}catch(e){m.e(e)}finally{m.f()}return h+="]"}(t,e))}}},51:function(e,t){!function(){e.exports=this.wp.viewport}()},56:function(e,t){!function(){e.exports=this.wp.hooks}()},588:function(e,t,r){"use strict";r.r(t);var n=r(6),o=r.n(n),c=r(0),i=r(1),u=r(23),a=r(5),s=r(62),l=r(602),p=Object(c.createElement)(l.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-4.51 2.11l.26 2.79-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z"})),b=r(16),d=r.n(b),f=r(17),g=r.n(f),h=r(18),m=r.n(h),O=r(19),w=r.n(O),y=r(10),j=r.n(y),v=r(3),_=r(20),k=(r(2),r(43)),P=r(49),E=r(45),C=r(99);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=j()(t);if(S()){var n=j()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return w()(this,e)});function n(){return d()(this,n),r.apply(this,arguments)}return g()(n,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,o=t.catOperator,u=t.columns,a=t.contentVisibility,s=t.rows,l=t.alignButtons;return Object(c.createElement)(_.InspectorControls,{key:"inspector"},Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(P.a,{columns:u,rows:s,alignButtons:l,setAttributes:r})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(k.a,{settings:a,onChange:function(e){return r({contentVisibility:e})}})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(E.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:o,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?C.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(v.Disabled,null,Object(c.createElement)(_.ServerSideRender,{block:r,attributes:t})))}}]),n}(c.Component),D=r(50),A=r(42);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object(u.registerBlockType)("woocommerce/product-new",{title:Object(i.__)("Newest Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:p}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of your newest products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},A.a),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(a.without)(A.b,"woocommerce/product-new"),transform:function(e){return Object(u.createBlock)("woocommerce/product-new",e)}}]},deprecated:[{attributes:A.a,save:Object(D.a)("woocommerce/product-new")}],edit:function(e){return Object(c.createElement)(x,e)},save:function(){return null}})},60:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},61:function(e,t){!function(){e.exports=this.wp.date}()},62:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=r(36),i=r.n(c),u=r(11);r(2);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(u.isValidElement)(t)&&Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()},70:function(e,t){!function(){e.exports=this.wp.dom}()},74:function(e,t){},75:function(e,t){},76:function(e,t){},78:function(e,t){},79:function(e,t){},9:function(e,t){!function(){e.exports=this.wp.url}()},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(4),c=Object(n.createElement)("img",{src:o.p+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});