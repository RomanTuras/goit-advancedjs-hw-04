import{S as d,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="46403551-b403f9f66c1c3bacc7ad46072",y="https://pixabay.com/api/";function g(o){const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(y+`?${s}`)}const h=new d(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt",showCounter:!1});function v(o){const s=document.querySelector(".gallery");let r="";o.forEach(i=>{const{largeImageURL:e,tags:t,likes:a,views:u,comments:m,downloads:f}=i;r+=`<li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${e}"
          alt="${t}"
        />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${a}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${u}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${m}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${f}</span>
          </div>
        </div>
      </a>
    </li>`}),s.innerHTML=r,h.refresh()}function L(){document.querySelector(".loader").style.display="inline-block"}function c(){document.querySelector(".loader").style.display="none"}n.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});var l=document.querySelector(".images-form");const b=l.elements.query;l.addEventListener("submit",o=>{o.preventDefault();const s=b.value.trim();if(s.length<3){n.error({message:"❌ Input at last three symbols!"});return}w(s)});function w(o){const s=document.querySelector(".gallery");s.innerHTML="",l.reset(),L(),g(o).then(r=>{if(c(),!r.ok)throw new Error(response.status);return r.json()}).then(r=>{r.totalHits>0?v(r.hits):n.error({message:"❌ No results found!"})}).catch(r=>{c(),console.log(r)})}
//# sourceMappingURL=index.js.map
