export default () => ({
  isOpen: false,
  init() {
    document.addEventListener('navMobile:open', (e) => {
      this.isOpen = true;
    }, false);
  },
  close() {
    this.isOpen = false;
  },
  isVisible() {
    return this.isOpen;
  },
});
