// Menu
  $('.top-bar__menu-trigger, .off-canvas-menu__trigger').click(function () {
    const offCanvasMenu = $('.off-canvas-menu')
    offCanvasMenu.toggleClass('off-canvas-menu--expanded')
    if (offCanvasMenu[0].hasAttribute('aria-hidden')) {
      offCanvasMenu.removeAttr('aria-hidden')
    } else {
      offCanvasMenu.attr('aria-hidden', '')
    }
  })