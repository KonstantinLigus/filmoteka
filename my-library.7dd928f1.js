var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in a){var d=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,d.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=d);var r=d("31L8x"),n=d("1TPJ0"),o=d("1sEOH"),l=d("3JWO1");function i(e){null!==e&&0!==e.length?o.gallery.innerHTML=function(e){return e.map((({poster_path:e,title:t,genres:a,release_date:d,id:r})=>{const n=function(e){return""===e?"no info":null==e?void 0:e.slice(0,4)}(d),o=t.toUpperCase(),i=c(e),s=function(e){return e.map((({id:e})=>e))}(a);return`<li class="gallery__item" id=${r}>\n        <img\n          class="gallery__img"\n          src="${i}"\n          alt=${t}\n        />\n        <p class="gallery__name">${o}</p>\n        <p class="gallery__information">${(0,l.getGenre)(s)} | ${n}</p>\n    </li>`})).join("")}(e):o.gallery.innerHTML="<img src=https://cdn.dribbble.com/users/888330/screenshots/2653750/media/b7459526aeb0786638a2cf16951955b1.png />"}function c(e){return null===e?poster="https://via.placeholder.com/440x660.jpg?text=Image+Not+Found":`https://image.tmdb.org/t/p/w500${e}`}var s=d("gjiCh");const u=document.querySelector('[data-action="watched"]'),g=document.querySelector('[data-action="queue"]');let m=!0,p=!1;function f(e){(0,s.loaderShow)();const t=JSON.parse(localStorage.getItem("watchedCard"));(0,s.hideLoader)(),i(t)}window.addEventListener("DOMContentLoaded",f),u.addEventListener("click",(function(e){u.classList.add("disabled"),g.classList.remove("disabled"),u.disabled=e.target,g.disabled=!e.target,m=!0,p=!1,f()})),g.addEventListener("click",(function(e){(0,s.loaderShow)(),g.classList.add("disabled"),u.classList.remove("disabled"),g.disabled=e.target,u.disabled=!e.target,m=!1,p=!0;const t=JSON.parse(localStorage.getItem("queuedCard"));(0,s.hideLoader)(),i(t)}));const h=new(0,n.GetMovieApi),S={backdrop:document.querySelector(".backdrop"),modalOpenClose:document.querySelector(".js-modalOpenClose"),closeBtn:document.querySelector("[data-modal-close]"),modalCard:document.querySelector(".movie-modal")};let b=null,v=[],C=[];function O(){S.backdrop.classList.toggle("is-hidden"),window.removeEventListener("keydown",L),S.modalCard.innerHTML=""}function w(e){e.currentTarget===e.target&&O()}function L(e){"Escape"===e.code&&O()}function E(e){if(!e.target.classList.contains("watched"))return JSON.parse(localStorage.getItem("watchedCard"))&&(v=JSON.parse(localStorage.getItem("watchedCard"))),v.push(b),localStorage.setItem("watchedCard",JSON.stringify(v)),m&&i(v),e.target.classList.add("watched"),void(e.target.textContent="REMOVE FROM WATCHED");{v=JSON.parse(localStorage.getItem("watchedCard"));const t=v.filter((e=>Number(e.id)!==Number(b.id)));v=[...t],localStorage.setItem("watchedCard",JSON.stringify(v)),m&&i(v),e.target.classList.remove("watched"),e.target.textContent="ADD TO WATCHED"}}function y(e){if(!e.target.classList.contains("queued"))return JSON.parse(localStorage.getItem("queuedCard"))&&(C=JSON.parse(localStorage.getItem("queuedCard"))),C.push(b),localStorage.setItem("queuedCard",JSON.stringify(C)),p&&i(C),e.target.classList.add("queued"),void(e.target.textContent="REMOVE FROM QUEUED");{C=JSON.parse(localStorage.getItem("queuedCard"));const t=C.filter((e=>Number(e.id)!==Number(b.id)));C=[...t],localStorage.setItem("queuedCard",JSON.stringify(C)),p&&i(C),e.target.classList.remove("queued"),e.target.textContent="ADD TO QUEUED"}}S.modalOpenClose.addEventListener("click",(async function(e){var t,a;if(e.target===e.currentTarget)return;const d=e.target.parentNode.getAttribute("id");try{b=await h.fetchMoviebyId(d),(0,r.renderMovieCard)(b)}catch(e){console.error(e)}const n={addQueue:document.querySelector(".modal-button-queue"),addWatched:document.querySelector(".modal-button-watched")};n.addQueue.addEventListener("click",y),n.addWatched.addEventListener("click",E),S.backdrop.classList.toggle("is-hidden"),S.closeBtn.addEventListener("click",O),S.backdrop.addEventListener("click",w),window.addEventListener("keydown",L),(null===(t=JSON.parse(localStorage.getItem("watchedCard")))||void 0===t?void 0:t.find((e=>e.id===Number(d))))&&(n.addWatched.textContent="REMOVE FROM WATCHED",n.addWatched.classList.add("watched"));(null===(a=JSON.parse(localStorage.getItem("queuedCard")))||void 0===a?void 0:a.find((e=>e.id===Number(d))))&&(n.addQueue.textContent="REMOVE FROM QUEUED",n.addQueue.classList.add("queued"))})),d("8Yq9A");
//# sourceMappingURL=my-library.7dd928f1.js.map
