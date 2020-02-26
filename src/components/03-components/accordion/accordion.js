document.querySelectorAll('.accordion__trigger').forEach(function(el) {

  el.onclick = function(){
    const wrapper_element = el.closest('.accordion');
    const target_element = wrapper_element.querySelector('.accordion__extra');
    wrapper_element.classList.toggle('accordion--expanded');
    if (target_element.hasAttribute('aria-hidden')) {
      target_element.removeAttribute('aria-hidden')
    } else {
      target_element.setAttribute('aria-hidden', '')
    }
  };
});