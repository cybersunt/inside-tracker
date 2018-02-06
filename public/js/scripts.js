 // nav toggle script for mobile version
(function () {
  document.querySelector('.main-nav').classList.remove('main-nav--nojs');
  var navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('nav-toggle--open');
  })
})();


 // slideshow script
(function() {
  var interval = 3000;

  var slideInterval = setInterval(nextSlide, interval);
  var toggleInterval = setInterval(nextToggle, interval);

  var slides = document.querySelectorAll('.slideshow__item');
  var toggles = document.querySelectorAll('.slideshow__toggle');

  var currentSlide = 0;
  var currentToggle = 0;

  slides.forEach(function(item, i) {
    item.className = 'slideshow__item slideshow__item--slide' + (i + 1);
  });

  function nextSlide() {
    slides[currentSlide].classList.remove('slideshow__item--active');
    currentSlide = (currentSlide + 1)%slides.length;
    slides[currentSlide].classList.add('slideshow__item--active');
  }

  function nextToggle() {
    toggles[currentToggle].classList.remove('slideshow__toggle--checked');
    currentToggle = (currentToggle + 1)%toggles.length;
    toggles[currentToggle].classList.add('slideshow__toggle--checked');
  }
 })();

 // carousel script

(function () {
  var carousel = document.querySelector('.carousel');
  var slidesList = carousel.querySelector('.carousel__slides');
  var carouselSlides = carousel.querySelectorAll('.carousel__slide');

  var prevSlide = carousel.querySelector('.carousel__arrow--prev');
  var nextSlide = carousel.querySelector('.carousel__arrow--next');

  var slideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
  var shiftSlide = 1;
  var countSlidesShow = 3;
  var position = 0;

  if (document.documentElement.clientWidth > '960') {
    prevSlide.addEventListener('click', function() {
    position = Math.min(position + slideWidth * shiftSlide, 0);
    slidesList.style.marginLeft = position + 'px';
  });
    nextSlide.addEventListener('click', function() {
      position = Math.max(position - slideWidth, - slideWidth * (carouselSlides.length - countSlidesShow));
      slidesList.style.marginLeft = position + 'px';
    });
  }

  nextSlide.addEventListener('click', showNextSlide);
  prevSlide.addEventListener('click', showPrevSlide);

  function showNextSlide() {
    for (var i = 0; i < carouselSlides.length; i++) {
      if (i === carouselSlides.length - 1) {
        carouselSlides[i].classList.add('carousel__slide--hidden');
        carouselSlides[0].classList.remove('carousel__slide--hidden');
        break;
      } else if (!carouselSlides[i].classList.contains('carousel__slide--hidden')) {
        carouselSlides[i].classList.add('carousel__slide--hidden');
        carouselSlides[i + 1].classList.remove('carousel__slide--hidden');
        break;
      }
    }
  }

  function showPrevSlide() {
    for (var i = carouselSlides.length - 1; i >= 0; i--) {
      if (i === 0) {
        carouselSlides[0].classList.add('carousel__slide--hidden');
        carouselSlides[carouselSlides.length - 1].classList.remove('carousel__slide--hidden');
        break;
      } else if (!carouselSlides[i].classList.contains('carousel__slide--hidden')) {
        carouselSlides[i].classList.add('carousel__slide--hidden');
        carouselSlides[i - 1].classList.remove('carousel__slide--hidden');
        break;
      }
    }
  }
})();








