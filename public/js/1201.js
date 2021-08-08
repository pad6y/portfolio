(self.webpackChunk=self.webpackChunk||[]).push([[1201,2693],{7546:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(5166),r={class:"text-sm text-gray-600"};const s={props:["on"],render:function(e,t,o,s,i,a){return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)(n.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)("div",r,[(0,n.renderSlot)(e.$slots,"default")],512),[[n.vShow,o.on]])]})),_:3})])}},i=s},3307:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(5166),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},i={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"};const a={components:{JetSectionTitle:o(5090).Z},render:function(e,t,o,a,l,c){var d=(0,n.resolveComponent)("jet-section-title");return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)(d,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:1}),(0,n.createVNode)("div",s,[(0,n.createVNode)("div",i,[(0,n.renderSlot)(e.$slots,"content")])])])}},l=a},1684:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5166);const r={props:{type:{type:String,default:"submit"}},render:function(e,t,o,r,s,i){return(0,n.openBlock)(),(0,n.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-gold-lite rounded-md font-semibold text-xs text-black uppercase tracking-widest hover:bg-gold-md active:bg-gold-dark focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,n.renderSlot)(e.$slots,"default")],8,["type"])}},s=r},4602:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5166);const r={emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(e){this.$emit("update:checked",e)}}},render:function(e,t,o,r,s,i){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.proxyChecked=e}),class:"rounded border-gray-300 text-gold shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"},null,8,["value"])),[[n.vModelCheckbox,i.proxyChecked]])}},s=r},4:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5166);const r={props:{type:{type:String,default:"button"},href:{}},methods:{visit:function(e){this.href&&(e.preventDefault(),this.$inertia.visit(this.href))}},render:function(e,t,o,r,s,i){return(0,n.openBlock)(),(0,n.createBlock)("button",{type:o.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150",onClick:t[1]||(t[1]=function(){return i.visit&&i.visit.apply(i,arguments)})},[(0,n.renderSlot)(e.$slots,"default")],8,["type"])}},s=r},8415:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(5166),r={class:"px-6 py-4"},s={class:"text-lg"},i={class:"mt-4"},a={class:"px-6 py-4 bg-gray-100 text-right"};const l={emits:["close"],components:{Modal:o(7397).Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}},render:function(e,t,o,l,c,d){var u=(0,n.resolveComponent)("modal");return(0,n.openBlock)(),(0,n.createBlock)(u,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:d.close},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",r,[(0,n.createVNode)("div",s,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createVNode)("div",i,[(0,n.renderSlot)(e.$slots,"content")])]),(0,n.createVNode)("div",a,[(0,n.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","max-width","closeable","onClose"])}},c=l},9248:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(5166),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},i={class:"grid grid-cols-6 gap-6"},a={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};const l={emits:["submitted"],components:{JetSectionTitle:o(5090).Z},computed:{hasActions:function(){return!!this.$slots.actions}},render:function(e,t,o,l,c,d){var u=(0,n.resolveComponent)("jet-section-title");return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)(u,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:1}),(0,n.createVNode)("div",s,[(0,n.createVNode)("form",{onSubmit:t[1]||(t[1]=(0,n.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,n.createVNode)("div",{class:["px-4 py-5 bg-white sm:p-6 shadow",d.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"]},[(0,n.createVNode)("div",i,[(0,n.renderSlot)(e.$slots,"form")])],2),d.hasActions?((0,n.openBlock)(),(0,n.createBlock)("div",a,[(0,n.renderSlot)(e.$slots,"actions")])):(0,n.createCommentVNode)("",!0)],32)])])}},c=l},7420:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5166);const r={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}},render:function(e,t,o,r,s,i){return(0,n.openBlock)(),(0,n.createBlock)("input",{class:"border-yellow-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm",value:o.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,["value"])}},s=r},8985:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(5166),r={class:"text-sm text-red-600"};const s={props:["message"],render:function(e,t,o,s,i,a){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)("p",r,(0,n.toDisplayString)(o.message),1)],512)),[[n.vShow,o.message]])}},i=s},3845:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(5166),r={class:"block font-medium text-sm text-gray-700"},s={key:0},i={key:1};const a={props:["value"],render:function(e,t,o,a,l,c){return(0,n.openBlock)(),(0,n.createBlock)("label",r,[o.value?((0,n.openBlock)(),(0,n.createBlock)("span",s,(0,n.toDisplayString)(o.value),1)):((0,n.openBlock)(),(0,n.createBlock)("span",i,[(0,n.renderSlot)(e.$slots,"default")]))])}},l=a},7397:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(5166),r={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50"},s=(0,n.createVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1);const i={emits:["close"],props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},watch:{show:{immediate:!0,handler:function(e){document.body.style.overflow=e?"hidden":null}}},setup:function(e,t){var o=t.emit,r=function(){e.closeable&&o("close")},s=function(t){"Escape"===t.key&&e.show&&r()};return(0,n.onMounted)((function(){return document.addEventListener("keydown",s)})),(0,n.onUnmounted)((function(){return document.removeEventListener("keydown",s)})),{close:r}},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}},render:function(e,t,o,i,a,l){return(0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(n.Transition,{"leave-active-class":"duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)("div",r,[(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:t[1]||(t[1]=function(){return i.close&&i.close.apply(i,arguments)})},[s],512),[[n.vShow,o.show]])]})),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)("div",{class:["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",l.maxWidthClass]},[(0,n.renderSlot)(e.$slots,"default")],2),[[n.vShow,o.show]])]})),_:3})],512),[[n.vShow,o.show]])]})),_:1})])}},a=i},9056:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5166);const r={props:{type:{type:String,default:"button"}},render:function(e,t,o,r,s,i){return(0,n.openBlock)(),(0,n.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"},[(0,n.renderSlot)(e.$slots,"default")],8,["type"])}},s=r},8137:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(5166),r={class:"hidden sm:block"},s=(0,n.createVNode)("div",{class:"py-8"},[(0,n.createVNode)("div",{class:"border-t border-gray-200"})],-1);const i={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("div",r,[s])}},a=i},5090:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(5166),r={class:"md:col-span-1"},s={class:"px-4 sm:px-0"},i={class:"text-lg font-medium text-gray-900"},a={class:"mt-1 text-sm text-gray-600"};const l={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)("div",s,[(0,n.createVNode)("h3",i,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createVNode)("p",a,[(0,n.renderSlot)(e.$slots,"description")])])])}},c=l},2693:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>oe});var n=o(5166),r=(0,n.createTextVNode)(" Create API Token "),s=(0,n.createTextVNode)(" API tokens allow third-party services to authenticate with our application on your behalf. "),i={class:"col-span-6 sm:col-span-4"},a={key:0,class:"col-span-6"},l={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},c={class:"flex items-center"},d={class:"ml-2 text-sm text-gray-600"},u=(0,n.createTextVNode)(" Created. "),m=(0,n.createTextVNode)(" Create "),p={key:0},f={class:"mt-10 sm:mt-0"},k=(0,n.createTextVNode)(" Manage API Tokens "),h=(0,n.createTextVNode)(" You may delete any of your existing tokens if they are no longer needed. "),v={class:"space-y-6"},x={class:"flex items-center"},g={key:0,class:"text-sm text-gray-400"},y=(0,n.createTextVNode)(" API Token "),w=(0,n.createVNode)("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),b={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},V=(0,n.createTextVNode)(" Close "),C=(0,n.createTextVNode)(" API Token Permissions "),N={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},B={class:"flex items-center"},T={class:"ml-2 text-sm text-gray-600"},S=(0,n.createTextVNode)(" Cancel "),A=(0,n.createTextVNode)(" Save "),F=(0,n.createTextVNode)(" Delete API Token "),$=(0,n.createTextVNode)(" Are you sure you would like to delete this API token? "),P=(0,n.createTextVNode)(" Cancel "),Z=(0,n.createTextVNode)(" Delete ");var D=o(7546),_=o(3307),j=o(1684),J={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},I={class:"sm:flex sm:items-start"},M=(0,n.createVNode)("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[(0,n.createVNode)("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[(0,n.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),L={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},W={class:"text-lg"},U={class:"mt-2"},E={class:"px-6 py-4 bg-gray-100 text-right"};const z={emits:["close"],components:{Modal:o(7397).Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}},render:function(e,t,o,r,s,i){var a=(0,n.resolveComponent)("modal");return(0,n.openBlock)(),(0,n.createBlock)(a,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:i.close},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",J,[(0,n.createVNode)("div",I,[M,(0,n.createVNode)("div",L,[(0,n.createVNode)("h3",W,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createVNode)("div",U,[(0,n.renderSlot)(e.$slots,"content")])])])]),(0,n.createVNode)("div",E,[(0,n.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","max-width","closeable","onClose"])}},Y=z;var q=o(4),G=o(8415),H=o(9248),K=o(7420),O=o(4602),Q=o(8985),R=o(3845),X=o(9056),ee=o(8137);const te={components:{JetActionMessage:D.Z,JetActionSection:_.Z,JetButton:j.Z,JetConfirmationModal:Y,JetDangerButton:q.Z,JetDialogModal:G.Z,JetFormSection:H.Z,JetInput:K.Z,JetCheckbox:O.Z,JetInputError:Q.Z,JetLabel:R.Z,JetSecondaryButton:X.Z,JetSectionBorder:ee.Z},props:["tokens","availablePermissions","defaultPermissions"],data:function(){return{createApiTokenForm:this.$inertia.form({name:"",permissions:this.defaultPermissions}),updateApiTokenForm:this.$inertia.form({permissions:[]}),deleteApiTokenForm:this.$inertia.form(),displayingToken:!1,managingPermissionsFor:null,apiTokenBeingDeleted:null}},methods:{createApiToken:function(){var e=this;this.createApiTokenForm.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:function(){e.displayingToken=!0,e.createApiTokenForm.reset()}})},manageApiTokenPermissions:function(e){this.updateApiTokenForm.permissions=e.abilities,this.managingPermissionsFor=e},updateApiToken:function(){var e=this;this.updateApiTokenForm.put(route("api-tokens.update",this.managingPermissionsFor),{preserveScroll:!0,preserveState:!0,onSuccess:function(){return e.managingPermissionsFor=null}})},confirmApiTokenDeletion:function(e){this.apiTokenBeingDeleted=e},deleteApiToken:function(){var e=this;this.deleteApiTokenForm.delete(route("api-tokens.destroy",this.apiTokenBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:function(){return e.apiTokenBeingDeleted=null}})}},render:function(e,t,o,D,_,j){var J=(0,n.resolveComponent)("jet-label"),I=(0,n.resolveComponent)("jet-input"),M=(0,n.resolveComponent)("jet-input-error"),L=(0,n.resolveComponent)("jet-checkbox"),W=(0,n.resolveComponent)("jet-action-message"),U=(0,n.resolveComponent)("jet-button"),E=(0,n.resolveComponent)("jet-form-section"),z=(0,n.resolveComponent)("jet-section-border"),Y=(0,n.resolveComponent)("jet-action-section"),q=(0,n.resolveComponent)("jet-secondary-button"),G=(0,n.resolveComponent)("jet-dialog-modal"),H=(0,n.resolveComponent)("jet-danger-button"),K=(0,n.resolveComponent)("jet-confirmation-modal");return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)(E,{onSubmitted:j.createApiToken},{title:(0,n.withCtx)((function(){return[r]})),description:(0,n.withCtx)((function(){return[s]})),form:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",i,[(0,n.createVNode)(J,{for:"name",value:"Name"}),(0,n.createVNode)(I,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:_.createApiTokenForm.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return _.createApiTokenForm.name=e}),autofocus:""},null,8,["modelValue"]),(0,n.createVNode)(M,{message:_.createApiTokenForm.errors.name,class:"mt-2"},null,8,["message"])]),o.availablePermissions.length>0?((0,n.openBlock)(),(0,n.createBlock)("div",a,[(0,n.createVNode)(J,{for:"permissions",value:"Permissions"}),(0,n.createVNode)("div",l,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(o.availablePermissions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("div",{key:e},[(0,n.createVNode)("label",c,[(0,n.createVNode)(L,{value:e,checked:_.createApiTokenForm.permissions,"onUpdate:checked":t[2]||(t[2]=function(e){return _.createApiTokenForm.permissions=e})},null,8,["value","checked"]),(0,n.createVNode)("span",d,(0,n.toDisplayString)(e),1)])])})),128))])])):(0,n.createCommentVNode)("",!0)]})),actions:(0,n.withCtx)((function(){return[(0,n.createVNode)(W,{on:_.createApiTokenForm.recentlySuccessful,class:"mr-3"},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["on"]),(0,n.createVNode)(U,{class:{"opacity-25":_.createApiTokenForm.processing},disabled:_.createApiTokenForm.processing},{default:(0,n.withCtx)((function(){return[m]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"]),o.tokens.length>0?((0,n.openBlock)(),(0,n.createBlock)("div",p,[(0,n.createVNode)(z),(0,n.createVNode)("div",f,[(0,n.createVNode)(Y,null,{title:(0,n.withCtx)((function(){return[k]})),description:(0,n.withCtx)((function(){return[h]})),content:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",v,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(o.tokens,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("div",{class:"flex items-center justify-between",key:e.id},[(0,n.createVNode)("div",null,(0,n.toDisplayString)(e.name),1),(0,n.createVNode)("div",x,[e.last_used_ago?((0,n.openBlock)(),(0,n.createBlock)("div",g," Last used "+(0,n.toDisplayString)(e.last_used_ago),1)):(0,n.createCommentVNode)("",!0),o.availablePermissions.length>0?((0,n.openBlock)(),(0,n.createBlock)("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:function(t){return j.manageApiTokenPermissions(e)}}," Permissions ",8,["onClick"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:function(t){return j.confirmApiTokenDeletion(e)}}," Delete ",8,["onClick"])])])})),128))])]})),_:1})])])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(G,{show:_.displayingToken,onClose:t[4]||(t[4]=function(e){return _.displayingToken=!1})},{title:(0,n.withCtx)((function(){return[y]})),content:(0,n.withCtx)((function(){return[w,e.$page.props.jetstream.flash.token?((0,n.openBlock)(),(0,n.createBlock)("div",b,(0,n.toDisplayString)(e.$page.props.jetstream.flash.token),1)):(0,n.createCommentVNode)("",!0)]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(q,{onClick:t[3]||(t[3]=function(e){return _.displayingToken=!1})},{default:(0,n.withCtx)((function(){return[V]})),_:1})]})),_:1},8,["show"]),(0,n.createVNode)(G,{show:_.managingPermissionsFor,onClose:t[7]||(t[7]=function(e){return _.managingPermissionsFor=null})},{title:(0,n.withCtx)((function(){return[C]})),content:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",N,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(o.availablePermissions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("div",{key:e},[(0,n.createVNode)("label",B,[(0,n.createVNode)(L,{value:e,checked:_.updateApiTokenForm.permissions,"onUpdate:checked":t[5]||(t[5]=function(e){return _.updateApiTokenForm.permissions=e})},null,8,["value","checked"]),(0,n.createVNode)("span",T,(0,n.toDisplayString)(e),1)])])})),128))])]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(q,{onClick:t[6]||(t[6]=function(e){return _.managingPermissionsFor=null})},{default:(0,n.withCtx)((function(){return[S]})),_:1}),(0,n.createVNode)(U,{class:["ml-2",{"opacity-25":_.updateApiTokenForm.processing}],onClick:j.updateApiToken,disabled:_.updateApiTokenForm.processing},{default:(0,n.withCtx)((function(){return[A]})),_:1},8,["onClick","class","disabled"])]})),_:1},8,["show"]),(0,n.createVNode)(K,{show:_.apiTokenBeingDeleted,onClose:t[9]||(t[9]=function(e){return _.apiTokenBeingDeleted=null})},{title:(0,n.withCtx)((function(){return[F]})),content:(0,n.withCtx)((function(){return[$]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(q,{onClick:t[8]||(t[8]=function(e){return _.apiTokenBeingDeleted=null})},{default:(0,n.withCtx)((function(){return[P]})),_:1}),(0,n.createVNode)(H,{class:["ml-2",{"opacity-25":_.deleteApiTokenForm.processing}],onClick:j.deleteApiToken,disabled:_.deleteApiTokenForm.processing},{default:(0,n.withCtx)((function(){return[Z]})),_:1},8,["onClick","class","disabled"])]})),_:1},8,["show"])])}},oe=te},1201:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(5166),r=(0,n.createVNode)("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," API Tokens ",-1),s={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};var i=o(2693),a=o(8152);const l={props:["tokens","availablePermissions","defaultPermissions"],components:{ApiTokenManager:i.default,AppLayout:a.Z},render:function(e,t,o,i,a,l){var c=(0,n.resolveComponent)("api-token-manager"),d=(0,n.resolveComponent)("app-layout");return(0,n.openBlock)(),(0,n.createBlock)(d,null,{header:(0,n.withCtx)((function(){return[r]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",null,[(0,n.createVNode)("div",s,[(0,n.createVNode)(c,{tokens:o.tokens,"available-permissions":o.availablePermissions,"default-permissions":o.defaultPermissions},null,8,["tokens","available-permissions","default-permissions"])])])]})),_:1})}},c=l}}]);
//# sourceMappingURL=1201.js.map