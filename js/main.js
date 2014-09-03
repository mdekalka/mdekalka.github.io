;(function($, undefined) {
$(document).ready(function() {
	'use strict';
    var $infoBtn = $('.wrapper-block').find('a'),
        $infoList = $('.wrapper-block').find('ul'),
        $contentBoxes = $('.works-list').find('li'),
        $status = $('.works-status'),
        $statusWindow = $('.status-menu'),
        flag = false;

    /*================================================================
                        >>> Event handlers <<<  
      ================================================================*/
    setListeners();
    function setListeners() {
        $infoBtn.on('click', infoBtnCallback);
        $status.hover(statusInCallback, statusOutCallback )

        function infoBtnCallback(e) {
            e.preventDefault();
            var $self = $(this);

            $self.toggleClass('open');
            $infoList.toggleClass('animated');
        };

        function statusInCallback(e) {
            var $buffer = $('.buffer-status'),
                responseHTML;
            if (!flag) {
                // $contentBoxes.append( $buffer.load('../features.html #status-tooltip', function() { flag = true; }) ); 
                // $buffer.load('features.html', function() {
                //     console.log($buffer);
                //     flag = true;
                // });
                // $contentBoxes.append($buffer);
                $.ajax({
                    type: "GET",
                    url: 'features.html',
                    success: function(data) {
                        flag = true;
                        responseHTML = data;
                        console.log(responseHTML);
                    }
                });
                $contentBoxes.append(responseHTML);
            };

            $statusWindow.addClass('show');  
  
        };

        function statusOutCallback() {
            $statusWindow.removeClass('show');
        };
    };

  





	
});
})(jQuery);
