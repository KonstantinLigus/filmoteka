!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("kitKc");var o=r("bpxeT"),c=r("2TvXO"),i=r("kitKc"),s=r("go8W7"),l=r("2Ch4P");function d(e){s.gallery.innerHTML=function(e){return e.map((function(e){var t=e.poster_path,a=e.title,n=e.genre_ids,r=e.release_date,o=e.id,c=function(e){return""===e?"no info":null==e?void 0:e.slice(0,4)}(r),i=a.toUpperCase(),s=function(e){return null===e?"https://via.placeholder.com/440x660.jpg?text=Image+Not+Found":"https://image.tmdb.org/t/p/w500".concat(e)}(t),d=(0,l.getGenre)(n);return'<li class="gallery__item" id='.concat(o,'>\n        <img\n          class="gallery__img"\n          src="').concat(s,'"\n          alt=').concat(a,'\n        />\n        <p class="gallery__name">').concat(i,'</p>\n        <p class="gallery__information">').concat(d," | ").concat(c,"</p>\n    </li>")})).join("")}(e)}s=r("go8W7");function u(e,t){s.paginationHome.innerHTML=function(e,t){var a="",n=t-1,r=t+1;t>1&&(a+='<li class="btn prev" data-totalPages="'.concat(e,'" data-page="').concat(t-1,'"\n    ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>\n  </svg></li>'));t>2&&(a+='<li class="first numb" data-totalPages="'.concat(e,'" data-page="1")">1</li>'),t>3&&(a+='<li class="dots">...</li>'));t==e&&(n-=1);1==t?r+=2:2==t&&(r+=1);for(var o=n;o<=r;o++)o>e||(0==o&&(o+=1),a+='<li class="numb '.concat(t==o?"active":"",'" data-totalPages="').concat(e,'" data-page="').concat(o,'">').concat(o,"</li>"));t<e-1&&(t<e-2&&(a+='<li class="dots">...</li>'),a+='<li class="last numb" data-totalPages="'.concat(e,'" data-page="').concat(e,'">').concat(e,"</li>"));t<e&&(a+='<li class="btn next" data-totalPages="'.concat(e,'" data-page="').concat(t+1,'">\n    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>\n  </svg></li>'));return a}(e,t)}var p=new(0,i.GetMovieApi);function g(){return(g=e(o)(e(c).mark((function t(a){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.fetchPopularMovie();case 3:d((n=e.sent).results),u(n.total_pages,n.page),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",(function(e){return g.apply(this,arguments)}));o=r("bpxeT"),c=r("2TvXO"),s=r("go8W7"),s=r("go8W7");var f=new(0,(i=r("kitKc")).GetMovieApi),v="";function h(){return(h=e(o)(e(c).mark((function t(a){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.resetPage(),e.next=4,f.fetchSearchedMovie(a);case 4:0===(n=e.sent).results.length&&s.noSuccess.classList.add("visible"),d(n.results),s.paginationHome.innerHTML="",n.total_pages>0&&u(n.total_pages,n.page),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}s.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===(v=e.target.elements.text.value.trim()))return void s.noSuccess.classList.add("visible");s.noSuccess.classList.remove("visible");(function(e){h.apply(this,arguments)})(v),s.form.reset()}));o=r("bpxeT"),c=r("2TvXO"),s=r("go8W7");var m=new(0,(i=r("kitKc")).GetMovieApi);function w(){return(w=e(o)(e(c).mark((function t(a,n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m.setPage(a.target.dataset.page),e.next=4,m.fetchSearchedMovie(n);case 4:d((r=e.sent).results),u(r.total_pages,r.page),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function b(){return(b=e(o)(e(c).mark((function t(a){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m.setPage(a.target.dataset.page),e.next=4,m.fetchPopularMovie();case 4:d((n=e.sent).results),u(n.total_pages,n.page),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}s.paginationHome.addEventListener("click",(function(e){(function(e){i.isFetchPopularMovie&&function(e){b.apply(this,arguments)}(e)})(e),function(e){i.isFetchSearchedMovie&&function(e,t){w.apply(this,arguments)}(e,v)}(e)}));o=r("bpxeT");var x=r("8nrFW"),S=(c=r("2TvXO"),r("cidzk")),C=new(0,(i=r("kitKc")).GetMovieApi),O={backdrop:document.querySelector(".backdrop"),modalOpenClose:document.querySelector(".js-modalOpenClose"),closeBtn:document.querySelector("[data-modal-close]"),modalCard:document.querySelector(".movie-modal")},y=null,L=[],E=[];function k(){return(k=e(o)(e(c).mark((function t(a){var n,r,o,i,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.target.parentNode,i=o.getAttribute("id"),e.prev=3,e.next=6,C.fetchMoviebyId(i);case 6:y=e.sent,(0,S.renderMovieCard)(y),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:(s={addQueue:document.querySelector(".modal-button-queue"),addWatched:document.querySelector(".modal-button-watched")}).addQueue.addEventListener("click",q),s.addWatched.addEventListener("click",_),O.backdrop.classList.toggle("is-hidden"),O.closeBtn.addEventListener("click",M),O.backdrop.addEventListener("click",N),window.addEventListener("keydown",T),(null===(n=JSON.parse(localStorage.getItem("watchedCard")))||void 0===n?void 0:n.find((function(e){return e.id===Number(i)})))&&(s.addWatched.textContent="REMOVE FROM WATCHED",s.addWatched.classList.add("watched")),(null===(r=JSON.parse(localStorage.getItem("queuedCard")))||void 0===r?void 0:r.find((function(e){return e.id===Number(i)})))&&(s.addQueue.textContent="REMOVE FROM QUEUED",s.addQueue.classList.add("queued"));case 22:case"end":return e.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}function M(){O.backdrop.classList.toggle("is-hidden"),window.removeEventListener("keydown",T),O.modalCard.innerHTML=""}function N(e){e.currentTarget===e.target&&M()}function T(e){"Escape"===e.code&&M()}function _(t){if(!t.target.classList.contains("watched"))return JSON.parse(localStorage.getItem("watchedCard"))&&(L=JSON.parse(localStorage.getItem("watchedCard"))),L.push(y),localStorage.setItem("watchedCard",JSON.stringify(L)),t.target.classList.add("watched"),void(t.target.textContent="REMOVE FROM WATCHED");var a=(L=JSON.parse(localStorage.getItem("watchedCard"))).filter((function(e){return Number(e.id)!==Number(y.id)}));L=e(x)(a),localStorage.setItem("watchedCard",JSON.stringify(L)),t.target.classList.remove("watched"),t.target.textContent="ADD TO WATCHED"}function q(t){if(!t.target.classList.contains("queued"))return JSON.parse(localStorage.getItem("queuedCard"))&&(E=JSON.parse(localStorage.getItem("queuedCard"))),E.push(y),localStorage.setItem("queuedCard",JSON.stringify(E)),t.target.classList.add("queued"),void(t.target.textContent="REMOVE FROM QUEUED");var a=(E=JSON.parse(localStorage.getItem("queuedCard"))).filter((function(e){return Number(e.id)!==Number(y.id)}));E=e(x)(a),localStorage.setItem("queuedCard",JSON.stringify(E)),t.target.classList.remove("queued"),t.target.textContent="ADD TO QUEUED"}O.modalOpenClose.addEventListener("click",(function(e){return k.apply(this,arguments)})),r("2Ch4P")}();
//# sourceMappingURL=index.d8260703.js.map