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
        $loaderOverlay = $('.loader-overlay'),
        flag = false;

    /*================================================================
                        >>> Event handlers <<<  
      ================================================================*/
    setListeners();
    function setListeners() {
        $(window).scroll(scrollCallback);
        $infoBtn.on('click', infoBtnCallback);
        $toTopBtn.on('click', toTopCallback);

        $(document).on('mouseover', ".works-status", function(e) {
            $(this).closest('li').find(".status-menu").addClass('show');
            console.log('piu');
        });

        $(document).on('mouseleave', ".works-status", function() {
            $('.status-menu').removeClass('show');
        });

        $(document).on('click', '.works-img', preventEvent);
        $(document).on('click', '.works-info-btn > a', preventEvent);

        function preventEvent() {
            var $this = $(this), 
                $checkBtn = $(this).closest('div');

            if ($this.hasClass('img-prevent') || $checkBtn.hasClass('freezed')) {
                return false;
            };
        };           

        function infoBtnCallback(e) {
            e.preventDefault();
            var $self = $(this);

            $self.toggleClass('open');
            $infoList.toggleClass('animated');
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

    /*================================================================
                        >>> HandleBars template <<<  
      ================================================================*/
        getTemplate();
        function getTemplate() {
            var interestingBlock = $('.interesting-flag').find('.works-list'),
                privateBlock = $('.private-flag').find('.works-list'),
                commercialBlock = $('.commercial-flag').find('.works-list');

            $loaderOverlay.show();
            $.ajax({
                type: "GET",
                url: "../data.json",
                dataType: "json",
                success: function(data) {
                    var content,    
                        source   = $("#entry-template").html(),
                        template = Handlebars.compile(source),
                        htmlPrivate = "",
                        htmlInteresting = " ",
                        htmlCommercial = " ";

                    for (var i = 0, l = data.length; i < l; i++) {
                        if (data[i]["flag"] === "private") {
                           content = data[i];
                           htmlPrivate += template(content); 
                        } else if (data[i]["flag"] === "interesting") {
                            content = data[i];
                            htmlInteresting += template(content); 
                        } else if (data[i]["flag"] === "commercial") {
                            content = data[i];
                            htmlCommercial += template(content);  
                        };
                    };
                    interestingBlock.append(htmlInteresting);
                    privateBlock.append(htmlPrivate);
                    commercialBlock.append(htmlCommercial);

                    $loaderOverlay.hide();
                }
            });
       };



  





	
});
})(jQuery);
