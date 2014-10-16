(function() {
  var $subNav = $('.js-sub-nav');
  var $subNavTrigger = $('.js-sub-nav-trigger');


  // Hide the subNav container initially
  $subNav.css({
  'display' : 'none'
  });

  //Show subNav when subNavTrigger is hovered
  $subNavTrigger.hover(function() {
    $subNav.slideDown('fast');
  }, function() {
    $subNav.slideUp('fast');
  });
})();