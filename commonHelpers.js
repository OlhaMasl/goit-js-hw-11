import{i as a,S as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(s){const t="https://pixabay.com/api/",i=new URLSearchParams({key:"44175517-753270956c641713e32eb091d",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${t}?${i}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function d(s){return s.map(t=>`<li class="gallery-item">
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
</li>`).join("")}const m=document.querySelector(".form"),f=document.querySelector(".gallary"),n=document.querySelector(".loader");m.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value.trim();t!==""&&(s.target.reset(),n.classList.remove("is-hiding"),u(t).then(i=>{i.total===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});const o=d(i.hits);f.innerHTML=o,new c(".gallary a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).on("show.simplelightbox",function(){refresh()})}).catch(i=>{a.show({message:"Internal server error!",messageColor:"white",backgroundColor:"red",position:"topRight"})}).finally(()=>{n.classList.add("is-hiding")}))});
//# sourceMappingURL=commonHelpers.js.map
