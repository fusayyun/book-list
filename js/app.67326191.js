(function(e){function t(t){for(var r,i,u=t[0],s=t[1],a=t[2],b=0,f=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/books/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21ee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(n)}n("f80d");const c={};c.render=o;var i=c,u=n("6c02"),s={class:"section"},a={class:"section"};function l(e,t,n,o,c,i){var u=Object(r["x"])("BookList"),l=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",s,[c.books.length?(Object(r["s"])(),Object(r["d"])(u,{key:0,books:c.books},null,8,["books"])):Object(r["e"])("",!0)]),Object(r["f"])("div",a,[Object(r["f"])(l)])],64)}var b=n("1da1"),f=(n("96cf"),n("d3b7"),Object(r["f"])("span",{class:"mask",style:{"user-select":"auto"}},null,-1));function p(e,t,n,o,c,i){var u=Object(r["x"])("BookListCard"),s=Object(r["x"])("swiper-slide"),a=Object(r["x"])("swiper");return Object(r["s"])(),Object(r["d"])(a,{class:"section swiperH",breakpoints:{760:{direction:"horizontal",slidesPerView:"3",spaceBetween:30}},runCallbacksOnInit:!1,mousewheel:!0,direction:"vertical",centeredSlides:!0,initialSlide:c.initialSlideNum,"slides-per-view":1,slideToClickedSlide:!0,navigation:"",pagination:{clickable:!0},onSlideChange:i.onSlideChange},{default:Object(r["D"])((function(){return[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(n.books,(function(e,t){return Object(r["s"])(),Object(r["d"])(s,{class:"swiperH",key:t,"data-history":e.profile},{default:Object(r["D"])((function(){return[Object(r["f"])(u,e,null,16),f]})),_:2},1032,["data-history"])})),128))]})),_:1},8,["initialSlide","onSlideChange"])}n("b0c0");var d={class:"card-image"},h={class:"card-content"},j={class:"card-title"};function O(e,t,n,o,c,i){return Object(r["s"])(),Object(r["d"])("div",null,[Object(r["f"])("div",d,[Object(r["f"])("img",{src:n.image,width:"200",height:"260"},null,8,["src"])]),Object(r["f"])("div",h,[Object(r["f"])("span",j,Object(r["z"])(n.name),1)])])}var k={data:function(){return{}},props:["profile","image","name"]};k.render=O;var m=k,v=n("6d3b"),w=n("8343"),g=n("5dc8"),y=n("b42f"),x=n("90ea"),S=n("a16a");n("e25d");v["a"].use([w["a"],g["a"],y["a"]]);var B={data:function(){return{initialSlideNum:3}},components:{BookListCard:m,Swiper:x["a"],SwiperSlide:S["a"]},props:["books"],computed:{bookId:function(){return this.$route.params.bookId}},methods:{onSlideChange:function(e){var t=e.$wrapperEl.children(".swiper-slide").eq(e.activeIndex).attr("data-history");this.$router.push("/"+t)}},created:function(){console.log("載入"),this.bookId&&(this.initialSlideNum=this.bookId-1)}};n("f096");B.render=p;var C=B,R={components:{BookList:C},data:function(){return{books:[]}},methods:{fetchBooks:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookslist-api.herokuapp.com/books/").then((function(e){return e.json()})).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchBooks();case 2:e.books=t.sent,console.log("this.books",e.books);case 4:case"end":return t.stop()}}),t)})))()}};R.render=l;var I=R,P={class:"section"},_={class:"row"},D=Object(r["f"])("div",{class:"col l2 s12"},[Object(r["f"])("h4",null,"價格")],-1),T={class:"col l2 s2 input-field"},z={class:"col l4 s8 input-field"},L={class:"col l2 s2 input-field"},M={class:"row"},N=Object(r["f"])("div",{class:"col l2 s12"},[Object(r["f"])("h4",null,"數量")],-1),$={class:"col l2 s2 input-field"},E={class:"col l4 s8 input-field"},H={class:"col l2 s2 input-field"},J=Object(r["f"])("button",{type:"submit",class:"btn-large wave"},"save",-1);function V(e,t,n,o,c,i){return Object(r["s"])(),Object(r["d"])("form",{onSubmit:t[7]||(t[7]=Object(r["F"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[Object(r["f"])("div",P,[Object(r["f"])("div",_,[D,Object(r["f"])("div",T,[Object(r["f"])("button",{class:"btn",onClick:t[1]||(t[1]=function(e){return c.book.price>1?c.book.price--:""})},"-")]),Object(r["f"])("div",z,[Object(r["E"])(Object(r["f"])("input",{class:"center input-text",type:"number",name:"price","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.book.price=e}),min:"1"},null,512),[[r["B"],c.book.price,void 0,{number:!0}]])]),Object(r["f"])("div",L,[Object(r["f"])("button",{type:"button",class:"btn",onClick:t[3]||(t[3]=function(e){return c.book.price++})},"+")])]),Object(r["f"])("div",M,[N,Object(r["f"])("div",$,[Object(r["f"])("button",{type:"button",class:"btn",onClick:t[4]||(t[4]=function(e){return c.book.count>1?c.book.count--:""})},"-")]),Object(r["f"])("div",E,[Object(r["E"])(Object(r["f"])("input",{type:"number",name:"count",class:"center input-text","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.book.count=e}),min:"1"},null,512),[[r["B"],c.book.count,void 0,{number:!0}]])]),Object(r["f"])("div",H,[Object(r["f"])("button",{type:"button",class:"btn",onClick:t[6]||(t[6]=function(e){return c.book.count++})},"+")])])]),J],32)}var U={data:function(){return{book:{id:"1",price:1,count:1}}},computed:{bookId:function(){return console.log("zz"),this.$route.params.bookId}},watch:{bookId:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchBookDetail(t);case 2:this.book=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},methods:{fetchBookDetail:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bookslist-api.herokuapp.com/profile/"+e).then((function(e){return e.json()})).then((function(e){return e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},postBookDetail:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://bookslist-api.herokuapp.com/profile/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},onSubmit:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.book),t.next=3,e.postBookDetail(e.bookId,e.book).then((function(t){console.log(t),e.book=t})).catch((function(e){console.error(e)}));case 3:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchBookDetail(e.bookId).catch((function(e){console.error(e)}));case 2:e.book=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};n("d609");U.render=V;var q=U,A=[{path:"/",name:"Books",component:I,children:[{path:":bookId",component:q}]}],F=Object(u["a"])({history:Object(u["b"])("/books/"),routes:A}),G=F;Object(r["c"])(i).use(G).mount("#app")},cabe:function(e,t,n){},d609:function(e,t,n){"use strict";n("cabe")},e46c:function(e,t,n){},f096:function(e,t,n){"use strict";n("e46c")},f80d:function(e,t,n){"use strict";n("21ee")}});
//# sourceMappingURL=app.67326191.js.map