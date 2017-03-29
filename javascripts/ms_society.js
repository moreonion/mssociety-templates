$(document).ready(function(){

// ---------- identify page type ------------------------------------

  // if it has a submit button, it's an action
  if ($('.eaSubmitButton').length > 0) {
    $('#page').addClass('action');
  } else {
    $('#page').addClass('not-action');
  }

// ---------- fancy forms -------------------------------------------

  // enable Picker and Selector
  // see http://www.benplum.com/formstone/
  if (typeof $.fn.selecter == 'function') {
    $('select').selecter();
    // fix for selecter not working on Android 6+ and Android Chrome 50+
    if (navigator.userAgent.match(/Android (\d+)\./i)) {
      $('.selecter').css('pointer-events', 'none');
    }
  }
  if (typeof $.fn.picker == 'function') {
    $('input[type=radio], input[type=checkbox]').picker();
  }

  // add a class for picker label height
  $('.picker-label').each(function(){
    var $label = $(this);
    var oneline = parseInt($label.css('line-height'), 10);
    if ($label.height() > oneline){
      $label.parent().addClass('multiline');
    } else {
      $label.parent().addClass('oneline');
    }
  });

// ---------- validations -------------------------------------------

  // move error message below the label
  $('.eaErrorMessage').each(function() {
    var $self = $(this);
    var $field = $self.siblings('.eaFormField');
    $self.appendTo($field);
  });

  // add class to field, where error occured
  $(window).on('DOMSubtreeModified', '.eaErrorMessage', function(e) {
    var $self = $(e.target);
    if (!$self.is(':empty')) {
      $self.parent().not('form').addClass('validationError');
    } else {
      $self.parent().not('form').removeClass('validationError');
    }
  });

  // remove #eaerrors if empty
  $(window).on('DOMSubtreeModified', '#eaerrors', function(e) {
    var $self = $(e.target);
    if ($self.text().trim() == "") {
      $self.hide();
    } else {
      $self.show();
    }
  });

// ---------- equal height panels -----------------------------------

  $('.panels').each(function() {
    var contents = $('.panel-content', this);
    var contentHeights = contents.map(function() {
      return $(this).height();
    }).get();
    var maxHeight = Math.max.apply(null, contentHeights);
    contents.height(maxHeight);
  });

});
