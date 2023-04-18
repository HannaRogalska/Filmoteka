const e=document.querySelector(".close_modal_window"),t=document.querySelector(".modal_window"),a=document.querySelector("main");document.querySelector(".movie__template");console.log(a);document.querySelector(".modal_inner"),document.querySelector(".movie__templates");e.addEventListener("click",(()=>{t.style.display="none"})),a.addEventListener("click",(async function(e){t.classList.remove("is-hidden");const a=e.target;console.log(a),async function(){try{const e=await createMovieFeature(),{id:a,title:s,originalTitle:n,about:l,image:i,genres:o,popularity:c,vote:_,votes:r}=e.forMarkup,{desktop:d,tablet:m,mobile:p}=i,u=`\n      <div class="modalMarkup trailer__picture">\n         <picture>\n            <source srcset=${d} media="(min-width: 1200px)">\n            <source srcset=${m} media="(min-width: 768px)">\n            <source srcset=${p} media="(min-width: 320px)">\n            <img src=${d} alt=${s} class="modal__img">\n            <div class="trailer__btn" data-id="${a}">\n            <p class="trailer__text">watch trailer</p>\n            </div>\n        </picture>\n      </div>\n      <div class="modal__content">\n        <p class="modal__title">${s}</p>\n        <div class="modal__box">\n          <div class="film-features">\n            <p class="film-features__text">Vote / Votes</p>\n            <p class="film-features__text">Popularity</p>\n            <p class="film-features__text">Original Title</p>\n            <p class="film-features__text">Genre</p>\n          </div>\n          <div class="film-values">\n            <p class="film-values__text">\n              <span class="film-values__vote film-values__vote--color">${_}</span>\n              <span class="film-values__slash">/</span>\n              <span class="film-values__vote film-values__votes--color">${r}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-value__vote">${c.toFixed(1)}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${n}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${o}</span>\n            </p>\n          </div>\n        </div>\n        <div class="modal__description">\n          <p class="modal__about">About</p>\n          <p class="modal__text">${l}</p>\n        </div>\n        <div class="modal__btn-box" data-id="${a}">\n          <button class="modal__btn modal__btn--watched" type="button">Add to watched</button>\n          <button class="modal__btn modal__btn--queue" type="button">Add to queue</button>\n        </div>\n      </div>`;t.insertAdjacentHTML("beforeend",u)}catch(e){console.log(e)}}()}));const s=document.querySelector("main"),n=async e=>{try{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=28f50cf3f177782503c21b43af04c7bc"),a=await t.json(),s=await a.genres;if(e){const t=((e,t)=>e.filter((e=>t.includes(e.id))).map((e=>e.name)))(s,e);return t}}catch(e){console.log(e)}};(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=28f50cf3f177782503c21b43af04c7bc"),t=await e.json();(async e=>{const t=await Promise.all(e.map((async e=>{const t=`https://image.tmdb.org/t/p/original${e.poster_path}`,a=e.title?e.title:e.name,s=e.release_date?e.release_date:e.first_air_date,l=new Date(s).getFullYear(),i=e.genre_ids;return((e,t,a,s)=>`<li class="movie__template">\n    <img class="movie__image" src="${e}" alt='${t}' width="280px" height="398px"/> \n    <h5 class="movie__title">${t}</h5>\n    <div class="movie__informations"><span>${a.slice(0,2).join(", ")}</span> | <span>${s}</span></div>\n  </li>`)(t,a,await n(i),l)})));s.innerHTML=t.join("")})(await t.results)}catch(e){console.log(e)}})();
//# sourceMappingURL=index.ad590ff5.js.map