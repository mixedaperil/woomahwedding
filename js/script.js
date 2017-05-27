$(document).ready(function(){
	// When document is ready, fade in webpage
    $('.fade').hide(0).delay(500).fadeIn(3000)

    // Smooth scroll to section when link is clicked
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
          }
        }
      });
    });

    // To slide something leftwards into view,
    // with a delay of 1000 msec
    $(".mobile-nav").click(function () {
          $(".mobile-nav-menu").toggle( "slide" );
    });

    // Fade in navigation bar when scrolled to a point
    window.addEventListener("scroll", function() {
        if (window.scrollY > 720) {
            $('#menu').addClass('fixed-nav').fadeIn();
        }
        else {
            $('#menu').removeClass('fixed-nav');
        }
    });


});