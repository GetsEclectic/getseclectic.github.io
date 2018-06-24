window.addEventListener("scroll", function(){
    const topDistance = @pageYOffset;

    $("#cabin > div").each(function () {
        const depth = $(this).getAttribute('data-depth');
        const movement = -(topDistance * depth);
        const translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        $(this).style['-webkit-transform'] = translate3d;
        $(this).style['-moz-transform'] = translate3d;
        $(this).style['-ms-transform'] = translate3d;
        $(this).style['-o-transform'] = translate3d;
        $(this).style.transform = translate3d;
    });
});