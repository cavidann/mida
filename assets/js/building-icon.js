$(document).ready(function () {
    positionIcons();
    $(window).on('load resize', function () {
        positionIcons(40)
        var win = $(this); 
        if (win.width() <= 736) { 
            positionIcons(20)
         }
    })
    function positionIcons(a) {
        $('img[data-target]').each(function (index, element) {
            var building = $('a[data-title="' + $(this).data('target') + '"]');
            if (building.length) {
                $(this).css({
                    top: building.position().top - 20 + 'px',
                    left: building.position().left + a + 'px'
                });
            }
        })
    }
});