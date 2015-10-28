// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
(function($) {
  var identity = 0;
  $.fn.identify = function() {
    return this.each(function() {
      $(this).attr('id', 'identify-'+(identity++));
    });
  };
})(jQuery);
$('fieldset.boxchecks input').live('change', function() {
  var $self = $(this);
  if($self.attr('checked')) {
    var $label = $self.parent('label').addClass('active')
  
    if($self.attr('type') === 'radio') {
      $label.siblings('label').removeClass('active')
    }
  } else {
    $self.parent('label').removeClass('active')
  }
});

$(function() {
  $('fieldset.boxchecks label input').each(function() {
    var $this = $(this);
    $this.parent('label').attr('for', $this.identify().attr('id'));
  })
});
