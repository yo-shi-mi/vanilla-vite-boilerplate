export function renderRestaurant(restaurantId) {
  const restaurant = document.createElement('main');
  restaurant.className = 'container mx-auto mt-8 p-4';
  restaurant.innerHTML = `
    <h2 class="text-3xl font-bold mb-4">餐廳 ${restaurantId}</h2>
    <div class="bg-white rounded shadow p-4">
      <p class="mb-2"><strong>電話:</strong> 02-1234-5678</p>
      <p class="mb-2"><strong>地址:</strong> 台北市中山區某某路123號</p>
      <p class="mb-4"><strong>收款地址:</strong> 0x1234567890123456789012345678901234567890</p>
      <button id="reserveButton" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">訂位</button>
    </div>
  `;

  // 添加訂位按鈕事件監聽器
  restaurant.querySelector('#reserveButton').addEventListener('click', () => {
    alert(`訂位功能即將推出！您選擇的是餐廳 ${restaurantId}`);
  });

  return restaurant;
}