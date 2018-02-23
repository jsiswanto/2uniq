$(document).ready(function ()

    {

        var fancyboxClicked = false;
        var scope = {};
        var hash;
        var scrollPositionTop = true; // fixes scrolltrigger bug on mobile version where squareOne and squareTwo fades away on the very top of window scroll

        //scrolltrigger

        var trigger = new ScrollTrigger({
            toggle: {
                visible: 'visible',
                hidden: 'visible'
            },

            offset: {
                x: 0,
                y: 350
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

        //square shift

        // bug fix so that squareOne and squareTwo doesn't fade away when scrolling to top of smaller window
        $(window).scroll(function (event) {

            if ($(this).scrollTop() <= $('#about h2').offset().top) {
                scrollPositionTop = true;


            } else {
                scrollPositionTop = false;

            }

        });



        scope.squareShiftTowards = function () {


            $('#about .squareOne').removeClass('init');
            $('#about .squareTwo').removeClass('init');

        }


        scope.squareShiftAway = function () {

            if (scrollPositionTop == false) { // don't fade away when scroll position is top of window
                $('#about .squareOne').addClass('init');
                $('#about .squareTwo').addClass('init');


            }
        }

        scope.squareShiftTowards(); //initialization for first page load


        //techStepsShift


        scope.techStepsShiftTowards = function () {
            $('#process .step').addClass('active');
            $('#process .captionWrap').addClass('active');

        }
        scope.techStepsShiftAway = function () {
            $('#process .step').removeClass('active');
            $('#process .captionWrap').removeClass('active');

        }

        //bg shift
        scope.bgShiftOne = function () {
            $('#bgOverlay').addClass('active');
        }

        scope.bgShiftOne_r = function () {
            $('#bgOverlay').removeClass('active');
        }

        scope.bgShiftOne_r(); // initialization for first page load


        //contact shift


        scope.contactShiftTowards = function () {
            $("#contact .transition").addClass("opacityOne");
            $("#contact .transition").removeClass("opacityZero");
            $("#contact .left img").addClass("active");


        }

        scope.contactShiftAway = function () {
            $("#contact .transition").addClass("opacityZero");
            $("#contact .transition").removeClass("opacityOne");
            $("#contact .left img").removeClass("active");
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

        //scroll

        $('#titleBar ul li a').click(function (event) {

                if (this.hash !== '') {
                    event.preventDefault();
                    hash = this.hash;



                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 900, function () {
                        window.location.hash = hash;

                    });


                }

            }


        );



    });


//scrollspy

$("body").scrollspy({
    target: '.scrollSpy',
    offset: 250
});
