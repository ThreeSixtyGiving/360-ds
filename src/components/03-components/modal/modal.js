document.querySelectorAll('.modal__trigger').forEach(function(el) {
  el.onclick = function(){
    const target = el.getAttribute('data-id');
    const modal = document.getElementById(target);
    const body = document.getElementsByTagName('body');


    if (modal.hasAttribute('aria-hidden')) {
      
      modal.removeAttribute('aria-hidden')
      modal.classList.add('modal--shown');
      body[0].classList.add('modal--shown');

    } else {
      modal.setAttribute('aria-hidden', '')
      modal.classList.remove('modal--shown');
      body[0].classList.remove('modal--shown');
    }
  };
});


// Maybe we should move the class toggling to the <body> element,
// and deal with the displays at the CSS level. 
// This will minimize JS intervention in the DOM, and possibilitate the 
// Overflow: hidden; for the <body> without new JS lines