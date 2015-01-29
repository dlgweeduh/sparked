
$(document).ready(function(){
        $('.navbar-nav li a').css({"text-shadow": "1.5px 1.5px 3px #666"});
    $(window).scroll(function(){
        if ($(window).scrollTop() > 1){
            $('.navbar-inverse').css({ "background-color": "rgba(255, 255, 255, 0.9)",
      "transition": ".5s"});
            $('.navbar-nav li a').css({"font-weight":"300", "color":"#57B7DF", "text-shadow": "none"})
        } else if ($(window).scrollTop() < 1){
            $('.navbar-inverse').css({"background-color":"rgba(255, 255, 255, 0	)"});
            $('.navbar-nav li a').css({"font-weight":"200", "color":"#fff", "text-shadow": "1.5px 1.5px 3px #666"})            
        }
    });
});