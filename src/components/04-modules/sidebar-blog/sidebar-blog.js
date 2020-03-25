
window.onscroll = function() {sideBar()};

var header = document.getElementById("sidebar");
var scroll = header.offsetTop;

function sideBar() {
  if (window.pageYOffset >= scroll ) {
    header.classList.add("sidebar-section");
  } else {
    header.classList.remove("sidebar-section");
  }
}

