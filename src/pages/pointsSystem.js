export function renderPointsSystem() {
  const pointsSystem = document.createElement('main');
  pointsSystem.className = 'container mx-auto mt-8 p-4';
  pointsSystem.innerHTML = `
    <h2 class="text-3xl font-bold mb-4">Points System</h2>
    <p>Points System 功能即將推出，敬請期待！</p>
  `;
  return pointsSystem;
}