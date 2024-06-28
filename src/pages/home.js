export function renderHome() {
    const home = document.createElement('main')
    home.className = 'container'
    home.innerHTML = `
      <div class="points-system">Points System</div>
      <h2>Choose The Restaurant !</h2>
      <div class="restaurant-grid">
        <button class="restaurant-button">餐廳 A</button>
        <button class="restaurant-button">餐廳 B</button>
        <button class="restaurant-button">餐廳 C</button>
        <button class="restaurant-button">餐廳 D</button>
      </div>
    `
    return home
}