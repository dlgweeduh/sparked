
$(document).ready(function() {
	// $('body').scrollspy({ target: '.sp-categories' });
       
       /* activate scrollspy menu */
         var $body   = $(document.body);
         var navHeight = $('.navbar').outerHeight(true) + 10;

         $body.scrollspy({
           target: '.sp-categories',
           offset: navHeight
         });	
    
    $("#secondNav").affix({
        offset: { 
            top: 600,
		    bottom: function () {
		      return (this.bottom = $('.global-footer').outerHeight(true))
		    }             
     	}
    });
});