(function ( $ ) {
 
    var shade = "#556b2f";
 
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
    
    
    $.fn.popup = function( action ) {
 
        if ( action === "open") {
            // Open popup code.
        }
 
        if ( action === "close" ) {
            // Close popup code.
        }
 
    };
    
    
    
    $.fn.myNewPlugin = function(){
        return this.each(function(){
            
            //do something to each element here
            
        })
    }
 
}( jQuery ));