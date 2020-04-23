// Feel free to check the slick slider docs to customize
// your carousel. https://kenwheeler.github.io/slick/
$('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function customDots(slider, i){
        return '<a class="dot" role="button"</a>';
    }
});
