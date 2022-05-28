$(function(){

    let amt = $('.sobre-autor').length;
    let delay = 3000;
    let curIndex = 0;

    iniciarSlider();
    autoPlay();
    

    function iniciarSlider(){
        
        let sizeContainer = 100 * amt;
        let sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width',sizeBoxSingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');

        for (let i = 0; i < amt; i++) {
            if (i == 0) {
                $('.slider-bullets').append('<span style="background-color: rgb(100,100,100);"></span>');
            } else {
                $('.slider-bullets').append('<span></span>');
            }
            
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(){
        let offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0});
    });
})