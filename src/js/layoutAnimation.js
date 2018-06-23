$(document).ready(() =>

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

    //social icon underline footer

    function socialIconIn() {
      $("#social").addClass("active");
    }

    function socialIconOut() {
      $("#social").removeClass("active");
    }


    //square shift

    // bug fix so that squareOne and squareTwo doesn't fade away when scrolling to top of smaller window
    $(window).scroll((event) => {

      if ($(this).scrollTop() <= $('#about h2').offset.top) {
        scrollPositionTop = true;


      } else {
        scrollPositionTop = false;

      }

    });



    scope.squareShiftTowards = () => {


      $('#about .squareOne').removeClass('init');
      $('#about .squareTwo').removeClass('init');
      $('#about .moment').addClass('active');

    }


    scope.squareShiftAway = () => {

      if (scrollPositionTop == false) { // don't fade away when scroll position is top of window
        $('#about .squareOne').addClass('init');
        $('#about .squareTwo').addClass('init');
        $('#about .moment').removeClass('active');


      }
    }

    scope.squareShiftTowards(); //initialization for first page load


    //techStepsShift


    scope.techStepsShiftTowards = () => {
      $('#process .step').addClass('active');
      $('#process .captionWrap').addClass('active');

    }
    scope.techStepsShiftAway = () => {
      $('#process .step').removeClass('active');
      $('#process .captionWrap').removeClass('active');

    }

    //bg shift
    scope.bgShiftOne = () => {
      $('#bgOverlay').addClass('active');
      $('#work .item').addClass('active');
    }

    scope.bgShiftOne_r = () => {
      $('#bgOverlay').removeClass('active');
      $('#work .item').removeClass('active');
    }

    scope.bgShiftOne_r(); // initialization for first page load


    //contact shift


    scope.contactShiftTowards = () => {
      $("#contact .transition").addClass("opacityOne");
      $("#contact .transition").removeClass("opacityZero");
      $("#contact .left img").addClass("active");



    } // run only once

    /*   scope.contactShiftAway = function () {
           $("#contact .transition").addClass("opacityZero");
           $("#contact .transition").removeClass("opacityOne");
           $("#contact .left img").removeClass("active");

       }*/

    //copyright shift

    scope.copyrightShiftTowards = () => {

      $("#copyright div").addClass("active");
    }
    scope.copyrightShiftAway = () => {

      $("#copyright div").removeClass("active");
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

          breakpoint: 1751,
          settings: {
            slidesToShow: 4
          }
        },


        {

          breakpoint: 1101,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 691,
          settings: {
            slidesToShow: 2
          }
        },
        {

          breakpoint: 421,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    //fancybox override default



    $.extend($.fancybox.defaults, {


      infobar: false,
      buttons: ['fullScreen', 'close'],
      idleTime: 7,
      transitionEffect: 'zoom-in-out',
      transitionDuration: 500,
      margin: [0, 80],
      protect: true,
      clickSlide: 'toggleControls',

      afterLoad: (instance, current) => {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
          current.width = current.width / pixelRatio;
          current.height = current.height / pixelRatio;
        }
      },


      // Arrows
      btnTpl: {
        download: '',
        zoom: '',
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',

        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',

        arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"></a>',

        arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"></a>'
      },

      clickOutside: false,

      beforeShow: () => {

        if (fancyboxClicked == false) {
          $('.dialogBox').addClass('active').delay(8000).queue(function(next) {

            $(this).removeClass('active');
            next();
          });

          fancyboxClicked = true;
        }
      }


    });




    //sticky nav

    $(window).scroll(() =>

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

    $('.mNav.menuContainer a').click(() =>

      {
        $('input.mNav').prop('checked', false);

      }
    );



    //scroll

    $('#titleBar ul li a').click((event) => {

      if (this.hash !== '') {
        event.preventDefault();
        hash = this.hash;



        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, () => {
          window.location.hash = hash;

        });


      }

    });

    // Social icon underline trigger
    $("#socialIcons ul").hover(socialIconIn, socialIconOut);


  });


//scrollspy

$("body").scrollspy({
  target: '.scrollSpy',
  offset: 250
});