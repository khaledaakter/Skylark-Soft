/*! Main */
$(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
        distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
            $("body").css("padding-top", "30px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });

});



        
