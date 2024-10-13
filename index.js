import{a as L,S as b,i as l}from"./assets/vendor-CreDjNqS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const w="46403551-b403f9f66c1c3bacc7ad46072",S="https://pixabay.com/api/";async function I(r,s,a){try{const o=await L.get(S,{params:{key:w,q:r,page:s,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(o),o}catch(o){return o.message}}const q=new b(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt",showCounter:!1});function M(r,s){const a=document.querySelector(".gallery");let o="";if(r.forEach(e=>{const{largeImageURL:t,tags:i,likes:g,views:y,comments:h,downloads:v}=e;o+=`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${t}"
          alt="${i}"
        />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${g}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${y}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${h}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${v}</span>
          </div>
        </div>
      </a>
    </li>`}),s===1&&(a.innerHTML=""),a.insertAdjacentHTML("beforeend",o),s>1){const t=document.querySelector(".gallery-item").getBoundingClientRect(),i=t.bottom-t.top;window.scrollBy({top:i*2,left:0,behavior:"smooth"})}q.refresh()}const u=document.querySelector(".images-form"),O=u.elements.query,c=document.getElementById("js-load-more"),m=document.querySelector(".gallery");let n=1,f=15,d="";l.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});u.addEventListener("submit",r=>{r.preventDefault();const s=O.value.trim();if(s.length<3){l.error({message:"❌ Input at last three symbols!"});return}p(s)});c.addEventListener("click",()=>{p(d)});async function p(r){u.reset(),e(),n=r!=d?1:n+1,d=r;const s=await I(r,n,f);if(t(),s.status!==200){o(),m.innerHTML="",l.error({message:`❌ ${s}!`});return}s.data.hits.length>0?(M(s.data.hits,n),n*f>=s.data.totalHits?o():a()):(o(),m.innerHTML="",l.error({message:"❌ No results found!"}));function a(){c.classList.remove("hidden")}function o(){c.classList.add("hidden")}function e(){document.querySelector(".backdrop-loader").classList.add("visible")}function t(){document.querySelector(".backdrop-loader").classList.remove("visible")}}
//# sourceMappingURL=index.js.map
