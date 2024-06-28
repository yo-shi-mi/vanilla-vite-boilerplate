(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function c(){const e=document.createElement("main");return e.className="container",e.innerHTML=`
    <div class="points-system">Points System</div>
    <h2>Choose The Restaurant !</h2>
    <div class="restaurant-grid">
      <button class="restaurant-button" data-restaurant="A">餐廳 A</button>
      <button class="restaurant-button" data-restaurant="B">餐廳 B</button>
      <button class="restaurant-button" data-restaurant="C">餐廳 C</button>
      <button class="restaurant-button" data-restaurant="D">餐廳 D</button>
    </div>
  `,e.querySelector(".points-system").addEventListener("click",a=>{a.preventDefault(),window.location.hash="/points"}),e.querySelectorAll(".restaurant-button").forEach(a=>{a.addEventListener("click",n=>{n.preventDefault();const o=n.target.getAttribute("data-restaurant");window.location.hash=`/restaurant/${o}`})}),e}function u(e){const t=document.createElement("main");return t.className="container mx-auto mt-8 p-4",t.innerHTML=`
    <h2 class="text-3xl font-bold mb-4">餐廳 ${e}</h2>
    <div class="bg-white rounded shadow p-4">
      <p class="mb-2"><strong>電話:</strong> 02-1234-5678</p>
      <p class="mb-2"><strong>地址:</strong> 台北市中山區某某路123號</p>
      <p class="mb-4"><strong>收款地址:</strong> 0x1234567890123456789012345678901234567890</p>
      <button id="reserveButton" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">訂位</button>
    </div>
  `,t.querySelector("#reserveButton").addEventListener("click",()=>{alert(`訂位功能即將推出！您選擇的是餐廳 ${e}`)}),t}function p(){const e=window.Telegram&&window.Telegram.WebApp;console.log("renderHeader - isTWA:",e);const t=document.createElement("header");return t.innerHTML=`
    <div class="container header-content">
      <div class="logo-container">
        <a href="#/" class="logo-link">
          <img src="./images/logo.jpg" alt="TeleDine Logo" class="logo-image">
        </a>
        <h1>TeleDine</h1>
      </div>
      ${e?"":'<button id="connectWallet" class="connect-wallet">Connect Wallet</button>'}
    </div>
  `,t.querySelector(".logo-link").addEventListener("click",a=>{a.preventDefault(),window.location.hash="/"}),t}async function l(){if(typeof window.ethereum<"u")try{await window.ethereum.request({method:"eth_requestAccounts"});const r=await new(void 0).Web3Provider(window.ethereum).getSigner().getAddress();console.log("Connected address:",r),alert(`Wallet connected: ${r}`)}catch(e){console.error("Failed to connect wallet:",e),alert("Failed to connect wallet. Please try again.")}else console.error("Metamask not detected"),alert("Please install Metamask to use this feature")}function m(){const e=document.createElement("main");return e.className="container mx-auto mt-8 p-4",e.innerHTML=`
    <h2 class="text-3xl font-bold mb-4">Points System</h2>
    <p>Points System 功能即將推出，敬請期待！</p>
  `,e}const d=window.Telegram&&window.Telegram.WebApp;if(d){let e=function(){console.log("Viewport size:",window.innerWidth,"x",Telegram.WebApp.viewportStableHeight),console.log("Is Expanded:",Telegram.WebApp.isExpanded?"true":"false")};var h=e;Telegram.WebApp.ready(),Telegram.WebApp.onEvent("themeChanged",function(){document.documentElement.className=Telegram.WebApp.colorScheme,document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor)}),Telegram.WebApp.MainButton.setParams({text:"Connect Wallet"}),Telegram.WebApp.MainButton.onClick(function(){l()}),Telegram.WebApp.MainButton.show(),Telegram.WebApp.setHeaderColor("secondary_bg_color"),e(),Telegram.WebApp.onEvent("viewportChanged",e)}function s(){const e=window.location.hash.slice(1)||"/";console.log("Current path:",e);const t=document.querySelector("#app");if(t.innerHTML="",t.appendChild(p()),e==="/")console.log("Rendering home page"),t.appendChild(c());else if(e.startsWith("/restaurant/")){const r=e.split("/")[2];console.log(`Rendering restaurant page for ${r}`),t.appendChild(u(r))}else e==="/points"?(console.log("Rendering points system page"),t.appendChild(m())):(console.log("Rendering default (home) page"),t.appendChild(c()))}window.addEventListener("hashchange",s);window.addEventListener("load",s);document.addEventListener("click",async e=>{e.target.id==="connectWallet"&&await l()});function g(){d&&Telegram.WebApp.showPopup({title:"TeleDine",message:"Welcome to TeleDine!",buttons:[{id:"explore",type:"default",text:"Explore Restaurants"},{type:"cancel"}]},function(e){e==="explore"&&s()})}window.showPopup=g;window.connectWallet=l;document.addEventListener("DOMContentLoaded",s);
