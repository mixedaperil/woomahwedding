$(document).ready(function(){
	// When document is ready, fade in webpage
    $('.fade').hide(0).delay(500).fadeIn(3000)

    // Show modal when entry point is clicked
    $('.donation').click(function() {
    	$('.overlay').removeClass('hide').addClass('show');
    	$('.modal').addClass('show');
    });

    // Close modal when exit points are clicked, reset to begin screen
    $('.exit').click(function() {
    	$('.overlay').removeClass('show').addClass('hide');
    	$('.begin').removeClass('hide').addClass('show');
    	$('.canadian').removeClass('show').addClass('hide');
    	$('.global').removeClass('show').addClass('hide');
    });

    // Close modal when clicked outside
    $('.overlay').click(function(){
	     $('.overlay, .modal').removeClass('show').addClass('hide');
	})                                            
	$('.modal').click(function(e){
	   e.stopPropagation();
	})   

    // When Canada selection is made, show Canadian content
    $('.where-from .canada').click(function() {
    	$('.begin').removeClass('show').addClass('hide');
    	$('.canadian').removeClass('hide').addClass('show');
    });

    // When International selection is made, show International content
    $('.where-from .international').click(function() {
    	$('.begin').removeClass('show').addClass('hide');
    	$('.global').removeClass('hide').addClass('show');
    });

    
});