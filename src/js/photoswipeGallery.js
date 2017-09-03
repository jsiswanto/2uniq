var openWorkGallery = function () {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = [{
            src: require('../images/cat1.jpeg'),
            w: 5360,
            h: 3560
    }, {
            src: require('../images/cat2.jpeg'),
            w: 2400,
            h: 1334
    }, {
            src: require('../images/cat3.jpeg'),
            w: 2067,
            h: 1163
    }, {
            src: require('../images/cat4.jpeg'),
            w: 5184,
            h: 3456
    }, {
            src: require('../images/cat5.jpeg'),
            w: 2557,
            h: 1704
    }, {
            src: require('../images/cat6.jpeg'),
            w: 3965,
            h: 2419
    }, {
            src: require('../images/cat7.jpg'),
            w: 5184,
            h: 3456
    }

];

    var options = {
        index: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openWorkGallery();
//document.getElementById('openWork').onclick = openWorkGallery;
