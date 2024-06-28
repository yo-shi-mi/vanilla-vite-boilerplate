export function renderFooter() {
    const footer = document.createElement('footer')
    footer.className = 'bg-gray-800 text-white p-4 mt-8'
    footer.innerHTML = `
      <div class="container mx-auto text-center">
        <p>&copy; 2024 My Food Blog. All rights reserved.</p>
      </div>
    `
    return footer
}