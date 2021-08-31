const searchTermsDev = ['local', 'dev', 'stage', 'test'];

const elHtml = document.querySelector('html');
const lang = elHtml.getAttribute('lang') !== null ? elHtml.getAttribute('lang') : 'en';
const isDev = searchTermsDev.some((el) => window.location.href.includes(el));

const screens = {
  xs: 500,
  md: 768,
  ls: 1024,
  lg: 1280,
  xl: 1440,
  '2xl': 1920,
};

export { lang, isDev, screens };
