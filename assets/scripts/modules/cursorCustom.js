export default function cursorCustomInit() {
  const cursor = document.querySelector('[custom-cursor]');
  const links = document.querySelectorAll('a, button');

  if (links && cursor) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('is-click');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('is-click');
    });

    links.forEach((item) => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('is-hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hover');
      });
    });
  }
}
