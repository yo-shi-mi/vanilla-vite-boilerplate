(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function d(){const e=document.createElement("main");return e.className="container",e.innerHTML=`
      <div class="points-system">Points System</div>
      <h2>Choose The Restaurant !</h2>
      <div class="restaurant-grid">
        <button class="restaurant-button">餐廳 A</button>
        <button class="restaurant-button">餐廳 B</button>
        <button class="restaurant-button">餐廳 C</button>
        <button class="restaurant-button">餐廳 D</button>
      </div>
    `,e}function u(){const e=document.createElement("main");return e.className="container",e.innerHTML=`
      <h2>Restaurant Details</h2>
      <p>Coming soon...</p>
    `,e}function p(){var n;const e=document.createElement("header");return e.innerHTML=`
      <div class="container header-content">
        <div class="logo">
          <img src="/images/logo.png" alt="TeleDine Logo">
          <h1>TeleDine</h1>
        </div>
        ${(n=window.Telegram)!=null&&n.WebApp?"":'<button id="connectWallet" class="connect-wallet">Connect Wallet</button>'}
      </div>
    `,e}async function s(){if(typeof window.ethereum<"u")try{await window.ethereum.request({method:"eth_requestAccounts"});const r=await new(void 0).Web3Provider(window.ethereum).getSigner().getAddress();console.log("Connected address:",r),alert(`Wallet connected: ${r}`)}catch(e){console.error("Failed to connect wallet:",e),alert("Failed to connect wallet. Please try again.")}else console.error("Metamask not detected"),alert("Please install Metamask to use this feature")}const i=window.Telegram&&window.Telegram.WebApp;if(i){let e=function(){console.log("Viewport size:",window.innerWidth,"x",Telegram.WebApp.viewportStableHeight),console.log("Is Expanded:",Telegram.WebApp.isExpanded?"true":"false")};var g=e;Telegram.WebApp.ready(),Telegram.WebApp.onEvent("themeChanged",function(){document.documentElement.className=Telegram.WebApp.colorScheme,document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor)}),Telegram.WebApp.MainButton.setParams({text:"Connect Wallet"}),Telegram.WebApp.MainButton.onClick(function(){s()}),Telegram.WebApp.MainButton.show(),Telegram.WebApp.setHeaderColor("secondary_bg_color"),e(),Telegram.WebApp.onEvent("viewportChanged",e)}function c(){const e=window.location.hash.slice(1)||"/",n=document.querySelector("#app");switch(n.innerHTML="",i||n.appendChild(p()),e){case"/":n.appendChild(d());break;case"/restaurant":n.appendChild(u());break;default:n.appendChild(d())}}window.addEventListener("hashchange",c);window.addEventListener("load",c);document.addEventListener("click",async e=>{e.target.id==="connectWallet"&&await s()});function m(){i&&Telegram.WebApp.showPopup({title:"TeleDine",message:"Welcome to TeleDine!",buttons:[{id:"explore",type:"default",text:"Explore Restaurants"},{type:"cancel"}]},function(e){e==="explore"&&c()})}window.showPopup=m;window.connectWallet=s;
