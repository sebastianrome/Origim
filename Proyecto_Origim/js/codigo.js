$(document).ready(function(){
    var contenedores ={ 
        prehisUno: $('.prehisUno').offset().left,
        prehisDos: $('.prehisDos').offset().left,
        prehisTres: $('.prehisTres').offset().left,

        desUno: $('.greciaUno').offset().left,
        desDos: $('.greciaDos').offset().left,
        desTres: $('.greciaTres').offset().left,

        exiUno: $('.romaUno').offset().left,
        exiDos: $('.romaDos').offset().left,
        exiTres: $('.romaTres').offset().left,

        enigUno: $('.enigmaUno').offset().left,
        enigDos: $('.enigmaDos').offset().left,
        enigTres: $('.enigmaTres').offset().left,

        moderUno: $('.modernaUno').offset().left,
        moderDos: $('.modernaDos').offset().left,
        moderTres: $('.modernaTres').offset().left,
    }
    //Los edificion tienen una clase llamada 'mamut'

    //Inicio
    $('.cartelAvance').css('Animation-play-state', 'running');

    

    //Menu
    $(".navPrincipal .iconosSecciones li a").on('click', function(e){
        e.preventDefault();
        var atributo = $(this).attr("href");
        $('body, html').stop().animate({
            scrollLeft: $(atributo).offset().left
        }, 1500, 'easeInOutQuart');
    });

    //Icono Sonido
    $('.iconoSonido li').mouseenter(function(){
        $('.audio').animate({
            height: '20px',
        }, 500, 'easeInBack');

    })
    $('.iconoSonido li').mouseleave(function(){
        $('.audio:nth-child(1)').animate({
            marginTop: '6px',
            height: '15px',
        }, 500, 'easeInBack');
        $('.audio:nth-child(3)').animate({
            height: '27px',
        }, 500, 'easeInBack');
        $('.audio:nth-child(5)').animate({
            marginTop: '6px',
            height: '15px',
        }, 500, 'easeInBack');
    })

    

    //Fin de Inicio


    //Origen
    var nubesPrehistoria = {
        pares: $('.nubesEvento:nth-child(odd)'),
        impares: $('.nubesEvento:nth-child(even)')
    };
    var sol = $('.sol');
    var arbolesPrehistoria = {
        Uno: $('.prehisUno .moverArboles'),
        Dos: $('.prehisDos .moverArboles'),
        Tres: $('.prehisTres .moverArboles')
    };
    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.prehisUno){
            $('.nubesEvento').css('position','fixed');
            $('.nubesEvento').css('z-index','1');
            nubesPrehistoria.impares.animate({
                top: '-10px',
            }, 1000, 'easeOutBounce');
            nubesPrehistoria.pares.animate({
                top: '0px',
                
            }, 1500, 'easeOutBounce');

            sol.animate({
                top: '0px',
            }, 1800, 'easeOutBounce');
            sol.css('position','fixed');
            arbolesPrehistoria.Uno.animate({
                top: 0,
            }, 1000, 'easeOutBounce');
            $('.contOrigen').animate({
                bottom: '0',
            }, 1200, 'easeOutElastic');
            $('.mamut').animate({
                top: '0',
            }, 1200, 'easeOutBounce')
            
        
        }else{
            $('.nubesEvento').css('position','absolute');
            sol.css('position','absolute');
        }

        if($(window).scrollLeft() >= contenedores.prehisDos){
            arbolesPrehistoria.Dos.animate({
                top: 0,
            }, 1000, 'easeOutBounce');
            $('.cartelPrehi').animate({
                bottom: '250px',
            }, 1200, 'easeOutElastic');
        }
        if($(window).scrollLeft() >= contenedores.prehisTres){
            arbolesPrehistoria.Tres.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.cavernicola').animate({
                top: '-100px',
            }, 1000, 'easeOutBounce');
            $('.madero').animate({
                top: '-200px',
            }, 1300, 'easeOutBounce');
            $('.animacionPre').animate({
                top: '210px',
            }, 1500, 'easeOutBounce');
            $('.pAnimacion').animate({
                right: '0',
                opacity: '1',
            }, 1500, 'easeOutBounce');
        }
    });
    //Fin de Origen


    //Desnudo
    var arbolesDesnudo = {
        Uno: $('.greciaUno .moverArboles'),
        Dos: $('.greciaDos .moverArboles'),
        Tres: $('.greciaTres .moverArboles'),
    };

    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.desUno){
            arbolesDesnudo.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.gimanasioGrecia').animate({
                top: "0px",
                }, 1000, 'easeOutBounce');
            $('.contGrecia').animate({
                top: "35%",
                }, 1000, 'easeOutBounce');
           
        }
        if($(window).scrollLeft() >= contenedores.desDos){
            arbolesDesnudo.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.greciaDos .introduccion img').animate({
                left: "0px",
                opacity: "1",
            }, 1500, 'easeOutBounce');
            $('.greciaDos .introduccion p').animate({
                left: "0px",
                opacity: "1",
                }, 1500, 'easeOutBounce');
                $('.edificioGrecia').animate({
                    top: "0px",
                }, 2000, 'easeOutBounce');
                
           
        }
        if($(window).scrollLeft() >= contenedores.desTres){
            arbolesDesnudo.Tres.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.alDesnudo .animacion img:nth-child(1)').animate({
                top: "100px",
                opacity:"1",
            }, 2000, 'easeOutQuart');
            $('.alDesnudo .animacion img:nth-child(2)').animate({
                top: "100px",
            }, 2000, 'easeOutBounce');
            $('.griego').animate({
                top: "-150px",
            }, 2000, 'easeOutBounce');
            $('.alDesnudo .animacion p').animate({
                opacity: "1",
                }, 1500, 'easeOutBounce');
           
        }
    })
    //Fin de Desnudo
    

   


    //Roma
    var arbolesExilio = {
        Uno: $('.romaUno .moverArboles'),
        Dos: $('.romaDos .moverArboles'),
        Tres: $('.romaTres .moverArboles'),
    };

    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.exiUno){
            arbolesExilio.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.contRoma').animate({
                top: '35%'
            }, 1000, 'easeOutBounce');
            $('.romaUno .edificioRoma').animate({
                top: "0px",
                }, 1300, 'easeOutBounce');
        }
        if($(window).scrollLeft() >= contenedores.exiDos){
            arbolesExilio.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.romaDos .introduccion img').animate({
                top: "-100px",  
            }, 1000, 'easeOutBounce');
            $('.romaDos .introduccion p').animate({
                opacity: "1",
            }, 4000, 'easeOutBounce');
        }
        if($(window).scrollLeft() >= contenedores.exiTres){
            arbolesExilio.Tres.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.romano').animate({
                top: '-150px'
            }, 1000, 'easeOutBounce');
            $('.roma .animacion p').animate({
                top: '300px'
            }, 1000, 'easeOutBounce');
            $('.roma .animacion img:nth-child(2)').animate({
                opacity: '1'
            }, 1000, 'easeOutBounce');
            $('.roma .animacion img:nth-child(1)').css('Animation-play-state', 'running');
    
            
        }
        

    })
    //Fin de Roma


    //Enigma
    var arbolesEnigma = {
        Uno: $('.enigmaUno .moverArboles'),
        Dos: $('.enigmaDos .moverArboles'),
        Tres: $('.enigmaTres .moverArboles'),
    };
    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.enigUno){
            arbolesEnigma.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.castillo').animate({
                top: "0px",
                }, 1000, 'easeOutBounce');
            $('.contEnigma').animate({
                top:"35%",
            }, 1000, 'easeOutBounce');
        }
        
        
        if($(window).scrollLeft() >= contenedores.enigDos){
            arbolesEnigma.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.enigmaDos .introduccion img').animate({
                top:"-160px",
            }, 1000, 'easeOutBounce');
            $('.enigmaDos .introduccion p').animate({
                top:"0px",
            }, 1000, 'easeOutBounce');
        }

        $(window).on('scroll', function(){
            if($(window).scrollLeft() >= contenedores.enigTres){
                arbolesEnigma.Tres.animate({
                    top: '0',
                }, 1000, 'easeOutBounce');
                $('.arlequin').animate({
                    top: "-160px",
                    opacity:"1",
                    }, 1500, 'easeOutBounce');
                $('.enigmaTres .animacion img:nth-child(2)').animate({
                    top: "270px",
                }, 2000, 'easeOutBounce');
                $('.enigmaTres .animacion img:nth-child(1)').animate({
                    top: "-150px",
                    }, 1500, 'easeOutBounce');
                $('.enigmaTres .animacion p').animate({
                    top:"500px",
                }, 1000, 'easeOutBounce');
                    
            }
        })
    })


    //Fin deEnigma


    //Moderna
    var arbolesModerna = {
        Uno: $('.modernaUno .moverArboles'),
        Dos: $('.modernaDos .moverArboles'),
        Tres: $('.modernaTres .moverArboles'),
    };

    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.moderUno){
            arbolesModerna.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.gimnasio').animate({
                 top: '0px' 
            }, 1500, 'easeOutBounce').fadeIn();
            $('.contModerna').animate({
                top: '35%' 
            }, 2000, 'easeOutElastic').fadeIn();
            
        }

        if($(window).scrollLeft() >= contenedores.moderDos){
            arbolesModerna.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.modernaDos .introduccion p').animate({
                opacity: '1' 
            }, 3000, 'easeOutBounce').fadeIn();
            $('.introduccion').animate({
                bottom: '300px' 
            }, 1500, 'easeOutBounce').fadeIn();
            $('.modernaDos .coliseoGim').animate({
                top: '0px' 
            }, 1500, 'easeOutBounce').fadeIn();
        }

        if($(window).scrollLeft() >= contenedores.moderTres){
            arbolesModerna.Tres.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.nadia').animate({ 
                top: '-50px' 
            }, 1000, 'easeOutBounce').fadeIn();
            $('.moderna .animacion img:nth-child(1)').animate({
                top: '80px' 
            }, 1700, 'easeOutBounce').fadeIn();
            $('.moderna .animacion img:nth-child(2)').animate({
                top: '160px' 
            }, 2000, 'easeOutBounce').fadeIn();
            $('.moderna .animacion p').animate({
                top: '400px', 
                opacity: '1' 
            }, 3400, 'easeInOutQuart').fadeIn();
        }
    })        
    //Fin de Moderna

})