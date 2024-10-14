import{a as b,S as w,i as c}from"./assets/vendor-CreDjNqS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const S="46403551-b403f9f66c1c3bacc7ad46072",E="https://pixabay.com/api/";async function I(a,s,i){try{return await b.get(E,{params:{key:S,q:a,page:s,per_page:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}catch(o){return o.message}}const q=new w(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt",showCounter:!1});function O(a,s){const i=document.querySelector(".gallery");let o="";if(a.forEach(e=>{const{largeImageURL:t,tags:r,likes:y,views:h,comments:v,downloads:L}=e;o+=`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${t}"
          alt="${r}"
        />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${y}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${h}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${v}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${L}</span>
          </div>
        </div>
      </a>
    </li>`}),s===1&&(i.innerHTML=""),i.insertAdjacentHTML("beforeend",o),s>1){const t=document.querySelector(".gallery-item").getBoundingClientRect(),r=t.bottom-t.top;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}q.refresh()}const m=document.querySelector(".images-form"),$=m.elements.query,l=document.getElementById("js-load-more"),u=document.getElementById("js-bottom-text-msg"),p=document.querySelector(".gallery");let n=1,f=15,d="";c.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});m.addEventListener("submit",a=>{a.preventDefault();const s=$.value.trim();if(s.length<3){c.error({message:"❌ Input at last three symbols!"});return}g(s)});l.addEventListener("click",()=>{g(d)});async function g(a){m.reset(),e(),o(u),n=a!=d?1:n+1,d=a;const s=await I(a,n,f);if(t(),s.status!==200){o(l),p.innerHTML="",c.error({message:`❌ ${s}!`});return}s.data.hits.length>0?(O(s.data.hits,n),n*f>=s.data.totalHits?(o(l),i(u)):i(l)):(o(l),p.innerHTML="",c.error({message:"❌ No results found!"}));function i(r){r.classList.remove("hidden")}function o(r){r.classList.add("hidden")}function e(){document.querySelector(".backdrop-loader").classList.add("visible")}function t(){document.querySelector(".backdrop-loader").classList.remove("visible")}}
//# sourceMappingURL=index.js.map
