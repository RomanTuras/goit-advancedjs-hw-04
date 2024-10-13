import{a as L,S as b,i as l}from"./assets/vendor-CreDjNqS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const w="46403551-b403f9f66c1c3bacc7ad46072",S="https://pixabay.com/api/";async function I(o,s,a){try{return await L.get(S,{params:{key:w,q:o,page:s,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}catch(r){return r.message}}const q=new b(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt",showCounter:!1});function M(o,s){const a=document.querySelector(".gallery");let r="";if(o.forEach(e=>{const{largeImageURL:t,tags:i,likes:g,views:y,comments:h,downloads:v}=e;r+=`<li class="gallery-item">
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
    </li>`}),s===1&&(a.innerHTML=""),a.insertAdjacentHTML("beforeend",r),s>1){const t=document.querySelector(".gallery-item").getBoundingClientRect(),i=t.bottom-t.top;window.scrollBy({top:i*2,left:0,behavior:"smooth"})}q.refresh()}const u=document.querySelector(".images-form"),O=u.elements.query,c=document.getElementById("js-load-more"),m=document.querySelector(".gallery");let n=1,p=15,d="";l.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});u.addEventListener("submit",o=>{o.preventDefault();const s=O.value.trim();if(s.length<3){l.error({message:"❌ Input at last three symbols!"});return}f(s)});c.addEventListener("click",()=>{f(d)});async function f(o){u.reset(),e(),n=o!=d?1:n+1,d=o;const s=await I(o,n,p);if(t(),s.status!==200){r(),m.innerHTML="",l.error({message:`❌ ${s}!`});return}s.data.hits.length>0?(M(s.data.hits,n),n*p>=s.data.totalHits?r():a()):(r(),m.innerHTML="",l.error({message:"❌ No results found!"}));function a(){c.classList.remove("hidden")}function r(){c.classList.add("hidden")}function e(){document.querySelector(".backdrop-loader").classList.add("visible")}function t(){document.querySelector(".backdrop-loader").classList.remove("visible")}}
//# sourceMappingURL=index.js.map
