$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
      $('.page-up').fadeIn();
    } else {
      $('.page-up').fadeOut();
    }
  });
  // $("a[href=#up]").click(function () {
  //   var _href = $(this).attr("href");
  //   $("html, body").animate({
  //     scrollTop: $(_href).offset().top + "px"
  //   }, 1500);
  //   return false;
  // });
});