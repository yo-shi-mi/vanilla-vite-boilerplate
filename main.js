import './style.css'
import { renderHome } from './pages/home.js'
import { renderRestaurant } from './pages/restaurant.js'
import { renderPointsSystem } from './pages/pointsSystem.js'
import { renderHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'
import { connectWallet } from './utils/ethers.js'

// 路由函數
function router() {
  const path = window.location.hash.slice(1) || '/'
  const app = document.querySelector('#app')
  app.innerHTML = ''
  app.appendChild(renderHeader())

  switch (path) {
    case '/':
      app.appendChild(renderHome())
      break
    case '/restaurant':
      app.appendChild(renderRestaurant())
      break
    case '/points':
      app.appendChild(renderPointsSystem())
      break
    default:
      app.appendChild(renderHome())
  }

  app.appendChild(renderFooter())
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

// Connect Wallet 按鈕事件
document.addEventListener('click', async (e) => {
  if (e.target.id === 'connectWallet') {
    await connectWallet()
  }
})