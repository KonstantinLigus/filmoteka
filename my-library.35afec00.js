!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var d=n("bpxeT"),o=n("8nrFW"),c=n("2TvXO"),i=n("cidzk"),l=n("kitKc"),s=n("go8W7"),u=n("2Ch4P");function g(e){null!==e&&0!==e.length?s.gallery.innerHTML=function(e){return e.map((function(e){var t=e.poster_path,a=e.title,r=e.genres,n=e.release_date,d=e.id,o=function(e){return""===e?"no info":null==e?void 0:e.slice(0,4)}(n),c=a.toUpperCase(),i=p(t),l=function(e){return e.map((function(e){return e.id}))}(r);return'<li class="gallery__item" id='.concat(d,'>\n        <img\n          class="gallery__img"\n          src="').concat(i,'"\n          alt=').concat(a,'\n        />\n        <p class="gallery__name">').concat(c,'</p>\n        <p class="gallery__information">').concat((0,u.getGenre)(l)," | ").concat(o,"</p>\n    </li>")})).join("")}(e):s.gallery.innerHTML="<img src=https://cdn.dribbble.com/users/888330/screenshots/2653750/media/b7459526aeb0786638a2cf16951955b1.png />"}function p(e){return null===e?poster="https://via.placeholder.com/440x660.jpg?text=Image+Not+Found":"https://image.tmdb.org/t/p/w500".concat(e)}var m=document.querySelector('[data-action="watched"]'),f=document.querySelector('[data-action="queue"]'),v=!0,h=!1;function b(e){g(JSON.parse(localStorage.getItem("watchedCard")))}window.addEventListener("DOMContentLoaded",b),m.addEventListener("click",(function(e){m.classList.add("disabled"),f.classList.remove("disabled"),m.disabled=e.target,f.disabled=!e.target,v=!0,h=!1,b()})),f.addEventListener("click",(function(e){f.classList.add("disabled"),m.classList.remove("disabled"),f.disabled=e.target,m.disabled=!e.target,v=!1,h=!0,g(JSON.parse(localStorage.getItem("queuedCard")))}));var S=new(0,l.GetMovieApi),C={backdrop:document.querySelector(".backdrop"),modalOpenClose:document.querySelector(".js-modalOpenClose"),closeBtn:document.querySelector("[data-modal-close]"),modalCard:document.querySelector(".movie-modal")},O=null,w=[],E=[];function L(){return(L=e(d)(e(c).mark((function t(a){var r,n,d,o,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=a.target.parentNode,o=d.getAttribute("id"),e.prev=3,e.next=6,S.fetchMoviebyId(o);case 6:O=e.sent,(0,i.renderMovieCard)(O),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:(l={addQueue:document.querySelector(".modal-button-queue"),addWatched:document.querySelector(".modal-button-watched")}).addQueue.addEventListener("click",x),l.addWatched.addEventListener("click",k),C.backdrop.classList.toggle("is-hidden"),C.closeBtn.addEventListener("click",y),C.backdrop.addEventListener("click",N),window.addEventListener("keydown",q),(null===(r=JSON.parse(localStorage.getItem("watchedCard")))||void 0===r?void 0:r.find((function(e){return e.id===Number(o)})))&&(l.addWatched.textContent="REMOVE FROM WATCHED",l.addWatched.classList.add("watched")),(null===(n=JSON.parse(localStorage.getItem("queuedCard")))||void 0===n?void 0:n.find((function(e){return e.id===Number(o)})))&&(l.addQueue.textContent="REMOVE FROM QUEUED",l.addQueue.classList.add("queued"));case 22:case"end":return e.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}function y(){C.backdrop.classList.toggle("is-hidden"),window.removeEventListener("keydown",q),C.modalCard.innerHTML=""}function N(e){e.currentTarget===e.target&&y()}function q(e){"Escape"===e.code&&y()}function k(t){if(!t.target.classList.contains("watched"))return JSON.parse(localStorage.getItem("watchedCard"))&&(w=JSON.parse(localStorage.getItem("watchedCard"))),w.push(O),localStorage.setItem("watchedCard",JSON.stringify(w)),v&&g(w),t.target.classList.add("watched"),void(t.target.textContent="REMOVE FROM WATCHED");var a=(w=JSON.parse(localStorage.getItem("watchedCard"))).filter((function(e){return Number(e.id)!==Number(O.id)}));w=e(o)(a),localStorage.setItem("watchedCard",JSON.stringify(w)),v&&g(w),t.target.classList.remove("watched"),t.target.textContent="ADD TO WATCHED"}function x(t){if(!t.target.classList.contains("queued"))return JSON.parse(localStorage.getItem("queuedCard"))&&(E=JSON.parse(localStorage.getItem("queuedCard"))),E.push(O),localStorage.setItem("queuedCard",JSON.stringify(E)),h&&g(E),t.target.classList.add("queued"),void(t.target.textContent="REMOVE FROM QUEUED");var a=(E=JSON.parse(localStorage.getItem("queuedCard"))).filter((function(e){return Number(e.id)!==Number(O.id)}));E=e(o)(a),localStorage.setItem("queuedCard",JSON.stringify(E)),h&&g(E),t.target.classList.remove("queued"),t.target.textContent="ADD TO QUEUED"}C.modalOpenClose.addEventListener("click",(function(e){return L.apply(this,arguments)}))}();
//# sourceMappingURL=my-library.35afec00.js.map
