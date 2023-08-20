(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))b(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&b(f)}).observe(document,{childList:!0,subtree:!0});function u(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function b(s){if(s.ep)return;s.ep=!0;const t=u(s);fetch(s.href,t)}})();const r=document.querySelector("#main-menu"),a=document.querySelector("#sub-menu"),y=r.querySelectorAll("li"),m=document.querySelector("#searchBtn"),p=document.querySelector("#search-item"),h=document.querySelector("#btn-close"),v=[{id:11,type:"PC",title:"Steam",class:"fa-brands fa-steam"},{id:12,type:"PC",title:"Ubisoft Connect",class:"fa-brands fa-dashcube"},{id:13,type:"PC",title:"EA App",class:"fa-solid fa-peace"},{id:14,type:"PC",title:"Battle.net",class:"fa-brands fa-battle-net"},{id:15,type:"PC",title:"Rockstar",class:"fa-brands fa-rockrms"},{id:16,type:"PC",title:"GOG.com",class:"fa-solid fa-hill-rockslide"},{id:17,type:"PC",title:"Microsoft store",class:"fa-brands fa-microsoft"},{id:18,type:"PC",title:"Epic",class:"fa-solid fa-helicopter-symbol"}],g=[{id:11,title:"Station 1",class:"fa-brands fa-steam"},{id:12,title:"Station 2",class:"fa-brands fa-dashcube"},{id:13,title:"Station 3",class:"fa-solid fa-peace"},{id:14,title:"Station 4",class:"fa-brands fa-battle-net"},{id:15,title:"Station 5",class:"fa-brands fa-rockrms"},{id:16,title:"Station 6",class:"fa-solid fa-hill-rockslide"},{id:17,title:"Station 7",class:"fa-brands fa-microsoft"},{id:18,title:"Station 8",class:"fa-solid fa-helicopter-symbol"}],S=[{id:11,title:"Xbox 1",class:"fa-brands fa-steam"},{id:12,title:"Xbox 2",class:"fa-brands fa-dashcube"},{id:13,title:"Xbox 3",class:"fa-solid fa-peace"},{id:14,title:"Xbox 4",class:"fa-brands fa-battle-net"},{id:15,title:"Xbox 5",class:"fa-brands fa-rockrms"},{id:16,title:"Xbox 6",class:"fa-solid fa-hill-rockslide"},{id:17,title:"Xbox 7",class:"fa-brands fa-microsoft"},{id:18,title:"Xbox 8",class:"fa-solid fa-helicopter-symbol"}],x=[{id:11,title:"Nintendo 1",class:"fa-brands fa-steam"},{id:12,title:"Nintendo 2",class:"fa-brands fa-dashcube"},{id:13,title:"Nintendo 3",class:"fa-solid fa-peace"},{id:14,title:"Nintendo 4",class:"fa-brands fa-battle-net"},{id:15,title:"Nintendo 5",class:"fa-brands fa-rockrms"},{id:16,title:"Nintendo 6",class:"fa-solid fa-hill-rockslide"},{id:17,title:"Nintendo 7",class:"fa-brands fa-microsoft"},{id:18,title:"Nintendo 8",class:"fa-solid fa-helicopter-symbol"}];let i=!1,o=!1,n=!1,d=!1;p.style.display="none";document.body.addEventListener("click",function(l){!a.contains(l.target)&&!r.contains(l.target)&&(a.style.display="none",i=!1,o=!1,n=!1,d=!1)});y.forEach(l=>l.addEventListener("click",()=>{const e=l.querySelector("span").textContent;console.log(e),e==="PC"&&!i?(a.style.display="block",c(v),i=!0,o=!1,n=!1,d=!1):e==="Playstation"&&!o?(a.style.display="block",c(g),i=!1,o=!0,n=!1,d=!1):e==="Xbox"&&!n?(a.style.display="block",c(S),i=!1,o=!1,n=!0,d=!1):e==="Nintendo"&&!d?(a.style.display="block",c(x),i=!1,o=!1,n=!1,d=!0):(i=!1,o=!1,n=!1,d=!1,a.style.display="none")}));const c=l=>{a.innerHTML=`<div >
<div class="flex-between bg-dark">
<h5 class='heading-5'>Plantforms</h5>
<button class='btn-2'>view all</button>
</div>
<div class="platform-items">
${l.map(e=>`<div key=${e.id} class="platform">
    <span>
      <i class='${e.class} platform__icon'></i>
    </span>
    <span>${e.title}</span>
  </div>`).join("")}
</div>
<div class="flex-between bg-dark">
<h5 class='heading-5'>Prepaid cards</h5>
<button class='btn-2'>view all</button>
</div>
<div class='prepaidcard-items'>
<div class="prepaidcard">
<i class="fa-brands fa-steam"></i>
<span>
Steam gift cards
</span>
</div>
<div class="prepaidcard">
<i class="fa-solid fa-signal"></i>
<span>
IG gift cards
</span>
</div>
<div class="prepaidcard">
<i class="fa-solid fa-dragon"></i>
<span>
Blizzard gift cards
</span>
</div>
</div>
</div>`};h.addEventListener("click",()=>{p.style.display="none",r.style.display="block"});m.addEventListener("click",()=>{a.style.display="none",r.style.display="none",p.style.display="flex"});
