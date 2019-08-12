(function($) {
    $(function() {
        $('#news .jcarousel').jcarousel()
            .jcarouselAutoscroll({
                interval: 3000,
                target: '+=1',
                autostart: true
            })
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 3;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            });

        $('#news .jcarousel').jcarousel({
            wrap: 'circular'
        });

        // $('.jcarousel').jcarousel();

        $('#news .jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('#news .jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('#news .jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });

    $(function() {
        $('#heroes .jcarousel').jcarousel()
        .jcarouselAutoscroll({
            interval: 4000,
            target: '+=1',
            autostart: true
        })
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 1;
            } else if (width >= 350) {
                width = width / 1;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        });

        $('#heroes .jcarousel').jcarousel({
            wrap: 'circular'
        });

        $('#heroes .jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('#heroes .jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('#heroes .jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

    });
})(jQuery);