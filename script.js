const productsElements = document.querySelectorAll('.product-card');

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle("open");
};

for (product in productsElements) {
  productsElements[product].addEventListener('click', () => {
    const urlCompleta = window.location.href;
    let urlPartida = urlCompleta.split('pages');
    urlPartida[1] = 'pages/DetailsProduct/detalhsprodutos/detalheprd01.html';
    const novaUrl = `${urlPartida[0]}${urlPartida[1]}`;

    window.location.href = novaUrl;
  })
}