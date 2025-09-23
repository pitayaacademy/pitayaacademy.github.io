// Small progressive enhancement JS
(function(){
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // Mobile nav toggle (no dependency)
  const btn = document.querySelector('[data-nav-toggle]');
  const list = document.querySelector('[data-nav-list]');
  if(btn && list){
    btn.addEventListener('click',()=>{
      const open = list.getAttribute('data-open') === 'true';
      list.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });
  }
})();
