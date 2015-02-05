$(function(){
    var windowH = $(window).height();
    var wrapperH = $('#heroLanding, #heroLanding2, #videoLanding').height();
    if(windowH > wrapperH) {                            
        $('#heroLanding, #heroLanding2').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#heroLanding, #heroLanding2, #videoLanding').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#heroContent, #heroContent2, #videoOverlay').height();
        if(windowH > truecontentH) {
            $('#heroLanding, #heroLanding2, #videoLanding').css('height', (newH)+'px');
        }

    })          
});