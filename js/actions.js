// Mobile slide-push nav.
$(function () {
  var nav = $('#mobile-menu');
  var menu = $('#mobile-nav');
  var wrapper = $('#wrapper');

  nav.click(function () {
    if (!menu.hasClass("active")) {
      menu.addClass("active");
      wrapper.addClass("active");
    } else {
      menu.removeClass("active");
      wrapper.removeClass("active");
    }
  });

});