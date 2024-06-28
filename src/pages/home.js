export function renderHome() {
  const home = document.createElement('main')
  home.className = 'container'
  home.innerHTML = `
    <div class="points-system">Points System</div>
    <h2>Choose The Restaurant !</h2>
    <div class="restaurant-grid">
      <button class="restaurant-button" data-restaurant="A">餐廳 A</button>
      <button class="restaurant-button" data-restaurant="B">餐廳 B</button>
      <button class="restaurant-button" data-restaurant="C">餐廳 C</button>
      <button class="restaurant-button" data-restaurant="D">餐廳 D</button>
    </div>
  `

  // 为 Points System 添加事件监听器
  const pointsSystemButton = home.querySelector('.points-system')
  pointsSystemButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.hash = '/points'
  })

  // 为所有餐厅按钮添加事件监听器
  const restaurantButtons = home.querySelectorAll('.restaurant-button')
  restaurantButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const restaurant = e.target.getAttribute('data-restaurant')
      window.location.hash = `/restaurant/${restaurant}`
    })
  })

  return home
}