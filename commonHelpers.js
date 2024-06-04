import{S as n}from"./assets/vendor-10cb7c31.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function a(s){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"44175517-753270956c641713e32eb091d",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${t}?${o}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function c(s){return s.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
    <ul class="image-info">
    <li class="info-item"><div class="item-text">Likes</div><div class="item-value">${t.likes}</div></li>
    <li class="info-item"><div class="item-text">Views</div><div class="item-value">${t.views}</div></li>
    <li class="info-item"><div class="item-text">Comments</div><div class="item-value">${t.comments}</div></li>
    <li class="info-item"><div class="item-text">Downloads</div><div class="item-value">${t.downloads}</div></li>
    </ul>
  </a>
</li>`).join("")}const u=document.querySelector(".form"),m=document.querySelector(".gallary");u.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value.trim();a(t).then(o=>{console.log(o.hits);const r=c(o.hits);m.innerHTML=r,new n(".gallary a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).on("show.simplelightbox",function(){})})});
//# sourceMappingURL=commonHelpers.js.map
