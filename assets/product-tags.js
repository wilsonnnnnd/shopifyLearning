// Simple product-tags behavior: map special tags to classes and tiny animations
const ProductTags = (() => {
  function init() {
    document.querySelectorAll('.product-tags').forEach((container) => {
      container.querySelectorAll('.product-tag').forEach((el) => {
        const tag = el.dataset.tag || '';
        if (!tag) return;

        if (tag.includes('new')) el.classList.add('product-tag--new');
        if (tag.includes('sale') || tag.includes('discount')) el.classList.add('product-tag--sale');
        if (tag.includes('limited') || tag.includes('exclusive')) el.classList.add('product-tag--limited');

        // small accessible animation hint
        if (el.classList.contains('product-tag--new')) {
          el.setAttribute('aria-live', 'polite');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init };
})();

export { ProductTags };
