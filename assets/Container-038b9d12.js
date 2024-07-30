import{j as e,N as u,a as j,P as B,u as w,r as p,B as C,C as b,D as v,R as l,E as W,G as O,O as L}from"./index-fac7e4bd.js";import $ from"./Currency-fd30af04.js";import{c as E}from"./cashFormatter-d27e1d94.js";import{w as T}from"./wallet-50c30de4.js";const z="/assets/homeBtn-09702f38.svg",P="/assets/statisticsBtn-5a8dcbbd.svg",R="/assets/currencyBtn-7e092cac.svg",H="_nav_1waef_5",S="_navBtn_1waef_23",D="_active_1waef_51",M="_use_1waef_69",q="_description_1waef_101",F="_currencyNavLink_1waef_159",o={nav:H,navBtn:S,active:D,use:M,description:q,currencyNavLink:F};function I(){return e.jsxs("div",{className:o.nav,children:[e.jsxs(u,{to:"/home",className:({isActive:t})=>t?`${o.active}`:`${o.navBtn}`,children:[e.jsx("div",{children:e.jsx("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",children:e.jsx("use",{xlinkHref:`${z}#my-home-icon`})})}),e.jsx("div",{className:o.description,children:"Home"})]}),e.jsxs(u,{to:"/diagram",className:({isActive:t})=>t?`${o.active}`:`${o.navBtn}`,children:[e.jsx("div",{children:e.jsx("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",children:e.jsx("use",{xlinkHref:`${P}#my-statistics-icon`})})}),e.jsx("div",{className:o.description,children:"Statistics"})]}),e.jsx(u,{to:"/currency",className:({isActive:t})=>t?`${o.active}`:`${o.navBtn} ${o.currencyNavLink}`,children:e.jsx("div",{children:e.jsx("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 38",children:e.jsx("use",{xlinkHref:`${R}#my-currency-icon`})})})})]})}const G="_container_1q7t8_5",U={container:G},A=()=>{const t=j(n=>n.finance.totalBalance);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:U.container,children:[e.jsx("h2",{children:"YOUR BALANCE"}),e.jsx("div",{children:"€ "+E(t)})]})})},V="_wrapper_17vq0_5",Y="_balance_17vq0_23",J="_homeContainer_17vq0_33",f={wrapper:V,balance:Y,homeContainer:J},m=({isDesktop:t})=>e.jsxs("div",{className:f.homeContainer,children:[e.jsx(A,{}),t&&e.jsx($,{})]});m.propTypes={isDesktop:B.bool.isRequired};const K=()=>{const t=w(),[n,s]=p.useState(window.innerWidth);p.useEffect(()=>{t(C());const r=()=>{s(window.innerWidth)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]);const a=n>767;return e.jsxs("div",{className:f.dashboardContainer,children:[e.jsx(I,{}),e.jsxs(b,{children:[e.jsx(v,{path:"/home",element:e.jsx(m,{isDesktop:a})}),a&&e.jsx(v,{path:"/diagram",element:e.jsx(m,{isDesktop:a})}),a&&e.jsx(v,{path:"/",element:e.jsx(m,{isDesktop:a})})]})]})};var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=l.createContext&&l.createContext(N),c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(t){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)},Q=globalThis&&globalThis.__rest||function(t,n){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(s[a[r]]=t[a[r]]);return s};function k(t){return t&&t.map(function(n,s){return l.createElement(n.tag,c({key:s},n.attr),k(n.child))})}function X(t){return function(n){return l.createElement(Z,c({attr:c({},t.attr)},n),k(t.child))}}function Z(t){var n=function(s){var a=t.attr,r=t.size,_=t.title,y=Q(t,["attr","size","title"]),g=r||s.size||"1em",d;return s.className&&(d=s.className),t.className&&(d=(d?d+" ":"")+t.className),l.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,y,{className:d,style:c(c({color:t.color||s.color},s.style),t.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),_&&l.createElement("title",null,_),t.children)};return x!==void 0?l.createElement(x.Consumer,null,function(s){return n(s)}):n(N)}function ee(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}},{tag:"path",attr:{d:"M9 12h12l-3 -3"}},{tag:"path",attr:{d:"M18 15l3 -3"}}]})(t)}const te="_header_1kgve_5",ne="_logoContainer_1kgve_23",se="_logo_1kgve_23",ae="_title_1kgve_49",re="_logOutContainer_1kgve_69",oe="_name_1kgve_83",ie="_exit_1kgve_105",ce="_exitText_1kgve_115",le="_exitLogo_1kgve_125",i={header:te,logoContainer:ne,logo:se,title:ae,logOutContainer:re,name:oe,exit:ie,exitText:ce,exitLogo:le},de=()=>{const t=j(W),n=w(),s=t.length>9?t.slice(0,9)+"...":t,a=()=>{n(O(!0))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:i.header,children:[e.jsxs("div",{className:i.logoContainer,children:[e.jsx("img",{src:T,className:i.logo,alt:"wallet logo"}),e.jsx("h2",{className:i.title,children:"Wallet"})]}),e.jsxs("div",{className:i.logOutContainer,children:[e.jsx("span",{className:i.name,children:s}),e.jsx("div",{className:i.exit,onClick:a,children:e.jsxs(x.Provider,{value:{size:24,color:"currentColor"},children:[e.jsx(ee,{className:i.exitLogo}),e.jsx("span",{className:i.exitText,children:"Exit"})]})})]})]})})},he="_wrapper_1mksk_1",me="_container_1mksk_15",ue="_containWrapper_1mksk_33",ve="_dashBoardWrapper_1mksk_95",xe="_outletWrapper_1mksk_103",h={wrapper:he,container:me,containWrapper:ue,dashBoardWrapper:ve,outletWrapper:xe},we=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:h.container,children:[e.jsx(de,{}),e.jsx("div",{className:h.wrapper,children:e.jsxs("div",{className:h.containWrapper,children:[e.jsx("div",{className:h.dashBoardWrapper,children:e.jsx(K,{})}),e.jsx("div",{className:h.outletWrapper,children:e.jsx(L,{})})]})})]})});export{we as Container,we as default};
