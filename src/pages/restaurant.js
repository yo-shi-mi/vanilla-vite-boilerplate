export function renderRestaurant() {
    const restaurant = document.createElement('main')
    restaurant.className = 'container'
    restaurant.innerHTML = `
      <h2>Restaurant Details</h2>
      <p>Coming soon...</p>
    `
    return restaurant
}