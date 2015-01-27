(function() {
  var $screens = $('.js-screens');
  var $greenButton = $('.js-green-button');
  var $orangeButton = $('.js-orange-button');
  var $redButton = $('.js-red-button');


  $redButton.on('click', {index: 0}, showScreen);
  $orangeButton.on('click', {index: 1}, showScreen);
  $greenButton.on('click', {index: 2}, showScreen);

  // horizontal animated carousel
  function showScreen(h) {
    var targetX = -300 * h.data.index;
    $screens.css('left', targetX);
    return false;
  }

  /* vertical animated carousel
  function showScreen(v) {
    var targetX = -300 * v.data.index;
    $screens.css('left', targetX);
    return false;
  }
  */

})();