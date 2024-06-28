export function renderHeader() {
  const isTWA = window.Telegram && window.Telegram.WebApp;
  console.log('renderHeader - isTWA:', isTWA);  // 添加這行用於調試

  const header = document.createElement('header');
  header.innerHTML = `
    <div class="container header-content">
      <div class="logo">
        <img src="./images/logo.jpg" alt="TeleDine Logo">
        <h1>TeleDine</h1>
      </div>
      ${!isTWA ? '<button id="connectWallet" class="connect-wallet">Connect Wallet</button>' : ''}
    </div>
  `;
  return header;
}