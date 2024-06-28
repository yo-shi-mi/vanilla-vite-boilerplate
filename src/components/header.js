export function renderHeader() {
  const isTWA = window.Telegram && window.Telegram.WebApp;
  console.log('renderHeader - isTWA:', isTWA);  // 添加這行用於調試

  const header = document.createElement('header')
  header.innerHTML = `
    <div class="container header-content">
      <a href="#/" class="logo">
        <img src="./images/logo.png" alt="TeleDine Logo">
        <h1>TeleDine</h1>
      </a>
      ${!window.Telegram?.WebApp ? '<button id="connectWallet" class="connect-wallet">Connect Wallet</button>' : ''}
    </div>
  `

  // 為標誌添加點擊事件
  const logo = header.querySelector('.logo')
  logo.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.hash = '/'
  })

  return header
}