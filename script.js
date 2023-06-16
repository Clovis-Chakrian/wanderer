const productsElements = document.querySelectorAll('.product-card');

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle("open");
};

for (product in productsElements) {
  productsElements[product].addEventListener('click', () => {
    window.location.href = ''
  })
}