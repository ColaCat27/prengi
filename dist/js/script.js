'use strict';

const carouselWrapper = document.querySelector('.promo__carousel'),
      inner = document.querySelector('.promo__carousel-inner'),
      slides = document.querySelectorAll('.promo__offer'),
      arrowNext = document.querySelector('.promo__arrow-next'),
      arrowPrev = document.querySelector('.promo__arrow-prev'),
      dots = document.querySelectorAll('.promo__dot');

inner.style.width = `${100 * slides.length}%`;

let slideWidth = 100 / slides.length;
let availableWidth = `${slideWidth * (slides.length - 1)}`;

slides.forEach((item) => {
    item.style.width = `${slideWidth}%`;
});

let pos = 0;

arrowNext.addEventListener('click', () => {
    pos += 1;
    if (pos > slides.length - 1) {
        pos = 0;
    }
    moveToSlide(pos);
})

arrowPrev.addEventListener('click', () => {
    pos -= 1;
    if (pos < 0) {
        pos = slides.length - 1;
    }
    moveToSlide(pos);
})

dots.forEach((item, i) => {
    item.addEventListener('click', () => {
    console.log(`Нажал на точку и вот её номер ${i}`)
    pos = i;
    moveToSlide(i);
    })
})


function moveToSlide(index = 1) {
    let coord = index * slideWidth;
    console.log(`index внутри функции равен ${index}`)
    dots.forEach((dot, i) => {
        dot.classList.remove('promo__dot_active');
        if (i === index) {
            dot.classList.add('promo__dot_active');
            console.log(`Номер точки внутри функции равен ${i}`);
        }
    })
    
    inner.style.transform = `translateX(-${coord}%)`;
}