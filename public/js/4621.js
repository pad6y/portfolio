(self.webpackChunk=self.webpackChunk||[]).push([[4621],{3245:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(5166);const r={props:{type:{type:String,default:"button"},href:{}},methods:{visit:function(e){this.href&&(e.preventDefault(),this.$inertia.visit(this.href))}},render:function(e,t,n,r,s,i){return(0,o.openBlock)(),(0,o.createBlock)("button",{type:n.type,class:"inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150",onClick:t[1]||(t[1]=function(){return i.visit&&i.visit.apply(i,arguments)})},[(0,o.renderSlot)(e.$slots,"default")],8,["type"])}},s=r},4621:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var o=n(5166),r={class:"flex flex-col w-5/6 md:w-2/3 mx-auto md:grid md:grid-cols-3 mb-12"},s={class:"\n          flex flex-col\n          w-5/6\n          bg-gradient-to-t\n          from-white\n          to-gray-500\n          rounded-md\n          shadow-md\n          my-4\n          overflow-hidden\n          transition\n          duration-500\n          ease-in-out\n          transform\n          hover:scale-110\n          hover:bg-white\n        "},i={class:"\n            flex\n            justify-center\n            mx-auto\n            w-full\n            min-h-80\n            uppercase\n            text-lg\n            font-semibold\n            py-4\n          "},l={class:"mx-auto w-5/6 text-xs"},c={class:"pb-2"},a=(0,o.createVNode)("span",{class:"font-semibold"},"Project type: ",-1),d={class:"pb-4 h-auto"},u=(0,o.createVNode)("span",{class:"font-semibold"},"Description: ",-1),p={class:"flex justify-center p-2"},f=(0,o.createTextVNode)("More Info"),b={key:1,class:"\n                flex\n                justify-center\n                items-end\n                w-full\n                font-semibold\n                text-red-800\n                mb-6\n                px-2\n                py-2\n              "};const m={props:["projects"],components:{blueButton:n(3245).Z},methods:{getReduceBody:function(e){if(null!=e)return e.substring(0,70)+"..."}},render:function(e,t,n,m,y,h){var k=(0,o.resolveComponent)("blue-button");return(0,o.openBlock)(),(0,o.createBlock)("div",r,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(n.projects,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("div",{key:t,class:"grid col-span-1 justify-items-center"},[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",i,(0,o.toDisplayString)(e.project_name),1),(0,o.createVNode)("div",l,[(0,o.createVNode)("div",c,[a,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.project_type),1)]),(0,o.createVNode)("div",d,[u,(0,o.createTextVNode)((0,o.toDisplayString)(h.getReduceBody(e.description)),1)]),e.git_link?((0,o.openBlock)(),(0,o.createBlock)("a",{key:0,href:e.git_link,class:"flex justify-center uppercase font-bold hover:text-blue-700"},"Git repo",8,["href"])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("div",p,[e.url_link?((0,o.openBlock)(),(0,o.createBlock)(k,{key:0,href:e.url_link},{default:(0,o.withCtx)((function(){return[f]})),_:2},1032,["href"])):((0,o.openBlock)(),(0,o.createBlock)("div",b," Currently not deployed! "))])])])])})),128))])}},y=m}}]);
//# sourceMappingURL=4621.js.map