import{D as v}from"./datetime80185.js";import{u as C}from"./attraction80185.js";import{u as M,e as g}from"./helpers80185.js";import{u as F}from"./dashboard80185.js";import{d as S,o as k,l as L,a as R,c as A,i as $,_ as N,r as w,b as i,e as d,g as a,f as c,s as T,F as B,D as U,w as s,h as n,t as m}from"../index80185.js";const z=S({setup(){k(()=>{t.value.date=v.now().setLocale("it").toFormat("MMMM/yyyy").replace(/^\w/,u=>u.toUpperCase()),r()});const t=L({}),o=C(),p=F(),{showLoader:y,hideLoader:h}=M(),V=R(),l=A(()=>o.allAttractions),b=A(()=>p.allDashboards),r=async function(){y(),await o.fetchAllAttractions().then(()=>{h(),e()})},e=async function(){y();let u="",D="";if(t.value.date&&t.value.date.toString().includes("/")){let _=v.fromFormat(t.value.date,"MMMM/yyyy",{locale:"it"});u=_.month+"",D=_.year+""}else u=v.fromJSDate(new Date(t.value.date)).toFormat("M",{locale:"it"}),D=v.fromJSDate(new Date(t.value.date)).toFormat("yyyy",{locale:"it"});const f=new Map;f.set("month",u),f.set("year",D),t.value.attraction_id&&f.set("attraction_id",t.value.attraction_id),await p.fetchAllReveliaDashboard(f).then(()=>{h()}).catch(_=>{h(),g(V,_)})};return $(l,()=>{l.value.unshift({id:"null",name:"Tutte le location"}),t.value.attraction_id=l.value[0].id}),{form:t,attractions:l,dashboards:b,fetchAllReveliaDashboard:e}}});const J={class:"dashboard"},E=a("h1",null,"Dashboard",-1),P={key:0,class:"flex align-items-center"},j={class:"field col-2 flex flex-column"},q=a("label",null,"Data",-1),x={class:"field col-4 flex flex-column"},G=a("label",{for:"location"},"Attrazione",-1),H={key:1},I={class:"flex align-items-center flex-wrap"},K={key:2},O={class:"flex align-items-center flex-wrap"},Q={class:"col-4"},W={class:"col-4"},X={class:"col-4"};function Y(t,o,p,y,h,V){const l=w("Calendar"),b=w("Dropdown"),r=w("Card");return i(),d("div",J,[E,t.form?(i(),d("div",P,[a("div",j,[q,c(l,{modelValue:t.form.date,"onUpdate:modelValue":[o[0]||(o[0]=e=>t.form.date=e),o[1]||(o[1]=e=>t.fetchAllReveliaDashboard())],view:"month",dateFormat:"MM/yy"},null,8,["modelValue"])]),a("div",x,[G,c(b,{modelValue:t.form.attraction_id,"onUpdate:modelValue":o[2]||(o[2]=e=>t.form.attraction_id=e),options:t.attractions,optionLabel:"name",optionValue:"id",placeholder:"",name:"location",onChange:o[3]||(o[3]=e=>t.fetchAllReveliaDashboard())},null,8,["modelValue","options"])])])):T("",!0),t.dashboards&&t.dashboards.revenue_attractions&&t.form.attraction_id=="null"?(i(),d("div",H,[a("div",I,[(i(!0),d(B,null,U(t.dashboards.revenue_attractions,e=>(i(),d("div",{key:e.name,class:"col-4"},[c(r,null,{title:s(()=>[n(m(e.name),1)]),content:s(()=>[n(" € "+m(e.revenue_month),1)]),_:2},1024)]))),128))])])):(i(),d("div",K,[a("div",O,[a("div",Q,[c(r,null,{title:s(()=>[n(" Prenotazioni totali mese ")]),content:s(()=>[n(m(t.dashboards.orders_count||"0"),1)]),_:1})]),a("div",W,[c(r,null,{title:s(()=>[n(" Visitatori totali mese ")]),content:s(()=>[n(m(t.dashboards.visits_count||"0"),1)]),_:1})]),a("div",X,[c(r,null,{title:s(()=>[n(" Fatturato totale mese ")]),content:s(()=>[n(" € "+m(t.dashboards.total_revenue_month||"0"),1)]),_:1})])])]))])}const st=N(z,[["render",Y]]);export{st as default};
