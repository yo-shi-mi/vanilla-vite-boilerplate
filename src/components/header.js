export function renderHeader() {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="container header-content">
      <div class="logo">
        <img src="/images/logo.jpg" alt="TeleDine Logo">
        <h1>TeleDine</h1>
      </div>
      ${!window.Telegram?.WebApp ? '<button id="connectWallet" class="connect-wallet">Connect Wallet</button>' : ''}
    </div>
  `
  return header
}