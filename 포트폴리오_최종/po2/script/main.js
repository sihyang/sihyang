$(document).ready(function(){
// GNB 서브메뉴 슬라이드
$(".mainMenu > li").mouseenter(function(){
    $(".subMenu").stop().slideDown(300);
    $(".subBg").stop().slideDown(300);
});
$(".mainMenu > li").mouseleave(function(){
    $(".subMenu").stop().slideUp(300);
    $(".subBg").stop().slideUp(300);
});

// Cont2 공지사항 탭메뉴
var noBtn = $(".tabBtn > ul > li");
var noCont = $(".tabCont > div");

noCont.hide().eq(0).show();

noBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    noBtn.removeClass("active");
    target.addClass("active");
    noCont.css("display","none");
    noCont.eq(index).css("display","block");
});
// Cont2 팝업배너 슬라이드
var swiper = new Swiper(".popup", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Cont4 추천 신간 책 탭메뉴 
var movBtn = $(".bookMenu > ul > li");
var movCont = $(".bookList > div");

movCont.hide().eq(1).show();

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    movBtn.removeClass("active");
    target.addClass("active");
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});
// Cont5 도서관 시설 슬라이드
var swiper = new Swiper(".place", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// 푸터 관련 사이트
$(function(){     
$('.select > a').click(function(e) {
    e.preventDefault();
    $siteList =  $(this).next('.select ul');
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $siteList.stop().slideUp(); 
    }else{             
        $(this).addClass('on');        
        $siteList.stop().slideDown();    
    }
});
});

}); //ready