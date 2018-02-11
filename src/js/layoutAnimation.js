$(document).ready(function ()

    {

        var fancyboxClicked = false;
        var scope = {};

        var trigger = new ScrollTrigger({
            toggle: {
                visible: 'fadeVisible',
                hidden: 'fadeScroll'
            },

            offset: {
                x: 0,
                y: 300
            }


        });

        trigger.callScope = scope;
        //custom functions

        function socialIn() {
            $('#socialIcons ul').addClass('active');
            $('#social').addClass('active');
        }

        function socialOut() {
            $('#socialIcons ul').removeClass('active');
            $('#social').removeClass('active');
        }



        //bg shift
        scope.bgShiftOne = function () {
            $('#bgOverlay').addClass('active');
        }

        scope.bgShiftOne_r = function () {
            $('#bgOverlay').removeClass('active');
        }


        //slick

        $('#work').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,

            dots: true,

            responsive: [

                {

                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                },


                {

                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        //fancybox init

        $('#work .item a').fancybox({


            idleTime: 7,
            transitionEffect: 'zoom-in-out',
            transitionDuration: 500,
            buttons: ['fullScreen', 'close'],
            margin: [0, 80],
            protect: true,
            clickSlide: 'toggleControls',


            beforeShow: function () {

                if (fancyboxClicked == false) {
                    $('.dialogBox').addClass('active').delay(8000).queue(function (next) {

                        $(this).removeClass('active');
                        next();
                    });

                    fancyboxClicked = true;
                }
            }


        });



        //sticky nav

        $(window).scroll(function ()

            {
                //sticky nav
                if ($(document).scrollTop() > 25 && ($('#titleBar').css('visibility') != 'hidden')) {
                    $('#titleBar').addClass('bgFill');
                } else {
                    $('#titleBar').removeClass('bgFill');
                }

            }
        );

        //mNav hide after click on a link

        $('.mNav.menuContainer a').click(function ()

            {
                $('input.mNav').prop('checked', false);

            }
        );

        //social icons hover over


        $('#socialIcons ul').hover(socialIn, socialOut);

    });


//scrollspy

$("body").scrollspy({
    target: '.scrollSpy',
    offset: 250
});
