export default function () {
  const accordions = document.querySelectorAll('[accordion]');
  const hashTag = location.hash;
  let elHash;

  function checkHashTag(el) {
    console.log('el:', el);
    if (el) {
      const button = el.querySelector('[accordion-button]');
      const content = el.querySelector('[accordion-content]');

      el.classList.add('is-active');
      button.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');

      el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
      });
    }
  }

  /* init
    -------------------------------------------- */

  if (hashTag) {
    elHash = document.querySelector(hashTag);
    checkHashTag(elHash);
  }

  accordions.forEach((component) => {
    const button = component.querySelector('[accordion-button]');
    const content = component.querySelector('[accordion-content]');

    if (component.classList.contains('is-active')) {
      button.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }

    button.addEventListener('click', (e) => {
      e.preventDefault();

      if (component.classList.contains('is-active')) {
        component.classList.remove('is-active');
        button.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      } else {
        component.classList.add('is-active');
        button.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    });
  });
}
