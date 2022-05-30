$(function(){
    
    
    // SISTEMA DE SLIDER DE CARRO
    let isDrag = false;
    let preco_maximo = 70000;
    let preco_atual = 0;


    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })


    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    })


    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            let elBase = $(this);
            let mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0)
            mouseX = 0;
            if(mouseX > elBase.width())
            mouseX = elBase.width();

            $('.pointer-barra').css('left',(mouseX-13)+'px')
            currentValue = (mouseX / elBase.width()) * 100;

            $('.barra-preco-fill').css('width',currentValue+'%');

            //AJUSTAR O FORMATO DO PREÇO
            preco_atual = (currentValue / 100) * preco_maximo;
            preco_atual = formatarPreco(preco_atual)
            $('.preco_pesquisa').html('R$'+preco_atual);
        }
    })

    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2);
        preco_arr = preco_atual.split('.');
        let novo_preco = formatarTotal(preco_arr);
        return novo_preco;
    }

    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1];
        } else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].lenght)+','+preco_arr[1];
        } else{
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].lenght)+','+preco_arr[1];
        }
    }

    function disableTextSelection(){
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('-user-user-select','none');
    }

    function enableTextSelection(){
        $('body').css('-webkit-user-select','auto');
        $('body').css('-moz-user-select','auto');
        $('body').css('-ms-user-select','auto');
        $('body').css('-o-user-select','auto');
        $('body').css('-user-user-select','auto');
    }



    let imgShow = 3;
    let maxIndex = Math.ceil($('.mini-img-wraper').length / 3) - 1;
    let curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();
    
    
    function initSlider(){
        let amt = $('.mini-img-wraper').length * 33.3;
        let elScroll = $('.nav-galeria-wraper');
        let elSingle = $('.mini-img-wraper');
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3 * (100 / amt)+'%')
    }


    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                let elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            } else {
                
            }
        });
        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                let elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            } else {
                
            }
        })
    }


    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color','transparent');
            $(this).css('background-color','rgb(210,210,210)');
            let img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image',img);
        })
        $('.mini-img-wraper').eq(0).click();
    }

    //CLICAR E IR PARA A DIV DE CONTATO COM BASE NO ATRIBUTO GOTO


    $('[goto=contato]').click(function(){
        $('nav a').css('color','black');
        $(this).css('color','#EB2D2D');
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    })

})