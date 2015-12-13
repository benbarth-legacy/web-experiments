$(function() {
  $(".form-signin").on('submit', function(event) {
    event.preventDefault();
    animateJs.animate('shake', '#submit-button');
  });
});
