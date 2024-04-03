import{d as h,u as f,a as b,c as w,j as g,_ as x,r as o,b as v,e as L,f as s,w as _,g as i}from"../index80185.js";import{L as y}from"./Logo80185.js";import{I as V}from"./InputTextWithValidation80185.js";import{c as C,a as F}from"./index.esm80185.js";import{F as S}from"./vee-validate.esm80185.js";import{u as T,s as $,e as B}from"./helpers80185.js";/* empty css                                                                            */import"./_commonjsHelpers80185.js";const P=h({name:"ForgotPwdView",setup(){const t=f(),a=b(),{showLoader:m,hideLoader:c}=T(),l=C({email:F().required("L'email è obbligatoria").email("L'email non è valida").label("Email")}),p=w(()=>t.user);return{schema:l,currentUser:p,onSubmit:async function(n,u){m();const r={email:n.email};await t.resetPassword(r).then(async e=>{$(a,{message:e.message}),g.push({name:"login"})}).catch(e=>{c(),B(a,e)})}}},components:{Logo:y,InputTextWithValidation:V,Form:S}});const E={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},I={class:"m-2 text-center"},k=i("h1",{class:"mb-3 mt-0 text-center"},"Password dimenticata?",-1),U=i("p",{class:"font-normal mb-4"}," Ti verrà inviata un'email con le istruzioni per reimpostare la password. ",-1);function W(t,a,m,c,l,p){const d=o("Logo"),n=o("InputTextWithValidation"),u=o("Button"),r=o("Form"),e=o("Card");return v(),L("div",E,[s(e,{class:"py-4 px-3"},{content:_(()=>[i("div",I,[s(d)]),k,U,s(r,{"validation-schema":t.schema,onSubmit:t.onSubmit,class:"flex flex-column"},{default:_(()=>[s(n,{name:"email",label:"Email*",type:"text"}),s(u,{label:"Conferma password",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const J=x(P,[["render",W]]);export{J as default};
