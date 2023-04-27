function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=t.parcelRequire00e6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},t.parcelRequire00e6=a),a("cc2Wl"),a("abGcp"),a("8sK5a");var o=a("7IoHk"),i=a("zSg4k");const l=document.querySelector(".close_modal_window"),c=document.querySelector(".modal_window"),r=document.querySelector("main"),d=document.querySelector(".modal_inner"),m=document.querySelector(".modal_content");function u(){c.classList.add("is-hidden"),d.innerHTML="",document.body.classList.remove("stop-scrolling")}r.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.classList.contains("movie__image"))return;c.classList.remove("is-hidden");!async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=28f50cf3f177782503c21b43af04c7bc`);!async function(e){try{const{desktop:t,tablet:n,mobile:s}=`https://image.tmdb.org/t/p/original${e.poster_path}`,a=`\n      <div class="modalMarkup trailer__picture">\n         <picture>\n            <source src= ${t} media="(min-width: 1200px)">\n            <source src= ${n} media="(min-width: 768px)">\n            <source src= ${s} media="(min-width: 320px)">\n            <img src= https://image.tmdb.org/t/p/original${e.poster_path} \n            alt=${e.title} \n            id =${e.id} class="modal__img">\n        </picture>\n        <svg xmlns="http://www.w3.org/2000/svg" \n        width="70px" height="70px" \n        class="modal__svg" \n        id=${e.id}\n        viewBox="0 0 16 16">\n         <path \n         id=${e.id} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n         <path\n         id=${e.id} d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>\n        </svg>\n      </div>\n      <div class="modal__content-movie ">\n\n\n        <p class="modal__title">${e.title}</p>\n        <div class="modal__box">\n          <div class="film-features">\n            <p class="film-features__text">Vote / Votes</p>\n            <p class="film-features__text">Popularity</p>\n            <p class="film-features__text">Original Title</p>\n            <p class="film-features__text">Genre</p>\n          </div>\n          <div class="film-values">\n            <p class="film-values__text">\n              <span class="film-values__vote film-values__vote--color">${e.vote_average}</span>\n              <span class="film-values__slash">/</span>\n              <span class="film-values__vote film-values__votes--color">${e.vote_count}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-value__vote">${e.popularity.toFixed(1)}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${e.original_title}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${e.genres[0].name}</span>\n            </p>\n          </div>\n        </div>\n        <div class="modal__description">\n          <p class="modal__about">About</p>\n          <p class="modal__text">${e.overview}</p>\n        </div>\n        <div class="modal__btn-box">\n          <button \n          class="modal__btn modal__btn--removeWatched" \n          id="${e.id}" type="button" >Remove from watched</button>\n          <button \n          class="modal__btn modal__btn--removeQueued"\n          id="${e.id}" type="button" >Remove from queue</button>\n\n        </div>\n      </div>`;d.insertAdjacentHTML("beforeend",a)}catch(e){console.log(e)}}(await t.json())}catch(e){console.log(e)}}(e.target.id),document.body.classList.add("stop-scrolling")})),l.addEventListener("click",u),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&(u(),c.removeEventListener("click",u),document.body.classList.remove("stop-scrolling"))})),document.body.addEventListener("click",(function(e){e.target===c&&(u(),document.body.classList.remove("stop-scrolling"),c.removeEventListener("click",u))}));m.addEventListener("click",(t=>{const n=t.target.id;if(t.target.classList.contains("modal__btn--removeWatched"))(t=>{if(i.watched.includes(t)){const n=i.watched.indexOf(t);i.watched.splice(n,1);try{(0,i.saveWatched)(),e(o).Notify.success("Succesfully removed from watched.")}catch(t){console.error(t.message),e(o).Notify.failure("Something went wrong. Please, try again later.")}}else e(o).Notify.info("You allready removed this movie from watched.")})(n);else{if(!t.target.classList.contains("modal__btn--removeQueued"))return;(t=>{if(i.queued.includes(t)){const n=i.queued.indexOf(t);i.queued.splice(n,1);try{(0,i.saveQueued)(),e(o).Notify.success("Succesfully removed from watched.")}catch(t){console.error(t.message),e(o).Notify.failure("Something went wrong. Please, try again later.")}}else e(o).Notify.info("You allready removed this movie from queued.")})(n)}})),a("cc2Wl");const p=document.querySelector(".btn-watched"),_=document.querySelector(".btn-queue"),v=document.querySelector(".library"),f="watched",g=async e=>{const t=await Promise.all(e.map((async e=>{const t=await(async e=>{const t=`https://api.themoviedb.org/3/movie/${e}?api_key=28f50cf3f177782503c21b43af04c7bc`;try{const e=await fetch(t);return await e.json()}catch(e){console.error(e)}})(e),n=(e=>{let t=e.poster_path?e.poster_path:e.backdrop_path;return null===t?"https://images.pexels.com/photos/5721902/pexels-photo-5721902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2":`https://image.tmdb.org/t/p/original${t}`})(t),s=t.title?t.title:t.name,a=t.release_date?t.release_date:t.first_air_date,o=new Date(a).getFullYear(),i=t.vote_average.toFixed(1),l=t.genres[0].name;return console.log(l),((e,t,n,s,a,o)=>`<li class="movie__template">\n    <img class="movie__image" id="${t}" src="${e}" alt='${n}' width="280px" height="398px"/>\n    <h5 class="movie__title">${n}</h5>\n    <div class="movie__informations"><span>${s}</span> | <span>${a}</span>\n    <span class="movie__rating">${o}</span></div>\n  </li>`)(n,e,s,l,o,i)})));v.innerHTML=t.join("")},h=e=>{try{const t=localStorage.getItem(e),n=JSON.parse(t);if(null===n)return;g(n),console.log("array:",n)}catch(e){console.error(e.message)}};h(f),p.addEventListener("click",(()=>{h(f)})),_.addEventListener("click",(()=>{h("queue")}));
//# sourceMappingURL=libary.d6a44c04.js.map