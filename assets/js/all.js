"use strict";

var mobileBtn = document.querySelector('.mobileMenu');
var headerNav = document.querySelector('.header .nav');
mobileBtn.addEventListener('click', function () {
  mobileBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
}); // jQuery with CDN

$(document).ready(function () {
  if ($('.tabMenu a').length > 0) {
    initTabMenu();
  }
});

function initTabMenu() {
  $('.tabMenu a').on('click', function () {
    var attr = $(this).data('tab');

    if ($(this).parent('li').siblings().children('a').hasClass('active')) {
      $(this).parent('li').siblings().children('a').removeClass('active');
      $(this).addClass('active');
      $('.tabContent').removeClass('active');
      $('#' + attr).addClass('active');
    }
  });
}
//# sourceMappingURL=all.js.map
