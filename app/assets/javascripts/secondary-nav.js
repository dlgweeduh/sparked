
// var ready;
// ready = function() {
//          var $body   = $(document.body);
//          var navHeight = $('.navbar').outerHeight(true) + 10;

//          $body.scrollspy({
//            target: '.sp-categories',
//            offset: navHeight
//          });  
    
//     $("#secondNav").affix({
//         offset: { 
//             top: 600,
//         bottom: function () {
//           return (this.bottom = $('.global-footer').outerHeight(true))
//         }             
//       }
//     });
//     $('#accordion2').collapse({
//       toggle: false
//     })
// });

// $(document).ready(ready);
// $(document).on('page:load', ready);


$(document).ready(function() {
       
       /* activate scrollspy menu */
         var $body   = $(document.body);
         var navHeight = $('.navbar').outerHeight(true) + 10;

         $body.scrollspy({
           target: '.sp-categories, .ha-header',
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
    $("#ha-header").affix({
    })
    $('#accordion2').collapse({
      toggle: false
    })
});