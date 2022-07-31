const a=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))n(p);new MutationObserver(p=>{for(const i of p)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(p){const i={};return p.integrity&&(i.integrity=p.integrity),p.referrerpolicy&&(i.referrerPolicy=p.referrerpolicy),p.crossorigin==="use-credentials"?i.credentials="include":p.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(p){if(p.ep)return;p.ep=!0;const i=e(p);fetch(p.href,i)}};a();class l{constructor(){this.openBtn=document.body.querySelectorAll(".js_dialog_openBtn"),this.closeBtn=document.body.querySelectorAll(".js_dialog_closeBtn")}action(){this.open()}open(){for(const t of this.openBtn){const e=t.nextElementSibling;t.addEventListener("click",()=>{e.setAttribute("open","true")})}this.close()}close(){for(const t of this.closeBtn){const e=t.parentElement;t.addEventListener("click",()=>{e.setAttribute("open","false")})}}}class s{constructor(){this.pasteInput=document.body.querySelectorAll(".js_generate_pasteInput"),this.executionBtn=document.body.querySelectorAll(".js_generate_executionBtn"),this.copyInput=document.body.querySelectorAll(".js_generate_copyInput"),this.copyBtn=document.body.querySelectorAll(".js_generate_copyBtn"),this.errorMsg=document.body.querySelectorAll(".js_generate_pasteError")}action(){this.replaceAction(),this.copy()}replaceAction(){this.executionBtn.forEach(t=>{t.addEventListener("click",()=>{const e=t.previousElementSibling;this.replace(t,e.value)})}),this.pasteInput.forEach(t=>{t.addEventListener("keydown",e=>{e.key==="Enter"&&this.replace(t,t.value)})})}replace(t,e){if(t.closest(".__google"))if(this.errorMsg[0].classList.remove("is_display"),e==="")this.errorMsg[0].innerHTML="URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044 &#128591",this.errorMsg[0].classList.add("is_display");else if(!/^https:\/\/drive\.google\.com.*$/.test(e))this.errorMsg[0].innerHTML="GoogleDrive\u304B\u3089\u53D6\u5F97\u3057\u305F\u30EA\u30F3\u30AF\u3067\u306F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[0].classList.add("is_display");else if(!/^https:\/\/drive\.google\.com\/file\/.+$/.test(e))this.errorMsg[0].innerHTML="\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[0].classList.add("is_display");else{const n=new RegExp("(?<=\\/d\\/).*?(?=\\/view)").exec(e),p=e.replace(new RegExp("(?<=https:\\/\\/drive\\.google\\.com\\/).*$"),`uc?export=view&id=${n}`);this.copyInput[0].value=p}if(t.closest(".__dropbox"))if(this.errorMsg[1].classList.remove("is_display"),e==="")this.errorMsg[1].innerHTML="URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044 &#128591",this.errorMsg[1].classList.add("is_display");else if(!/^https:\/\/www\.dropbox\.com.*$/.test(e))this.errorMsg[1].innerHTML="DropBox\u304B\u3089\u53D6\u5F97\u3057\u305F\u30EA\u30F3\u30AF\u3067\u306F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[1].classList.add("is_display");else if(!/^https:\/\/www\.dropbox\.com.*\/s\/.+$/.test(e))this.errorMsg[1].innerHTML="\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[1].classList.add("is_display");else{const n=e.replace(new RegExp("(?<=https:\\/\\/).*?(?=\\.dropbox)"),"dl");this.copyInput[1].value=n}}copy(){for(const t of this.copyBtn)t.addEventListener("click",()=>{const e=t.previousElementSibling;e.value!==""&&navigator.clipboard.writeText(e.value).then(()=>{t.classList.add("is_display"),setTimeout(()=>{t.classList.remove("is_display")},2e3)}).catch(n=>{t.parentElement.nextElementSibling.classList.add("is_display"),console.error(n)})})}}function d(){new l().action(),new s().action()}window.addEventListener("load",()=>{d()});