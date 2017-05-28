$(document).ready(function(){
	// When document is ready, fade in webpage
    $('.fade').hide(0).delay(200).fadeIn(3500)


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


    // Slide in mobile navigation
    $(".mobile-nav").click(function () {
      $(".mobile-nav i").removeClass('ion-navicon').addClass('ion-ios-close-empty');
      $(".mobile-nav-menu").show( "slide" );

      /*if ($(".mobile-nav-menu").is(':visible')) {
        $(".mobile-nav i").removeClass('ion-navicon').addClass('ion-ios-close-empty');
        $(".mobile-nav-menu").show( "slide" );
      } */
    });


    // Close mobile navigation when clicked outside of container
    $(document).mouseup(function(e) 
    {
      var container = $(".mobile-nav-menu");
      // If the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide( "slide" );
        $(".mobile-nav i").addClass('ion-navicon').removeClass('ion-ios-close-empty');
      }
    });


    // Close mobile navigation when a menu item is clicked
    $(".mobile-nav-menu li a").click(function() {
      $(".mobile-nav-menu").hide( "slide" );
      $(".mobile-nav i").addClass('ion-navicon').removeClass('ion-ios-close-empty');
    });


    // Fade in desktop navigation bar when scrolled to a point
    window.addEventListener("scroll", function() {
      if (window.scrollY > 720) {
        $('#menu').addClass('fixed-nav').fadeIn();
      }
      else {
        $('#menu').removeClass('fixed-nav');
      }
    });


});