export default function svgHomeHeroInit() {
  const svgCircles = document.querySelectorAll('.svg-circle-follow');

  svgCircles.forEach((element) => {
    const animateMotion = element.querySelector('animateMotion');
    const begin = animateMotion.getAttribute('begin');

    if (begin) {
      const duration = parseInt(begin, 10) * 1000;

      setTimeout(() => {
        element.classList.add('is-active');
      }, duration);
    } else {
      element.classList.add('is-active');
    }
  });
}
