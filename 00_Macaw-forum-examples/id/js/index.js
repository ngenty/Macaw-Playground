(function() {


  /*$(function () {
   
  $('a[href^="#"]').click(function(event) {
  var id = $(this).attr("href");
  var offset = 20;
  var target = $(id).offset().top - offset;
   
  $('html, body').animate({scrollTop:target}, 500);
  event.preventDefault();
  });
   
  });*/

  var $root = $('html, body');
  $('a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
})();