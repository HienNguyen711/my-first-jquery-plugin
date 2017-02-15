(function ($) {

    $.fn.pluginAnimation = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            marginLeft: "30px",
            marginTop:"100px"

        }, options);

        // Greenify the collection based on the settings variable.
        return this.css({
            marginLeft:settings.marginLeft,
            marginTop:settings.marginTop
        });

    };

}(jQuery));
