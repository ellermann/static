$(function(){

  var modals = function() {
    var modalTrigger = $('.modal-trigger'),
        modalClose = $('.modal-close'),
        body = $('body');

    modalTrigger.bind('click', function(e){
      e.preventDefault();
      var modal = $(this).data('modal'),
          modalID = $('#'+modal);
      $(modalID).fadeIn();
      body.addClass('js-no-scroll');
    });

    modalClose.bind('click', function(e){
      e.preventDefault();
      $(this).closest('.modal').fadeOut();
      body.removeClass('js-no-scroll');
    });
  }

  modals();

});
