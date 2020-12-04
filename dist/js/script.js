'use strict';

function carousel(wrapperSelector, innerSelector, allSlidesSelector, nextArrow, prevArrow, allDotsSelector) {
    const carouselWrapper = document.querySelector(wrapperSelector),
      inner = document.querySelector(innerSelector),
      slides = document.querySelectorAll(allSlidesSelector),
      arrowNext = document.querySelector(nextArrow),
      arrowPrev = document.querySelector(prevArrow),
      dots = document.querySelectorAll(allDotsSelector);

      let slideWidth = 100 / slides.length,
      availableWidth = `${slideWidth * (slides.length - 1)}`,
      pos = 0;
  
  inner.style.width = `${100 * slides.length}%`;
  
  slides.forEach((item) => {
      item.style.width = `${slideWidth}%`;
  });
  
  arrowNext.addEventListener('click', () => {
      pos += 1;
  
      if (pos > slides.length - 1) {
          pos = 0;
      }
      
      moveToSlide(pos);
  });
  
  arrowPrev.addEventListener('click', () => {
      pos -= 1;
  
      if (pos < 0) {
          pos = slides.length - 1;
      }
  
      moveToSlide(pos);
  });
  
  dots.forEach((item, i) => {
      item.addEventListener('click', () => {
      pos = i;
      moveToSlide(i);
      });
  });
  
  function moveToSlide(index = 1) {
      let coord = index * slideWidth;
      
      dots.forEach((dot, i) => {
          dot.classList.remove('promo__dot_active');
  
          if (i === index) {
              dot.classList.add('promo__dot_active');
          }
      });
      
      inner.style.transform = `translateX(-${coord}%)`;
  };
}

carousel('.promo__carousel', '.promo__carousel-inner', '.promo__offer','.promo__arrow-next','.promo__arrow-prev','.promo__dot');
