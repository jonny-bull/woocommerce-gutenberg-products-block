(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[9],{487:function(t,o,c){"use strict";c.r(o);var e=c(9),n=c.n(e),a=c(5),d=c.n(a),r=c(0),u=(c(2),c(6)),b=c.n(u),i=c(1),l=c(66),s=c(772),p=c(26),_=c(43),k=c(84),w=(c(544),function(t){var o=t.product,c=o.id,e=o.permalink,a=o.add_to_cart,d=o.has_options,u=o.is_purchasable,_=o.is_in_stock,k=Object(l.a)().dispatchStoreEvent,w=Object(s.a)(c),m=w.cartQuantity,j=w.addingToCart,O=w.addToCart,f=Number.isFinite(m)&&m>0,v=!d&&u&&_,C=Object(p.decodeEntities)((null==a?void 0:a.description)||""),E=f?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",m,"woo-gutenberg-products-block"),m):Object(p.decodeEntities)((null==a?void 0:a.text)||Object(i.__)("Add to cart","woo-gutenberg-products-block")),h=v?"button":"a",g={};return v?g.onClick=function(){O(),k("cart-add-item",{product:o})}:(g.href=e,g.rel="nofollow",g.onClick=function(){k("product-view-link",{product:o})}),Object(r.createElement)(h,n()({"aria-label":C,className:b()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button",{loading:j,added:f}),disabled:j},g),E)}),m=function(){return Object(r.createElement)("button",{className:b()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder"),disabled:!0})};o.default=Object(k.withProductDataContext)((function(t){var o=t.className,c=Object(_.useInnerBlockLayoutContext)().parentClassName,e=Object(_.useProductDataContext)().product;return Object(r.createElement)("div",{className:b()(o,"wp-block-button","wc-block-components-product-button",d()({},"".concat(c,"__product-add-to-cart"),c))},e.id?Object(r.createElement)(w,{product:e}):Object(r.createElement)(m,null))}))},544:function(t,o){}}]);