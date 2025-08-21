let index = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(n) {
  items.forEach(item => item.classList.remove('active'));
  items[n].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % items.length;
  showSlide(index);
}

// Mostra o primeiro ao carregar
showSlide(index);

// Troca a cada 5 segundos
setInterval(nextSlide, 5000);