export default function () {
  const tabsButtons = document.querySelectorAll('[tabs-button]');
  const tabsSelect = document.querySelector('[tabs-select]');

  /* init
      -------------------------------------------- */
  if (tabsButtons.length > 0) {
    tabsSelect.addEventListener('change', (e) => {
      const { value } = e.target;
      const el = e.currentTarget;
      console.log('el:', el);
      console.log('target', e.target);
      console.log('value', e.target.value);
      updateTab(value, el);
    });

    tabsButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        const el = e.currentTarget;

        if (!el.classList.contains('is-active')) {
          const id = el.dataset.index;
          updateTab(id, el);
        }
      });
    });
  }

  function updateTab(id, el) {
    const elComponent = el.closest('[tabs]');
    const elAllTabsButtons = elComponent.querySelectorAll('[tabs-button]');
    const elAllTabsContent = elComponent.querySelectorAll('[tabs-content]');
    const elButton = elComponent.querySelector(`[data-index="${id}"]`);
    const elTabsContentActive = elComponent.querySelector(`[data-tabs-content-index="${id}"]`);
    const index = id.split('-');

    elAllTabsButtons.forEach((button) => {
      button.classList.remove('is-active');
    });
    elButton.classList.add('is-active');

    elAllTabsContent.forEach((content) => {
      content.classList.remove('is-active');
    });
    elTabsContentActive.classList.add('is-active');

    tabsSelect.selectedIndex = parseInt(index[1], 10);
  }
}
