
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 1){
            $('.navbar-inverse').css({ "background-color": "rgba(255, 255, 255, 0.9)",
      "transition": ".5s"});
        } else if ($(window).scrollTop() < 1){
            $('.navbar-inverse').css({"background-color":"rgba(255, 255, 255, 0	)"});
        }
    });
});