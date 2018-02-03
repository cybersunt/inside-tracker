 // nav toggle script for mobile version
(function () {
   var navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('nav-toggle--open');
  })
})();

document.querySelector('.main-nav').classList.remove('main-nav--nojs');
