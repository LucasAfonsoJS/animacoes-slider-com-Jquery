$(function(){
    //DESCER MENU DO MOBILE
    $('.mobile-menu').click(function(){
        $(this).find('ul').slideToggle();
    })

    //EVENTO DE SCROLL TOP
    $('nav a').click(function(){
        let href = $(this).attr('href');
        let offSetTop = $(href).offSet().top;

        $('html,body').animate({'scrollTop':offSetTop});
        
        return false;
    })


})