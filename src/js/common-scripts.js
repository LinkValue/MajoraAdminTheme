(function($) {
    'use strict';
    var $navigationToggler = $('.navigation-toggle');
    var $container = $('#container');
    var $navigation = $('#navigation');

    $navigation.on('click', '[role="toggle-sub-menu"]', toggleSubMenu);
    $navigationToggler.on('click', toggleSidebar);

    function toggleSidebar() {
        $container.toggleClass('navigation-closed');
    }

    function toggleSubMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.menu-item').toggleClass('is-open');
    }

    // Collapsible panels
    $('.panel .collapsible .fa-chevron-up, .panel .collapsible .fa-chevron-down').click(function (e) {
        e.preventDefault();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
        $(this).closest(".panel").children(".panel-body").slideToggle(300);
    });

    $('[data-toggle="tooltip"]').tooltip({ container: "body" });
    $('[data-toggle="popover"]').popover({ container: "body" });

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
