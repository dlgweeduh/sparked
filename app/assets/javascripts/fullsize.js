$(function(){
    var windowH = $(window).height();
    var wrapperH = $('#heroLanding, #heroLanding2').height();
    if(windowH > wrapperH) {                            
        $('#heroLanding, #heroLanding2').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#heroLanding, #heroLanding2').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#heroContent, #heroContent2').height();
        if(windowH > truecontentH) {
            $('#heroLanding, #heroLanding2').css('height', (newH)+'px');
        }

    })          
});