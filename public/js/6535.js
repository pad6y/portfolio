(self.webpackChunk=self.webpackChunk||[]).push([[6535,6115],{6835:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(5166);const o={inheritAttrs:!1,emits:["loadMore"],mounted:function(){var e=this;window.addEventListener("scroll",_.debounce((function(t){document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<200&&e.$emit("loadMore")}),100))},render:function(e,t,r,o,a,l){return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.renderSlot)(e.$slots,"default")])}},a=o},6535:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(5166),o={class:"container mx-auto max-w-6xl md:py-6 md:px-6 pb-20 font-serif"},a={class:"grid grid-cols-1 items-center p-4 md:p-8 pb-12"},l=(0,n.createVNode)("h2",{class:"font-serif text-gold border-b-2 pb-4"}," Current registered users and their posts: ",-1);var s=r(6115),c=r(6835);function i(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m={inheritAttrs:!1,components:{UsersDetails:s.default,InfiniteScroll:c.Z},props:["users"],data:function(){return{allUsers:this.users}},methods:{loadMoreUsers:function(){var e=this;if(this.allUsers.next_page_url)return axios.get(this.allUsers.next_page_url).then((function(t){e.allUsers=f(f({},t.data),{},{data:[].concat(i(e.allUsers.data),i(t.data.data))})}))}},render:function(e,t,r,s,c,i){var d=(0,n.resolveComponent)("users-details"),u=(0,n.resolveComponent)("infinite-scroll");return(0,n.openBlock)(),(0,n.createBlock)("div",o,[(0,n.createVNode)("div",a,[l,(0,n.createVNode)(u,{onLoadMore:i.loadMoreUsers},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(c.allUsers.data,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("div",{key:t},[(0,n.createVNode)(d,{user:e},null,8,["user"])])})),128))]})),_:1},8,["onLoadMore"])])])}},b=m},6115:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(5166),o={class:"grid grid-cols-2 border-b pt-4 pb-4 text-gray-700 text-xs md:text-sm"},a={class:"text-black font-bold"},l=(0,n.createTextVNode)(" Name : "),s={class:"ml-2 font-normal"},c=(0,n.createVNode)("br",null,null,-1),i=(0,n.createTextVNode)(" Email: "),d={class:"md:ml-2 text-gray-600 font-normal"},u=(0,n.createVNode)("br",null,null,-1),f=(0,n.createTextVNode)(" Role: "),p={class:"ml-2 text-gray-600 font-normal"},m=(0,n.createVNode)("br",null,null,-1),b={class:"text-black font-bold"},g=(0,n.createTextVNode)(" Posts : "),y={class:"grid grid-cols-9"},v={class:"col-span-1 text-gray-600 font-normal ml-2 lg:ml-12"},h={class:"col-span-8"};const x={props:["user"],render:function(e,t,r,x,k,N){var w=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createBlock)("div",o,[(0,n.createVNode)("div",a,[l,(0,n.createVNode)("span",s,(0,n.toDisplayString)(r.user.name),1),c,i,(0,n.createVNode)("span",d,(0,n.toDisplayString)(r.user.email),1),u,f,(0,n.createVNode)("span",p,(0,n.toDisplayString)(r.user.roles[0].name),1),m]),(0,n.createVNode)("div",b,[g,((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(r.user.posts,(function(t,r){return(0,n.openBlock)(),(0,n.createBlock)("div",{key:r},[(0,n.createVNode)("div",y,[(0,n.createVNode)("div",v,(0,n.toDisplayString)(r+1),1),(0,n.createVNode)("div",h,[(0,n.createVNode)(w,{href:e.route("newsfeed.show",t.id),class:"text-indigo-700 hover:text-green-700 underline ml-4"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.title),1)]})),_:2},1032,["href"])])])])})),128))])])}},k=x}}]);
//# sourceMappingURL=6535.js.map