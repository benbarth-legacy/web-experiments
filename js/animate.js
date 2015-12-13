var animateJs = {
  animate: function(animation, selector) {
    $(selector).addClass('animated ' + animation);
    $(selector).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(selector).removeClass('animated ' + animation);
    });
  }
}
