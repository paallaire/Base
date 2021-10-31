export default function modalInit() {
  /* variables
  -------------------------------------------- */
  const elHtml = document.querySelector('html');
  const elModals = document.querySelectorAll('[modal]');
  const elButtonsTrigger = document.querySelectorAll('[modal-trigger]');
  const elButtonsClose = document.querySelectorAll('[modal-close]');

  let elModalActive = null;
  let elModalOverlay = null;
  let awaitAnimation = false;

  /* function
  -------------------------------------------- */
  function hideModals() {
    elModalActive = null;
    elModalOverlay = null;

    elModals.forEach((el, index) => {
      el.classList.remove('is-active');
      el.classList.remove('animation-in');
      el.classList.remove('animation-out');
    });
  }

  /* init
  -------------------------------------------- */
  elButtonsTrigger.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const id = el.getAttribute('href');

      if (!awaitAnimation) {
        hideModals();
        elModalActive = document.querySelector(`#${id}`);
        elModalOverlay = elModalActive.querySelector('[modal-overlay]');
        elModalActive.classList.add('is-active');
        elHtml.classList.add('no-scroll');

        setTimeout(() => {
          elModalActive.classList.add('animation-in');
        }, 1);
      }
    });
  });

  elButtonsClose.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      elModalActive.classList.add('animation-out');

      // const animationOut = (e) => {
      //   console.log('e:', e);
      //   if (e.propertyName === 'background-color') {
      //     console.log('animationOut:', e.propertyName);
      //   }
      //   elModalOverlay.removeEventListener('transitionend', animationOut);
      // };
      // elModalOverlay.addEventListener('transitionend', animationOut, false);

      setTimeout(() => {
        elHtml.classList.remove('no-scroll');
        awaitAnimation = false;
        hideModals();
      }, 200);
    });
  });
}
