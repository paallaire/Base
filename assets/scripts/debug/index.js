import { isDev } from './helper';

export default function () {
  if (isDev) {
    document.querySelector('body').classList.add('debug', 'debug-screens');

    const websiteGrid = new GridVisualizer({
      numberColumns: 12,
      containerCSsClass: 'container-1100-px',
      rowCssClass: 'flex -mx-2',
      columnsCssClass: 'px-2 w-1/12',
      columnsCssClassCustom: null,
    });
    websiteGrid.init();
  }
}
