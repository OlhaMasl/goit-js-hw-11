import{i as a,S as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function u(r){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"44175517-753270956c641713e32eb091d",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${t}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function d(r){return r.map(t=>`<li class="gallery-item">
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
</li>`).join("")}const m=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader");m.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements.search.value.trim();t!==""&&(r.target.reset(),n.classList.remove("is-hiding"),u(t).then(s=>{s.total===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});const o=d(s.hits);f.innerHTML=o,new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).on("show.simplelightbox",function(){})}).catch(s=>{a.show({message:"Internal server error!",messageColor:"white",backgroundColor:"red",position:"topRight"})}).finally(()=>{n.classList.add("is-hiding")}))});
//# sourceMappingURL=commonHelpers.js.map
