;(function($, undefined) {
$(document).ready(function() {
	'use strict';
    var $infoBtn = $('.wrapper-block').find('a'),
        $infoList = $('.wrapper-block').find('ul'),
        $status = $('.works-status'),
        $statusWindow = $('.status-menu'),
        $contentBoxes = $('.works-list').find('li'),
        $contentImg = $('.works-img'),
        $contentBtn = $('.works-info-btn').find('a'),
        $toTopBtn = $('.toTop'),
        flag = false;

    /*================================================================
                        >>> Event handlers <<<  
      ================================================================*/
    setListeners();
    function setListeners() {
        $(window).scroll(scrollCallback);
        $infoBtn.on('click', infoBtnCallback);
        $status.hover(statusInCallback, statusOutCallback );
        $contentImg.on('click', preventCallback);
        $contentBtn.on('click', preventCallback);
        $toTopBtn.on('click', toTopCallback);

        function infoBtnCallback(e) {
            e.preventDefault();
            var $self = $(this);

            $self.toggleClass('open');
            $infoList.toggleClass('animated');
        };

        function statusInCallback(e) {
            var $self = $(this);

            $self.closest('li').find($statusWindow).addClass('show');
        };

        function statusOutCallback() {
            $statusWindow.removeClass('show');
        };

        function preventCallback(e) {
            var $self = $(this),
                $checkBtn = $self.closest('div');
            
            if ($self.hasClass('img-prevent') || $checkBtn.hasClass('freezed')) {
                return false;
            };      
        };

        function toTopCallback(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        };

        scrollCallback();
        function scrollCallback() {
            var $wndTop = $(window).scrollTop(),
                TOP_INDENT = 400;
            if ($wndTop > TOP_INDENT) {
                $toTopBtn.addClass('show');
            } else {
                $toTopBtn.removeClass('show');
            }
        };
    };
    /*================================================================
                        >>> For IE 10 <<<  
    ================================================================*/
    checkIE10();
    function checkIE10() {
        var b = document.documentElement;
        b.setAttribute('data-useragent',  navigator.userAgent);
        b.setAttribute('data-platform', navigator.platform );   
    };


  





	
});
})(jQuery);
