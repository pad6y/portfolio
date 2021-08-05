(self.webpackChunk=self.webpackChunk||[]).push([[7580],{7546:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166),n={class:"text-sm text-gray-600"};const s={props:["on"],render:function(e,t,o,s,a,l){return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(r.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",n,[(0,r.renderSlot)(e.$slots,"default")],512),[[r.vShow,o.on]])]})),_:3})])}},a=s},1684:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166);const n={props:{type:{type:String,default:"submit"}},render:function(e,t,o,n,s,a){return(0,r.openBlock)(),(0,r.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-gold-lite rounded-md font-semibold text-xs text-black uppercase tracking-widest hover:bg-gold-md active:bg-gold-dark focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,r.renderSlot)(e.$slots,"default")],8,["type"])}},s=n},9248:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var r=o(5166),n={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},a={class:"grid grid-cols-6 gap-6"},l={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};const c={emits:["submitted"],components:{JetSectionTitle:o(5090).Z},computed:{hasActions:function(){return!!this.$slots.actions}},render:function(e,t,o,c,i,d){var u=(0,r.resolveComponent)("jet-section-title");return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)(u,null,{title:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"title")]})),description:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"description")]})),_:1}),(0,r.createVNode)("div",s,[(0,r.createVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,r.createVNode)("div",{class:["px-4 py-5 bg-white sm:p-6 shadow",d.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"]},[(0,r.createVNode)("div",a,[(0,r.renderSlot)(e.$slots,"form")])],2),d.hasActions?((0,r.openBlock)(),(0,r.createBlock)("div",l,[(0,r.renderSlot)(e.$slots,"actions")])):(0,r.createCommentVNode)("",!0)],32)])])}},i=c},7420:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166);const n={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}},render:function(e,t,o,n,s,a){return(0,r.openBlock)(),(0,r.createBlock)("input",{class:"border-yellow-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm",value:o.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,["value"])}},s=n},8985:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166),n={class:"text-sm text-red-600"};const s={props:["message"],render:function(e,t,o,s,a,l){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("p",n,(0,r.toDisplayString)(o.message),1)],512)),[[r.vShow,o.message]])}},a=s},3845:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var r=o(5166),n={class:"block font-medium text-sm text-gray-700"},s={key:0},a={key:1};const l={props:["value"],render:function(e,t,o,l,c,i){return(0,r.openBlock)(),(0,r.createBlock)("label",n,[o.value?((0,r.openBlock)(),(0,r.createBlock)("span",s,(0,r.toDisplayString)(o.value),1)):((0,r.openBlock)(),(0,r.createBlock)("span",a,[(0,r.renderSlot)(e.$slots,"default")]))])}},c=l},9056:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166);const n={props:{type:{type:String,default:"button"}},render:function(e,t,o,n,s,a){return(0,r.openBlock)(),(0,r.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"},[(0,r.renderSlot)(e.$slots,"default")],8,["type"])}},s=n},5090:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var r=o(5166),n={class:"md:col-span-1"},s={class:"px-4 sm:px-0"},a={class:"text-lg font-medium text-gray-900"},l={class:"mt-1 text-sm text-gray-600"};const c={render:function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)("div",s,[(0,r.createVNode)("h3",a,[(0,r.renderSlot)(e.$slots,"title")]),(0,r.createVNode)("p",l,[(0,r.renderSlot)(e.$slots,"description")])])])}},i=c},7580:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var r=o(5166),n=(0,r.createTextVNode)(" Profile Information "),s=(0,r.createTextVNode)(" Update your account's profile information and email address. "),a={key:0,class:"col-span-6 sm:col-span-4"},l={class:"mt-2"},c={class:"mt-2"},i=(0,r.createTextVNode)(" Select A New Photo "),d=(0,r.createTextVNode)(" Remove Photo "),u={class:"col-span-6 sm:col-span-4"},p={class:"col-span-6 sm:col-span-4"},m=(0,r.createTextVNode)(" Saved. "),f=(0,r.createTextVNode)(" Save ");var h=o(1684),v=o(9248),g=o(7420),k=o(8985),w=o(3845),y=o(7546),b=o(9056);const V={components:{JetActionMessage:y.Z,JetButton:h.Z,JetFormSection:v.Z,JetInput:g.Z,JetInputError:k.Z,JetLabel:w.Z,JetSecondaryButton:b.Z},props:["user"],data:function(){return{form:this.$inertia.form({_method:"PUT",name:this.user.name,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation:function(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0})},selectNewPhoto:function(){this.$refs.photo.click()},updatePhotoPreview:function(){var e=this,t=new FileReader;t.onload=function(t){e.photoPreview=t.target.result},t.readAsDataURL(this.$refs.photo.files[0])},deletePhoto:function(){var e=this;this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:function(){return e.photoPreview=null}})}},render:function(e,t,o,h,v,g){var k=(0,r.resolveComponent)("jet-label"),w=(0,r.resolveComponent)("jet-secondary-button"),y=(0,r.resolveComponent)("jet-input-error"),b=(0,r.resolveComponent)("jet-input"),V=(0,r.resolveComponent)("jet-action-message"),x=(0,r.resolveComponent)("jet-button"),N=(0,r.resolveComponent)("jet-form-section");return(0,r.openBlock)(),(0,r.createBlock)(N,{onSubmitted:g.updateProfileInformation},{title:(0,r.withCtx)((function(){return[n]})),description:(0,r.withCtx)((function(){return[s]})),form:(0,r.withCtx)((function(){return[e.$page.props.jetstream.managesProfilePhotos?((0,r.openBlock)(),(0,r.createBlock)("div",a,[(0,r.createVNode)("input",{type:"file",class:"hidden",ref:"photo",onChange:t[1]||(t[1]=function(){return g.updatePhotoPreview&&g.updatePhotoPreview.apply(g,arguments)})},null,544),(0,r.createVNode)(k,{for:"photo",value:"Photo"}),(0,r.withDirectives)((0,r.createVNode)("div",l,[(0,r.createVNode)("img",{src:o.user.profile_photo_url,alt:o.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,["src","alt"])],512),[[r.vShow,!v.photoPreview]]),(0,r.withDirectives)((0,r.createVNode)("div",c,[(0,r.createVNode)("span",{class:"block rounded-full w-20 h-20",style:"background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+v.photoPreview+"');"},null,4)],512),[[r.vShow,v.photoPreview]]),(0,r.createVNode)(w,{class:"mt-2 mr-2",type:"button",onClick:(0,r.withModifiers)(g.selectNewPhoto,["prevent"])},{default:(0,r.withCtx)((function(){return[i]})),_:1},8,["onClick"]),o.user.profile_photo_path?((0,r.openBlock)(),(0,r.createBlock)(w,{key:0,type:"button",class:"mt-2",onClick:(0,r.withModifiers)(g.deletePhoto,["prevent"])},{default:(0,r.withCtx)((function(){return[d]})),_:1},8,["onClick"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(y,{message:v.form.errors.photo,class:"mt-2"},null,8,["message"])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",u,[(0,r.createVNode)(k,{for:"name",value:"Name"}),(0,r.createVNode)(b,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:v.form.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.form.name=e}),autocomplete:"name"},null,8,["modelValue"]),(0,r.createVNode)(y,{message:v.form.errors.name,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",p,[(0,r.createVNode)(k,{for:"email",value:"Email"}),(0,r.createVNode)(b,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:v.form.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.form.email=e})},null,8,["modelValue"]),(0,r.createVNode)(y,{message:v.form.errors.email,class:"mt-2"},null,8,["message"])])]})),actions:(0,r.withCtx)((function(){return[(0,r.createVNode)(V,{on:v.form.recentlySuccessful,class:"mr-3"},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["on"]),(0,r.createVNode)(x,{class:{"opacity-25":v.form.processing},disabled:v.form.processing},{default:(0,r.withCtx)((function(){return[f]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])}},x=V}}]);
//# sourceMappingURL=7580.js.map