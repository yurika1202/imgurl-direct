const a=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const o of p.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerpolicy&&(p.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?p.credentials="include":i.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(i){if(i.ep)return;i.ep=!0;const p=e(i);fetch(i.href,p)}};a();class s{constructor(){this.dialog=document.body.querySelector(".js_dialog"),this.openBtn=document.body.querySelectorAll(".js_dialog_openBtn"),this.closeBtn=document.getElementById("js_dialog_closeBtn"),this.dialogContents=document.body.querySelector(".js_dialog_contents"),this.fragment=document.createDocumentFragment(),this.scrollPosition=""}action(){this.open(),this.close()}open(){for(const t of this.openBtn)t.addEventListener("click",()=>{this.scrollPosition=window.scrollY,this.createContents(t),this.dialog.showModal(),this.fixBody()})}close(){this.closeBtn.addEventListener("click",()=>{this.dialog.close(),this.fixBody()}),window.addEventListener("keydown",t=>{this.dialog.open&&t.key==="Escape"&&(this.dialog.close(),this.fixBody())}),this.dialog.addEventListener("click",t=>{t.target===this.dialog&&(this.dialog.close(),this.fixBody())})}createContents(t){for(;this.dialogContents.firstChild;)this.dialogContents.removeChild(this.dialogContents.firstChild);for(let e=0;e<4;e+=1){const n=document.createElement("li");this.fragment.append(n)}t.classList.contains("__google")?(this.fragment.children[0].textContent="GoogleDrive\u3078\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",this.fragment.children[1].textContent="\u753B\u50CF\u3092\u9078\u629E\u3057\u3001\u300C\u30EA\u30F3\u30AF\u3092\u53D6\u5F97\u300D\u304B\u3089\u753B\u50CF\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",this.fragment.children[2].textContent="\u3053\u306E\u30DA\u30FC\u30B8\u306B\u623B\u3063\u3066\u304D\u3066\u3001\u53D6\u5F97\u3057\u3066\u304D\u305F\u30EA\u30F3\u30AF\u3092\u8CBC\u308A\u4ED8\u3051\u308B",this.fragment.children[3].textContent="\u751F\u6210\u3055\u308C\u305FURL\u3092\u30B3\u30D4\u30FC",this.dialogContents.append(this.fragment)):t.classList.contains("__dropbox")&&(this.fragment.children[0].textContent="DropBox\u3078\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",this.fragment.children[1].textContent="\u753B\u50CF\u3092\u9078\u629E\u3057\u3001\u300C\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u300D\u304B\u3089\u753B\u50CF\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",this.fragment.children[2].textContent="\u3053\u306E\u30DA\u30FC\u30B8\u306B\u623B\u3063\u3066\u304D\u3066\u3001\u53D6\u5F97\u3057\u3066\u304D\u305F\u30EA\u30F3\u30AF\u3092\u8CBC\u308A\u4ED8\u3051\u308B",this.fragment.children[3].textContent="\u751F\u6210\u3055\u308C\u305FURL\u3092\u30B3\u30D4\u30FC",this.dialogContents.append(this.fragment))}fixBody(){const t=document.querySelector("html");this.dialog.open?(t.style.position="fixed",t.style.top=`${this.scrollPosition*-1}px`):(t.style.position="",t.style.top="",window.scrollTo(0,this.scrollPosition))}}class l{constructor(){this.pasteInput=document.body.querySelectorAll(".js_generate_pasteInput"),this.executionBtn=document.body.querySelectorAll(".js_generate_executionBtn"),this.copyInput=document.body.querySelectorAll(".js_generate_copyInput"),this.copyBtn=document.body.querySelectorAll(".js_generate_copyBtn"),this.errorMsg=document.body.querySelectorAll(".js_generate_pasteError")}action(){this.replaceAction(),this.copy()}replaceAction(){this.executionBtn.forEach(t=>{t.addEventListener("click",()=>{const e=t.previousElementSibling;this.replace(t,e.value)})}),this.pasteInput.forEach(t=>{t.addEventListener("keydown",e=>{e.key==="Enter"&&this.replace(t,t.value)})})}replace(t,e){if(t.closest(".__google"))if(this.errorMsg[0].classList.remove("is_display"),e==="")this.errorMsg[0].innerHTML="URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044 &#128591",this.errorMsg[0].classList.add("is_display");else if(!/^https:\/\/drive\.google\.com.*$/.test(e))this.errorMsg[0].innerHTML="GoogleDrive\u304B\u3089\u53D6\u5F97\u3057\u305F\u30EA\u30F3\u30AF\u3067\u306F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[0].classList.add("is_display");else if(!/^https:\/\/drive\.google\.com\/file\/.+$/.test(e))this.errorMsg[0].innerHTML="\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[0].classList.add("is_display");else{const n=new RegExp("(?<=\\/d\\/).*?(?=\\/view)").exec(e),i=e.replace(new RegExp("(?<=https:\\/\\/drive\\.google\\.com\\/).*$"),`uc?export=view&id=${n}`);this.copyInput[0].value=i}if(t.closest(".__dropbox"))if(this.errorMsg[1].classList.remove("is_display"),e==="")this.errorMsg[1].innerHTML="URL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044 &#128591",this.errorMsg[1].classList.add("is_display");else if(!/^https:\/\/www\.dropbox\.com.*$/.test(e))this.errorMsg[1].innerHTML="DropBox\u304B\u3089\u53D6\u5F97\u3057\u305F\u30EA\u30F3\u30AF\u3067\u306F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[1].classList.add("is_display");else if(!/^https:\/\/www\.dropbox\.com.*\/s\/.+$/.test(e))this.errorMsg[1].innerHTML="\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059 &#128546",this.errorMsg[1].classList.add("is_display");else{const n=e.replace(new RegExp("(?<=https:\\/\\/).*?(?=\\.dropbox)"),"dl");this.copyInput[1].value=n}}copy(){for(const t of this.copyBtn)t.addEventListener("click",()=>{const e=t.previousElementSibling;e.value!==""&&navigator.clipboard.writeText(e.value).then(()=>{t.classList.add("is_display"),setTimeout(()=>{t.classList.remove("is_display")},2e3)}).catch(n=>{t.parentElement.nextElementSibling.classList.add("is_display"),console.error(n)})})}}function d(){new s().action(),new l().action()}window.addEventListener("load",()=>{d()});
