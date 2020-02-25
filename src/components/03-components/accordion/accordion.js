document.querySelectorAll('.accordion__trigger').forEach(function(el) {

  el.onclick = function(){
    const wrapper_element = document.querySelector('.accordion');
    const target_element = document.querySelector('.accordion__extra');
    wrapper_element.classList.toggle('accordion--expanded');
    if (target_element.hasAttribute('aria-hidden')) {
      target_element.removeAttribute('aria-hidden')
    } else {
      target_element.setAttribute('aria-hidden', '')
    }
  };
});

// This JS code isn't working properly, now that we are using multiple .accordions 
// together. I found this tutorial that should help us here. 
// https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
// We need the equivalent of the parent() function from JQuery. 
