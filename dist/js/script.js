'use strict';

const carouselWrapper = document.querySelector('.promo__carousel'),
      inner = document.querySelector('.promo__carousel-inner'),
      slides = document.querySelectorAll('.promo__offer'),
      arrowNext = document.querySelector('.promo__arrow-next'),
      arrowPrev = document.querySelector('.promo__arrow-prev');

carouselWrapper.style.overflow = 'hidden';
carouselWrapper.style.width = '100%';
inner.style.display = 'flex';
inner.style.width = `${100 * slides.length}%`;

let slideWidth = 100 / slides.length;

let availableWidth = `${slideWidth * (slides.length - 1)}`;
console.log(availableWidth);

slides.forEach((item) => {
    item.style.width = `${slideWidth}%`;
});

let count = 0;

function nextSlide() {
    if (count < +availableWidth) {
        count += +slideWidth;
        inner.style.transform = `translateX(-${count}%)`;
    }
}

function prevSlide () {
    if (count >= +availableWidth) {
        count -= slideWidth;
        inner.style.transform = `translateX(-${count}%)`;
    }
}

arrowNext.addEventListener('click', () => {
    nextSlide();
})

arrowPrev.addEventListener('click', () => {
    prevSlide();
})