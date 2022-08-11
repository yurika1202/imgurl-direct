var z=(o,t,i)=>{if(!t.has(o))throw TypeError("Cannot "+i)};var e=(o,t,i)=>(z(o,t,"read from private field"),i?i.call(o):t.get(o)),a=(o,t,i)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,i)},S=(o,t,i,l)=>(z(o,t,"write to private field"),l?l.call(o,i):t.set(o,i),i);var d=(o,t,i)=>(z(o,t,"access private method"),i);const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const r of p)if(r.type==="childList")for(const b of r.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&l(b)}).observe(document,{childList:!0,subtree:!0});function i(p){const r={};return p.integrity&&(r.integrity=p.integrity),p.referrerpolicy&&(r.referrerPolicy=p.referrerpolicy),p.crossorigin==="use-credentials"?r.credentials="include":p.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(p){if(p.ep)return;p.ep=!0;const r=i(p);fetch(p.href,r)}};M();var s,_,h,f,u,B,j,F,T,C,q,m,x;class N{constructor(){a(this,B);a(this,F);a(this,C);a(this,m);a(this,s,document.body.querySelector("dialog.js_dialog"));a(this,_,document.body.querySelectorAll("button.js_dialog_openBtn"));a(this,h,document.body.querySelector("div.js_dialog_contents"));a(this,f,document.createDocumentFragment());a(this,u,0)}action(){e(this,s)!=null&&d(this,B,j).call(this)}}s=new WeakMap,_=new WeakMap,h=new WeakMap,f=new WeakMap,u=new WeakMap,B=new WeakSet,j=function(){if(e(this,_).length!==0)for(const t of e(this,_))t.addEventListener("click",()=>{S(this,u,window.scrollY),d(this,C,q).call(this,t),e(this,s).showModal(),d(this,m,x).call(this)})},F=new WeakSet,T=function(t){t.addEventListener("click",()=>{e(this,s).close(),d(this,m,x).call(this)}),window.addEventListener("keydown",i=>{e(this,s).open&&i.key==="Escape"&&(e(this,s).close(),d(this,m,x).call(this))}),e(this,s).addEventListener("click",i=>{i.target===e(this,s)&&(e(this,s).close(),d(this,m,x).call(this))})},C=new WeakSet,q=function(t){if(e(this,h)!=null){for(;e(this,h).firstChild;)e(this,h).removeChild(e(this,h).firstChild);const i=document.createElement("button"),l={class:"el_btn el_closeBtn js_dialog_closeBtn",type:"button","aria-label":"\u9589\u3058\u308B"};for(let g of Object.entries(l))i.setAttribute(g[0],g[1]);for(let g=0;g<2;g+=1){const A=document.createElement("span");i.appendChild(A)}const p=document.createElement("ol");p.className="bl_dialog_generateStep";for(let g=0;g<4;g+=1){const A=document.createElement("li");p.appendChild(A)}p.hasChildNodes()&&p.childElementCount===4&&(t.classList.contains("__google")?(p.children[0].textContent="GoogleDrive\u3078\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",p.children[1].textContent="\u753B\u50CF\u3092\u9078\u629E\u3057\u3001\u300C\u30EA\u30F3\u30AF\u3092\u53D6\u5F97\u300D\u304B\u3089\u753B\u50CF\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC"):t.classList.contains("__dropbox")&&(p.children[0].textContent="DropBox\u3078\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",p.children[1].textContent="\u753B\u50CF\u3092\u9078\u629E\u3057\u3001\u300C\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u300D\u304B\u3089\u753B\u50CF\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC"),p.children[2].textContent="\u3053\u306E\u30DA\u30FC\u30B8\u306B\u623B\u3063\u3066\u304D\u3066\u3001\u53D6\u5F97\u3057\u3066\u304D\u305F\u30EA\u30F3\u30AF\u3092\u8CBC\u308A\u4ED8\u3051\u308B",p.children[3].textContent="\u751F\u6210\u3055\u308C\u305FURL\u3092\u30B3\u30D4\u30FC");const r=document.createElement("p");r.className="bl_dialog_message";const b=document.createTextNode("Have fun !!!");r.appendChild(b),e(this,f).append(i,p,r),e(this,h).appendChild(e(this,f)),d(this,F,T).call(this,i)}},m=new WeakSet,x=function(){const t=document.querySelector("html");t!=null&&(e(this,s).open?(t.style.position="fixed",t.style.top=`${e(this,u)*-1}px`):(t.style.position="",t.style.top="",window.scrollTo(0,e(this,u))))};var E,w,y,c,k,n,L,P,v,D;class H{constructor(){a(this,L);a(this,v);a(this,E,document.body.querySelectorAll("div.js_generate"));a(this,w,document.body.querySelectorAll("input.js_generate_pasteInput"));a(this,y,document.body.querySelectorAll("button.js_generate_executionBtn"));a(this,c,document.body.querySelectorAll("input.js_generate_copyInput"));a(this,k,document.body.querySelectorAll("button.js_generate_copyBtn"));a(this,n,document.body.querySelectorAll("p.js_generate_pasteError"))}action(){e(this,E).length!==0&&(e(this,w).length!==0&&e(this,y).length!==0&&d(this,L,P).call(this),e(this,c).length!==0&&e(this,k).length!==0&&this.copy())}copy(){for(const t of e(this,k))t.addEventListener("click",()=>{const i=t.parentNode.querySelector("input");i!=null&&i.value!==""&&navigator.clipboard.writeText(i.value).then(()=>{t.classList.add("is_display"),setTimeout(()=>{t.classList.remove("is_display")},2e3)}).catch(l=>{var r;const p=(r=t.parentElement)==null?void 0:r.nextElementSibling;p!=null&&(p.classList.add("is_display"),console.error(l))})})}}E=new WeakMap,w=new WeakMap,y=new WeakMap,c=new WeakMap,k=new WeakMap,n=new WeakMap,L=new WeakSet,P=function(){e(this,y).forEach(t=>{t.addEventListener("click",()=>{const i=t.parentNode.querySelector("input");i!=null&&d(this,v,D).call(this,t,i.value)})}),e(this,w).forEach(t=>{t.addEventListener("keydown",i=>{i.key==="Enter"&&d(this,v,D).call(this,t,t.value)})})},v=new WeakSet,D=function(t,i){if(t.closest(".__google")&&e(this,n)[0]!=null)if(e(this,n)[0].classList.remove("is_display"),i==="")e(this,n)[0].innerHTML="URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044 &#128591",e(this,n)[0].classList.add("is_display");else if(!/^https:\/\/drive\.google\.com.*$/.test(i))e(this,n)[0].innerHTML="GoogleDrive\u304B\u3089\u53D6\u5F97\u3057\u305F\u30EA\u30F3\u30AF\u3067\u306F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",e(this,n)[0].classList.add("is_display");else if(!/^https:\/\/drive\.google\.com\/file\/.+$/.test(i))e(this,n)[0].innerHTML="\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",e(this,n)[0].classList.add("is_display");else{const l=new RegExp("(?<=\\/d\\/).*?(?=\\/view)").exec(i),p=i.replace(new RegExp("(?<=https:\\/\\/drive\\.google\\.com\\/).*$"),`uc?export=view&id=${l}`);e(this,c)[0].value=p}if(t.closest(".__dropbox")&&e(this,n)[1]!=null)if(e(this,n)[1].classList.remove("is_display"),i==="")e(this,n)[1].innerHTML="URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044 &#128591",e(this,n)[1].classList.add("is_display");else if(!/^https:\/\/www\.dropbox\.com.*$/.test(i))e(this,n)[1].innerHTML="DropBox\u304B\u3089\u53D6\u5F97\u3057\u305F\u30EA\u30F3\u30AF\u3067\u306F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",e(this,n)[1].classList.add("is_display");else if(!/^https:\/\/www\.dropbox\.com.*\/s\/.+$/.test(i))e(this,n)[1].innerHTML="\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",e(this,n)[1].classList.add("is_display");else{const l=i.replace(new RegExp("(?<=https:\\/\\/).*?(?=\\.dropbox)"),"dl");e(this,c)[1].value=l}};function Y(){new N().action(),new H().action()}window.addEventListener("load",()=>{Y()});
