// Allows side bar to stick after scrolling past hero

$(function () {
    var sidebar = $('.sidebar.main');
    var top = 302;
  
    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top) {
        sidebar.addClass('fixed');
      } else {
        sidebar.removeClass('fixed');
      }
    });
});