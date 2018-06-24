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
});