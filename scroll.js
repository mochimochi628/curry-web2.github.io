var _window = $(window),
    _div = $('.header'),
    singleBottom;
 
_window.on('scroll',function(){     
    singleBottom = $('.single').height();
    if(_window.scrollTop() > singleBottom){
        _div.addClass('fixed');   
    }
    else{
        _div.removeClass('fixed');   
    }
});
 
_window.trigger('scroll');