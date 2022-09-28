//---Swiper

const swiper = new Swiper('.swiper', {
  spaceBetween: 32,
  slidesPreView: 2,
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    996: {
      slidesPreView: 3,
    }
  } 
});

