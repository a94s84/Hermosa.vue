(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07d48961"],{"0b42":function(e,t,r){var c=r("da84"),n=r("e8b5"),o=r("68ee"),a=r("861d"),l=r("b622"),i=l("species"),s=c.Array;e.exports=function(e){var t;return n(e)&&(t=e.constructor,o(t)&&(t===s||n(t.prototype))?t=void 0:a(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?s:t}},"0dae":function(e,t,r){e.exports=r.p+"img/footer_email.658ca918.svg"},"1b20":function(e,t,r){e.exports=r.p+"img/footer_ig.7602eacc.svg"},"1dde":function(e,t,r){var c=r("d039"),n=r("b622"),o=r("2d00"),a=n("species");e.exports=function(e){return o>=51||!c((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f9c":function(e,t,r){e.exports=r.p+"img/footer_fb.6b088633.svg"},6161:function(e,t,r){"use strict";r.r(t);r("b0c0");var c=r("7a23"),n={class:"contentWrap"},o={class:"wrap cartWrap d-center"},a=Object(c["createElementVNode"])("ul",{class:"cart-menu"},[Object(c["createElementVNode"])("li",null,"購物清單"),Object(c["createElementVNode"])("li",null,"填寫資料"),Object(c["createElementVNode"])("li",null,"確認訂單"),Object(c["createElementVNode"])("li",{class:"active"},"完成購物")],-1),l={class:"orderfinishWrap"},i=Object(c["createElementVNode"])("h2",null,"完成購物",-1),s=Object(c["createElementVNode"])("h3",null," 感謝您的購買！我們正在處理您的訂單，如有任何問題，請聯絡客服信箱，謝謝。 ",-1),d={class:"orderList",ref:"orderdetail"},u={class:"orderdetail-box"},b=Object(c["createElementVNode"])("span",null,"訂單編號",-1),p=Object(c["createElementVNode"])("span",null,"訂單日期",-1),f=Object(c["createElementVNode"])("span",null,"姓名",-1),m=Object(c["createElementVNode"])("span",null,"信箱",-1),O=Object(c["createElementVNode"])("span",null,"電話",-1),v=Object(c["createElementVNode"])("span",null,"地址",-1),j=Object(c["createElementVNode"])("span",null,"備註",-1),E={class:"orderlist-box"},N=Object(c["createElementVNode"])("span",null,"購買商品",-1),g={class:"shopItem-img"},V=["src","alt"],h={class:"shopItem-name"},y={class:"shopItem_qty"},x=Object(c["createElementVNode"])("p",null,"數量",-1),S={class:"shopItem_total"},w=Object(c["createElementVNode"])("p",null,"小計",-1),k={class:"text-end fw-bold px-lg-5 py-3"},I={class:"pddcnt-btn-buypay"},B=Object(c["createTextVNode"])("繼續購物 ");function D(e,t,r,D,_,L){var A=Object(c["resolveComponent"])("router-link"),T=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",o,[a,Object(c["createElementVNode"])("div",l,[i,s,Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",null,[b,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(_.order.id),1)]),Object(c["createElementVNode"])("div",null,[p,Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$filters.date(_.order.create_at)),1)]),Object(c["createElementVNode"])("div",null,[f,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(_.order.user.name),1)]),Object(c["createElementVNode"])("div",null,[m,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(_.order.user.email),1)]),Object(c["createElementVNode"])("div",null,[O,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(_.order.user.tel),1)]),Object(c["createElementVNode"])("div",null,[v,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(_.order.user.address),1)]),Object(c["createElementVNode"])("div",null,[j,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(_.order.message),1)])]),Object(c["createElementVNode"])("div",E,[N,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(_.order.products,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"shopItem",key:t.id},[Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("img",{src:"".concat(t.product.imageUrl),alt:t.product.title},null,8,V)]),Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(t.product.title),1)]),Object(c["createElementVNode"])("div",y,[x,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(t.qty),1)]),Object(c["createElementVNode"])("div",S,[w,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(e.$filters.currency(t.final_total)),1)])])})),128)),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("p",k," 總計： NT$ "+Object(c["toDisplayString"])(e.$filters.currency(_.order.total)),1)])])],512),Object(c["createElementVNode"])("div",I,[Object(c["createVNode"])(A,{to:{name:"productlist",query:{category:"ALL"}},class:"btn-second btn-add"},{default:Object(c["withCtx"])((function(){return[B]})),_:1}),Object(c["createElementVNode"])("a",{href:"#",class:"btn-black btn-topay",onClick:t[0]||(t[0]=Object(c["withModifiers"])((function(){return L.seeOrder&&L.seeOrder.apply(L,arguments)}),["prevent"]))},"查看訂單")])])])]),Object(c["createVNode"])(T)],64)}r("99af");var _=r("fd2d"),L=r("cfb9"),A={data:function(){return{orderId:"",order:{user:{},products:[]},isLoading:!1}},components:{Footer:_["a"]},inject:["emitter"],methods:{getOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hermosa","/order/").concat(this.orderId);this.$http.get(t).then((function(t){t.data.success?(e.isLoading=!1,e.order=t.data.order,L["a"].emit("updateCart")):(e.isLoading=!1,e.pushMessage(!1,"讀取","發生錯誤，請重新整理頁面"))}))},seeOrder:function(){this.$refs.orderdetail.classList.add("active")}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},T=r("6b0d"),C=r.n(T);const F=C()(A,[["render",D]]);t["default"]=F},"65f0":function(e,t,r){var c=r("0b42");e.exports=function(e,t){return new(c(e))(0===t?0:t)}},8418:function(e,t,r){"use strict";var c=r("a04b"),n=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var a=c(t);a in e?n.f(e,a,o(0,r)):e[a]=r}},"99af":function(e,t,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d039"),a=r("e8b5"),l=r("861d"),i=r("7b0b"),s=r("07fa"),d=r("8418"),u=r("65f0"),b=r("1dde"),p=r("b622"),f=r("2d00"),m=p("isConcatSpreadable"),O=9007199254740991,v="Maximum allowed index exceeded",j=n.TypeError,E=f>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),N=b("concat"),g=function(e){if(!l(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)},V=!E||!N;c({target:"Array",proto:!0,forced:V},{concat:function(e){var t,r,c,n,o,a=i(this),l=u(a,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?a:arguments[t],g(o)){if(n=s(o),b+n>O)throw j(v);for(r=0;r<n;r++,b++)r in o&&d(l,b,o[r])}else{if(b>=O)throw j(v);d(l,b++,o)}return l.length=b,l}})},b0c0:function(e,t,r){var c=r("83ab"),n=r("5e77").EXISTS,o=r("e330"),a=r("9bf2").f,l=Function.prototype,i=o(l.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(s.exec),u="name";c&&!n&&a(l,u,{configurable:!0,get:function(){try{return d(s,i(this))[1]}catch(e){return""}}})},ca25:function(e,t,r){e.exports=r.p+"img/footer_line.c55f3453.svg"},cfb9:function(e,t,r){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,r){var c=e.get(t);c?c.push(r):e.set(t,[r])},off:function(t,r){var c=e.get(t);c&&(r?c.splice(c.indexOf(r)>>>0,1):e.set(t,[]))},emit:function(t,r){var c=e.get(t);c&&c.slice().map((function(e){e(r)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,r)}))}}},n=c();t["a"]=n},d464:function(e,t,r){e.exports=r.p+"img/arrow_next_dark.b893f78e.svg"},e8b5:function(e,t,r){var c=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}},fd2d:function(e,t,r){"use strict";var c=r("7a23"),n=r("1f9c"),o=r.n(n),a=r("1b20"),l=r.n(a),i=r("ca25"),s=r.n(i),d=r("0dae"),u=r.n(d),b=r("d464"),p=r.n(b),f=Object(c["createStaticVNode"])('<div class="footerWrap"><div class="footer-list"><div class="footer-social"><a href="#" class="footer-fb"><img src="'+o.a+'" alt="FB"></a><a href="#" class="footer-ig"><img src="'+l.a+'" alt="IG"></a><a href="#" class="footer-line"><img src="'+s.a+'" alt="line"></a><a href="#" class="footer-email"><img src="'+u.a+'" alt="email"></a></div><div class="more-info"><ul class="js-menu"><li><a href="#">MEMBERSHIP </a></li><li><a href="#">ABOUT Hermosa </a></li><li><a href="#">INFORMATION</a></li></ul></div></div><div class="footer-mail"><div class="footer-letter"><label for="">NEWSLETTER </label><input type="text" placeholder="E-mail"><a href="javascript:void(0)"><img src="'+p.a+'" alt="" width="6px"></a></div><div><p class="footer-service">SERVICE</p><p class="footer-content">客服信箱 <a href="mailto:service@hermosa.com">service@hermosa.com</a></p><p class="footer-content">客服電話 02-1234-5678 | 週一至週五 10:00-12:30 13:30-17:00</p></div></div><div class="footer-bottom"><p class="footer-copy">© Hermosa All Rights Reserved.</p><p>本網頁僅供學習使用 無任何商業用途</p></div></div>',1),m=[f];function O(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("footer",null,m)}var v=r("6b0d"),j=r.n(v);const E={},N=j()(E,[["render",O]]);t["a"]=N}}]);
//# sourceMappingURL=chunk-07d48961.31d5bf8a.js.map