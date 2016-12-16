(function($) {
    'use strict';
    // Menu handler
    $("#navigation .inner-link").click(function(e){
      e.preventDefault();
      var id = $(this).attr('href');
      $("#navigation .inner-link").closest('.menu-item').removeClass('is-open');
      $("body, html").scrollTop($(id).offset().top - $(".header").outerHeight(true));
      $(this).closest('.menu-item').addClass('is-open');
    });

    // Clipboard
    $(".fa-clipboard").click(function(){
      var $this = $(this);
      var clipboard = new Clipboard('.fa-clipboard', {
        text: function(){
          var html = $($this.attr('data-clipboard-target'));
          return html[0].outerHTML;
        }
      });

      $(this).prepend('<p class="clip-done">Copied&nbsp;!</p>');

      setTimeout(function(){
        $(".clip-done").fadeOut(300, function(){
          $(this).remove();
        });
      }, 700);
    });
})($);
