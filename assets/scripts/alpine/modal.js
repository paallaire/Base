export default (id) => ({
  isOpen: false,
  id,
  init() {
    document.addEventListener('modal:open', (e) => {
      if (this.id === e.detail) {
        this.isOpen = true;
        this.$nextTick(() => {
          this.$refs.modalTitle.focus();
        });
      }
    }, false);
  },
  close() {
    this.isOpen = false;
  },
  isVisible() {
    return this.isOpen;
  },
});
