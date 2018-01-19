$(document).ready(function ()

    {
        $('#work').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,

            dots: true,

            responsive: [{

                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });




        $('#work .item a').fancybox({

            'slideShow': false

        });

        $(window).scroll(function ()

            {
                //sticky nav
                if ($(document).scrollTop() > 25) {
                    $('#titleBar').addClass('bgFill');
                } else {
                    $('#titleBar').removeClass('bgFill');
                }



            }
        );

    });




/*$("body").scrollspy({
    target: '#titleBar',
    offset: 250

});*/


$("body").scrollspy({
    target: '.scrollSpy',
    offset: 250
});
