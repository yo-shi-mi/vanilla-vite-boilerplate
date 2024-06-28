import './style.css'
import '../public/styles.css'
import { renderHome } from './pages/home.js'
import { renderRestaurant } from './pages/restaurant.js'
import { renderHeader } from './components/header.js'
import { connectWallet } from './utils/ethers.js'
import { renderPointsSystem } from './pages/pointsSystem.js'

// Check if running in Telegram Web App
const isTWA = window.Telegram && window.Telegram.WebApp;

// Initialize TWA if available
if (isTWA) {
    Telegram.WebApp.ready();

    // Event for theme changes
    Telegram.WebApp.onEvent('themeChanged', function () {
    document.documentElement.className = Telegram.WebApp.colorScheme;
      document.body.setAttribute('style', '--bg-color:' + Telegram.WebApp.backgroundColor);
  });

    // Set up Main Button
    Telegram.WebApp.MainButton.setParams({
        text: 'Connect Wallet'
  });

    Telegram.WebApp.MainButton.onClick(function () {
        connectWallet();
  });

    Telegram.WebApp.MainButton.show();

    // Set header color
    Telegram.WebApp.setHeaderColor('secondary_bg_color');

    // Handle viewport changes
    function setViewportData() {
        console.log('Viewport size:', window.innerWidth, 'x', Telegram.WebApp.viewportStableHeight);
        console.log('Is Expanded:', Telegram.WebApp.isExpanded ? 'true' : 'false');
    }

    setViewportData();
    Telegram.WebApp.onEvent('viewportChanged', setViewportData);
}

// Router function
function router() {
    const path = window.location.hash.slice(1) || '/'
    console.log('Current path:', path);  // 调试日志
    const app = document.querySelector('#app')
    app.innerHTML = ''

    app.appendChild(renderHeader())

    if (path === '/') {
        console.log('Rendering home page');
        app.appendChild(renderHome())
    } else if (path.startsWith('/restaurant/')) {
        const restaurant = path.split('/')[2]  // 获取餐厅标识符
        console.log(`Rendering restaurant page for ${restaurant}`);
        app.appendChild(renderRestaurant(restaurant))
    } else if (path === '/points') {
        console.log('Rendering points system page');
        app.appendChild(renderPointsSystem())
    } else {
        console.log('Rendering default (home) page');
        app.appendChild(renderHome())
    }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

// Event listener for wallet connection
document.addEventListener('click', async (e) => {
    if (e.target.id === 'connectWallet') {
        await connectWallet()
    }
})

// Function to show popup (for TWA)
function showPopup() {
    if (isTWA) {
    Telegram.WebApp.showPopup({
        title: 'TeleDine',
        message: 'Welcome to TeleDine!',
        buttons: [
          { id: 'explore', type: 'default', text: 'Explore Restaurants' },
          { type: 'cancel' },
      ]
    }, function(btn) {
        if (btn === 'explore') {
            router();
        }
    });
  }
}

// Expose necessary functions to global scope
window.showPopup = showPopup;
window.connectWallet = connectWallet;
document.addEventListener('DOMContentLoaded', router);