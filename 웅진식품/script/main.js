$(document).ready(function(){

    // 서브메뉴 드롭다운
    $(".gnb>ul>li").mouseenter(function(){
        $(this).find(".subMenu").stop().slideDown(400);
    });
    $(".gnb>ul>li").mouseleave(function(){
        $(this).find(".subMenu").stop().slideUp(400);
    });

    // 메인 슬라이드
    var swiper = new Swiper(".main", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
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