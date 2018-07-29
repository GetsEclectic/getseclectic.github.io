window.addEventListener("scroll", function(){
    const topDistance = window.pageYOffset;

    $("#cabin > div").each(function () {
        const depth = $(this).attr('data-depth');
        let movement = -(topDistance * depth);

        if($(this).attr('id') === 'cabin-layer-03') {
            movement = Math.max(movement, -396);
        }

        if($(this).attr('id') === 'cabin-layer-04') {
            movement = Math.max(movement, -200);
        }

        const translate3d = 'translate3d(0, ' + movement + 'px, 0)';

        $(this).css('-webkit-transform', translate3d);
        $(this).css('-moz-transform', translate3d);
        $(this).css('-ms-transform', translate3d);
        $(this).css('-o-transform', translate3d);
        $(this).css('transform', translate3d);
    });

    $("#chihiro > div").each(function () {
        const depth = $(this).attr('data-depth');
        let movement = -((topDistance - 1500) * depth);

        if($(this).attr('id') === 'chihiro-layer-03' ||
           $(this).attr('id') === 'chihiro-layer-02' ||
           $(this).attr('id') === 'chihiro-layer-01') {
            if(topDistance < 1800) {
                movement = 0;
            } else {
                movement = -((topDistance - 1800) * depth);
            }
        }

        const translate3d = 'translate3d(0, ' + movement + 'px, 0)';

        $(this).css('-webkit-transform', translate3d);
        $(this).css('-moz-transform', translate3d);
        $(this).css('-ms-transform', translate3d);
        $(this).css('-o-transform', translate3d);
        $(this).css('transform', translate3d);
    });

    $("#boathouse > div").each(function () {
        const depth = $(this).attr('data-depth');

        if($(this).attr('id') === 'boathouse-layer-03' ||
            $(this).attr('id') === 'boathouse-layer-02') {
            if(topDistance < 3750) {
                movement = 0;
            } else {
                movement = -((topDistance - 3750) * depth);
            }

            const translate3d = 'translate3d(0, ' + movement + 'px, 0)';

            $(this).css('-webkit-transform', translate3d);
            $(this).css('-moz-transform', translate3d);
            $(this).css('-ms-transform', translate3d);
            $(this).css('-o-transform', translate3d);
            $(this).css('transform', translate3d);
        }
    });

    $("#boathouse > div").each(function () {
        const depth = $(this).attr('data-depth');

        if($(this).attr('id') === 'boathouse-layer-01') {
            if(topDistance < 3900) {
                movement = 0;
            } else {
                movement = ((topDistance - 3900) * depth);
            }

            const translate3d = 'translate3d(' + movement + 'px, 0, 0)';

            $(this).css('-webkit-transform', translate3d);
            $(this).css('-moz-transform', translate3d);
            $(this).css('-ms-transform', translate3d);
            $(this).css('-o-transform', translate3d);
            $(this).css('transform', translate3d);
        }
    });
});