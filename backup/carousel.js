const carousel = document.querySelector('.carousel-interno');
const prevBtn = carousel.querySelector('.carousel-prev-interno');
const nextBtn = carousel.querySelector('.carousel-next-interno');
const carouselInner = carousel.querySelector('.carousel-inner-interno');
const carouselItems = carouselInner.querySelectorAll('.carousel-item-interno');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * 100 / carouselItems.length}%)`;
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * 100 / carouselItems.length}%)`;
});
