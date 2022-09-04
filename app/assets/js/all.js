const mobileBtn = document.querySelector('.mobileMenu');
const headerNav = document.querySelector('.header .nav');
const body = document.querySelector('body');
const layout = document.createElement('div');

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
  if(mobileBtn.classList.contains('active')){
    layout.classList.add('layout');
    body.appendChild(layout);
    // body.style.overflowY = 'hidden';
  } else {
    body.removeChild(layout);
    // body.style.overflowY = 'auto';
  }
})

// 

// jQuery with CDN
$(document).ready(() => {
  if ($('.tabMenu a').length > 0) {
    initTabMenu()
  }

  if($('.header nav').hasClass('active')){
    $('.footer').append('<div class="layout"></div>');
  } else {
    $('layout').remove();
  }
})

function initTabMenu() {
  $('.tabMenu a').on('click', function () {
    let attr = $(this).data('tab')
    if ($(this).parent('li').siblings().children('a').hasClass('active')) {
      $(this).parent('li').siblings().children('a').removeClass('active')
      $(this).addClass('active')
      $('.tabContent').removeClass('active')
      $('#' + attr).addClass('active')
    }
  })
}
