
$(document).ready(function(){
        $('.navbar-nav li a').css({"text-shadow": "1.5px 1.5px 3px #666"});
    $(window).scroll(function(){
        if ($(window).scrollTop() > 1){
            $('.navbar-inverse').css({ "background-color": "#fff",
      "transition": ".2s","box-shadow":"0px 0px 16px 0px rgba(50,50,50,0.3"});
            $('.navbar-nav li a').css({"font-weight":"300", "color":"#57B7DF", "text-shadow": "none"})
        } else if ($(window).scrollTop() < 1){
            $('.navbar-inverse').css({"background-color":"rgba(255, 255, 255, 0	)"});
            $('.navbar-nav li a').css({"font-weight":"200", "color":"#fff", "text-shadow": "1.5px 1.5px 3px #666"})            
        }
    });
});