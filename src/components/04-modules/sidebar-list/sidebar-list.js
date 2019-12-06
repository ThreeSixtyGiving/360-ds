document.querySelectorAll('.sidebar-list__trigger').forEach(function(el) {
  el.onclick = function(){
    
    var target = this.parentNode;
    target.classList.toggle('sidebar-list--expanded');
    if (target.hasAttribute('aria-hidden')) {
      target.removeAttribute('aria-hidden')
    } else {
      target.setAttribute('aria-hidden', '')
    }
  };
});