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
        flag = false;

    /*================================================================
                        >>> Event handlers <<<  
      ================================================================*/
    setListeners();
    function setListeners() {
        $infoBtn.on('click', infoBtnCallback);
        $status.hover(statusInCallback, statusOutCallback );
        $contentImg.on('click', preventCallback);
        $contentBtn.on('click', preventCallback);

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
    };

  





	
});
})(jQuery);
