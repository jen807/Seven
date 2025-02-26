$(document).ready(function () {
  $(window).scroll(function () {
    // console.log("스크롤 작동");
    var pageY = $(window).scrollTop();
    // console.log(pageY);

    if (pageY >= 500) {
      $("header").addClass("header_active");
    } else {
      $("header").removeClass("header_active");
    }
  });

  //   scroll event end

  $("header").hover(
    function () {
      $(".lnb").css({
        height: 600,
      });
    },
    function () {
      $(".lnb").css({
        height: 0,
      });
    }
  );
});
