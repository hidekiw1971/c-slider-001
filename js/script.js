
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


    $(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true
        // responsiveのbreakpoint設定もある。ここで設定する。
      });
    });


});
