// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// import Swiper styles
import 'swiper/css';

export default function swiperServicesInit() {
  const isSmall = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  const elSlider = document.querySelector('.swiper-services');
  let elSection;
  let swiper = null;

  function init() {
    if (swiper === null) {
      swiper = new Swiper(elSlider, {
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 1.2,
        slidesPerGroupAuto: 'auto',
        allowTouchMove: true,
        navigation: {
          prevEl: elSection.querySelector('.swiper-button-arrow--prev'),
          nextEl: elSection.querySelector('.swiper-button-arrow--next'),
        },
      });
    }
  }

  function check() {
    if (!isSmall.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
      swiper = null;
    } else if (isSmall.matches) {
      init();
    }
  }

  if (elSlider) {
    elSection = elSlider.closest('[data-slider="services"]');

    if (isSmall.matches) {
      init();
    }

    window.addEventListener('resize', () => {
      check();
    });
    check();
  }
}
