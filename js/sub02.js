//sub02.js
$(function(){
    var i=0;
    
    $('.btn button').click(toTop);
    function toTop(){
        $('html').animate({scrollTop:0},3000);
    }
        
});