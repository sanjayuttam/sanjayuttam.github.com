jQuery(function () {
    var items = jQuery('#nav > ul > li > a');
    var pathName = window.location.pathname;
    if (pathName !== '/') {
        items.each(function () {
            var parent = jQuery(this).parent();
            if (jQuery(this).attr('href') + '/' == pathName) {
                parent.addClass('current_page_item');
            }
            else {
                parent.removeClass('current_page_item');
            }
        });
    }
});