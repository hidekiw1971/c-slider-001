
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // slick slider
  $(document).ready(function () {
    $('.your-class').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });

});
