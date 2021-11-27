$(document).ready(function(){

    //개별메누
    $(".gnb>ul>li").mouseover(function(){
        $(this).find(".subMenu").stop().slideDown(400);
    });
    $(".gnb>ul>li").mouseout(function(){
        $(this).find(".subMenu").stop().slideUp(400);
    });

    // 콘텐츠1 다중 슬라이드
    var slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIdx = 0,
        slideCount = slide.length,
        prevBtn = document.querySelector('.prev'),
        slideWidth = 284,
        slideMargin = 21,
        nextBtn = document.querySelector('.next');

        slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

        function moveSlide(num){
            slides.style.left = -num * 305 + 'px';
            currentIdx = num;
        }
        nextBtn.addEventListener('click', function(){
            if(currentIdx < slideCount - 4){
                moveSlide(currentIdx + 1);
                console.log(currentIdx);
            }else{
                moveSlide(0);
            }
        });
        prevBtn.addEventListener('click', function(){
            if(currentIdx > 0){
                moveSlide(currentIdx - 1);
            }else{
                moveSlide(slideCount - 4);
            }
        });

    //상단으로 이동
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('#goTop').show();
        } else{
            $('#goTop').hide();
        }
    });
    $('#goTop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });
       


}); //ready