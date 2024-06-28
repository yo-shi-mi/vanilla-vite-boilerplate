(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function c(){const e=document.createElement("main");return e.className="container",e.innerHTML=`
    <div class="points-system">Points System</div>
    <h2>Choose The Restaurant !</h2>
    <div class="restaurant-grid">
      <button class="restaurant-button">餐廳 A</button>
      <button class="restaurant-button">餐廳 B</button>
      <button class="restaurant-button">餐廳 C</button>
      <button class="restaurant-button">餐廳 D</button>
    </div>
  `,e}function u(){const e=document.createElement("main");return e.className="container mx-auto mt-8 p-4",e.innerHTML=`
    <h2 class="text-3xl font-bold mb-4">餐廳 A</h2>
    <div class="bg-white rounded shadow p-4">
      <p class="mb-2"><strong>電話:</strong> 02-1234-5678</p>
      <p class="mb-2"><strong>地址:</strong> 台北市中山區某某路123號</p>
      <p class="mb-4"><strong>收款地址:</strong> 0x1234567890123456789012345678901234567890</p>
      <button id="reserveButton" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">訂位</button>
    </div>
  `,e.querySelector("#reserveButton").addEventListener("click",()=>{alert("訂位功能即將推出！")}),e}function p(){const e=window.Telegram&&window.Telegram.WebApp;console.log("renderHeader - isTWA:",e);const n=document.createElement("header");return n.innerHTML=`
    <div class="container header-content">
      <div class="logo">
        <img src="./images/logo.jpg" alt="TeleDine Logo">
        <h1>TeleDine</h1>
      </div>
      ${e?"":'<button id="connectWallet" class="connect-wallet">Connect Wallet</button>'}
    </div>
  `,n}async function i(){if(typeof window.ethereum<"u")try{await window.ethereum.request({method:"eth_requestAccounts"});const r=await new(void 0).Web3Provider(window.ethereum).getSigner().getAddress();console.log("Connected address:",r),alert(`Wallet connected: ${r}`)}catch(e){console.error("Failed to connect wallet:",e),alert("Failed to connect wallet. Please try again.")}else console.error("Metamask not detected"),alert("Please install Metamask to use this feature")}const d=window.Telegram&&window.Telegram.WebApp;if(d){let e=function(){console.log("Viewport size:",window.innerWidth,"x",Telegram.WebApp.viewportStableHeight),console.log("Is Expanded:",Telegram.WebApp.isExpanded?"true":"false")};var g=e;Telegram.WebApp.ready(),Telegram.WebApp.onEvent("themeChanged",function(){document.documentElement.className=Telegram.WebApp.colorScheme,document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor)}),Telegram.WebApp.MainButton.setParams({text:"Connect Wallet"}),Telegram.WebApp.MainButton.onClick(function(){i()}),Telegram.WebApp.MainButton.show(),Telegram.WebApp.setHeaderColor("secondary_bg_color"),e(),Telegram.WebApp.onEvent("viewportChanged",e)}function a(){const e=window.location.hash.slice(1)||"/",n=document.querySelector("#app");switch(n.innerHTML="",n.appendChild(p()),e){case"/":n.appendChild(c());break;case"/restaurant":n.appendChild(u());break;case"/points":n.appendChild(renderPointsSystem());break;default:n.appendChild(c())}}window.addEventListener("hashchange",a);window.addEventListener("load",a);document.addEventListener("click",async e=>{e.target.id==="connectWallet"&&await i()});function m(){d&&Telegram.WebApp.showPopup({title:"TeleDine",message:"Welcome to TeleDine!",buttons:[{id:"explore",type:"default",text:"Explore Restaurants"},{type:"cancel"}]},function(e){e==="explore"&&a()})}window.showPopup=m;window.connectWallet=i;document.addEventListener("DOMContentLoaded",a);
