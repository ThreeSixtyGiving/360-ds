
window.onscroll = function() {sideBar()};

var header = document.getElementById("sidebar");
var scroll = header.offsetTop;

function sideBar() {
  if (window.pageYOffset > scroll) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

