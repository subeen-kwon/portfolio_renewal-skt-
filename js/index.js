//index.js
$(function(){
    $('.ct02 dt').click(function(){
    $('dt').removeClass('opened');
    $(this).addClass('opened');
    });
    
        var $ct01 = $('.ct01'),
        $art = $ct01.find('article'),
        num = 0,
        per = 0;
        leftDeg =180,
        rightDeg =0,
        nowDeg =0;
    //선택된 요소의 갯수에 따라 각각 적용된 함수를 실행
    $art.each(function(i){
        num = $art.eq(i).find('span').text();
        $art.eq(i).find('span').text(0)
        console.log(num); 
        $({percent:0}).animate({percent:num},{
            duration:2000,
            progress:function(){
                per = parseInt(this.percent);
                console.log(per)
                nowDeg = per*360/100;
                //Math.random() 0~1 난수생성
                //Math.min(A,B,C,D) A~D중 가장 낮은 수 선택
                //Matn.max(A,B,C,D) A~D중 가장 큰 수 선택
                rightDeg = Math.min(nowDeg,180);
                leftDeg = Math.max(nowDeg,180);
                $art.eq(i).find('span').text(per);
                $art.eq(i).find('.right li').css({
                    transform:'rotate('+rightDeg+'deg)'
                });
                $art.eq(i).find('.left li').css({
                    transform:'rotate('+leftDeg+'deg)'
                });
            }
        });
    });
});

$(function(){
    var i=0;
    
    $('.btn button').click(toTop);
    function toTop(){
        $('html').animate({scrollTop:0},3000);
    }
});