(function() {
  var $toggle_icon = $('.js-toggle_icon');
  var $toggleMenu = $('.js-toggle-menu');
  var $navbar = $('.js-navbar');


  // Basic slider
  $(window).load(function() {
    $('.flexslider').flexslider();
  });

  $toggleMenu.click(function(){
    if($toggleMenu.hasClass("active")) {
      $navbar.slideUp("fast");
      $toggleMenu.toggleClass("active");
      $('.toggle-icon').html("menu");
    }
    else {
      $navbar.slideDown("fast");
      $toggleMenu.toggleClass("active");
      $('.toggle-icon').html("close");
    }
  });
  $(window).resize(function(){
    if (window.innerWidth>800) {
      $navbar.attr("style", "");
      $toggleMenu.removeClass("active");
      $('.toggle-icon').html("menu");
    }
  });
})();