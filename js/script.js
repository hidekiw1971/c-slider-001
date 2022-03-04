jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(document).ready(function () {
    $(".slider").slick({
      autoplay: true,
      arrows: false,
      dots: true,
      // responsiveのbreakpoint設定もある。ここで設定する。
      responsive: [
        // tb size setting
        {
          breakpoint: 769, // 768以内を適用させるので、376で設定しています。
          settings: {
            autoplay: true,
          },
        },
        // px size setting
        {
          breakpoint: 1441,
          settings: {
            autoplay: true,
            vertical: true,
          },
        },
      ],
    });
  });
});
