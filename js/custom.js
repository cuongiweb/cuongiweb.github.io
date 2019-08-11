$('.fancybox-button.fancybox-button--info').on('click', function() {
    $('.fancybox-caption').addClass('active')

})
$(window).load(function() {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.portfolioFilter a').click(function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    $.fancybox.defaults.btnTpl.info = '<button data-fancybox-info class="fancybox-button fancybox-button--info" title="Show caption">Thông tin</button>';
    $('[data-fancybox="images"]').fancybox({
        preventCaptionOverlap: false,
        infobar: false,
        idleTime: 0,
        buttons: [
            'info', 'close'
        ],
        caption: function(instance, obj) {
            return '<div><p class="fancy-nav"><a data-fancybox-prev title="Previous" tabindex="1">&lsaquo;</a> <a data-fancybox-next title="Next" tabindex="2">&rsaquo;</a> &nbsp; <span data-fancybox-index></span> of <span data-fancybox-count></span>  Mẫu</p>' + $(this).find('.caption').html() + '</div>';
        },

        onInit: function(instance) {

            instance.$refs.container.on('touchstart', '[data-fancybox-info]', function(e) {
                e.stopPropagation();
                e.preventDefault();
                instance.$refs.container.toggleClass('fancybox-vertical-caption');
            });
            instance.$refs.container.on('mouseenter', '[data-fancybox-info]', function(e) {
                instance.$refs.container.addClass('fancybox-vertical-caption');
                instance.$refs.caption.one('mouseleave', function(e) {
                    instance.$refs.container.removeClass('fancybox-vertical-caption');
                });
            });
        }
    });
});



function menuMobile() {


    $('.gallery-page .menu').click(function() {
        if ($(window).width() < 992) {
            $(this).toggleClass('active')
            if ($('.portfolioFilter').is(':hidden') == true) {
                $('.portfolioFilter').slideDown(500)
            } else {
                $('.portfolioFilter').slideUp(500)
            }
        }
    })

}

function clickAHideNav() {
    $('.portfolioFilter a').click(function() {
        if ($(window).width() < 992) {
            $('.portfolioFilter').slideUp(500)
            $('.gallery-page .menu').removeClass('active')
            var i = $(this).text()
            $('.gallery-page .menu p').text(i)
        }
    })
}


$(document).ready(function() {
    var x = $('.portfolioFilter a:first-child').text()
    $('.gallery-page .menu p').text(x)
    menuMobile()
    clickAHideNav()
})
$(window).resize(function() {
    $('.gallery-page .menu p').text($('.portfolioFilter a.current').text())
    clickAHideNav()

})