(function($){
    $.fn.pluginMenu = function(param){

        param = $.extend(
                {

                    btnClasses: 'fa fa-list-ul',
                    btnCloseClasses: 'fa fa-times',


                    animEffect:'swing',
                    animSpeed:500,
                    //color
                    color:'blue'
                },param);


        this.each(function(idx,el){
            $(el).addClass('fpmenu fp-hide').height($(document).outerHeight()>$(this).height()?$(document).outerHeight():$(this).height());
        });


        $('<i class="fp-btn '+param.btnClasses+'"></i>').appendTo('body');




        Object.defineProperty(this,'isOpen',{value: false,writable: true});


        var _self = this;
        $('i.fp-btn').click(function(e){
            e.preventDefault();
            if(!$(_self).is(':animated')){
                if(_self.isOpen){
                    $(_self).animate({opacity:0},param.animSpeed,param.animEffect,function(){
                            $(this).addClass('fp-hide');

                            $('i.fp-btn').removeClass(param.btnCloseClasses).addClass(param.btnClasses);
                        });
                }else{
                    $(_self).removeClass('fp-hide').animate({opacity:1},param.animSpeed,param.animEffect,function(){
                        $('i.fp-btn').removeClass(param.btnClasses).addClass(param.btnCloseClasses);
                    });
                }
                _self.isOpen = !_self.isOpen;
            }
        });

        return this;
    }
})(jQuery);
