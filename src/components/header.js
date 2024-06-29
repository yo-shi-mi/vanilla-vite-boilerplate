export function renderHeader(isTWA) {
  // const isTWA = !!(window.Telegram && window.Telegram.WebApp);
  console.log('renderHeader - isTWA:', isTWA, typeof isTWA);  // 增強調試日誌

  const header = document.createElement('header')
  header.innerHTML = `
    <div class="container header-content">
      <div class="logo-container">
        <a href="#/" class="logo-link">
          <img src="./images/logo.jpg" alt="TeleDine Logo" class="logo-image">
        </a>
        <h1>TeleDine</h1>
      </div>
      ${!isTWA ? '<button id="connectWallet" class="connect-wallet">Connect Wallet</button>' : ''}
    </div>
  `

  // 為 logo 圖片添加點擊事件
  const logoLink = header.querySelector('.logo-link')
  logoLink.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.hash = '/'
  })

  // 額外檢查按鈕是否正確渲染
  const connectWalletBtn = header.querySelector('#connectWallet');
  console.log('Connect Wallet button rendered:', !!connectWalletBtn);

  return header
}