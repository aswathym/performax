$(document).ready(function() {
	$('.h-slider').slider({
        animate: 'fast',
        min: 1,
        max: 6,
        value: 1,
        step: 1,
        slide: function(event, ui) {
        var next_ul = $(this).siblings();
           if (ui.value == 1) {
            	next_ul.find('li').addClass('visibilityHidden');
                next_ul.find('li:nth-child(1)').removeClass('visibilityHidden');
            }
            else if(ui.value == 2) {
                next_ul.find('li').addClass('visibilityHidden');
                next_ul.find('li:nth-child(2)').removeClass('visibilityHidden');
            }
            else if(ui.value == 3) {
                next_ul.find('li').addClass('visibilityHidden');
                next_ul.find('li:nth-child(3)').removeClass('visibilityHidden');
            }
            else if(ui.value == 4) {
                next_ul.find('li').addClass('visibilityHidden');
                next_ul.find('li:nth-child(4)').removeClass('visibilityHidden');
            }
            else if(ui.value == 5) {
                next_ul.find('li').addClass('visibilityHidden');
                next_ul.find('li:nth-child(5)').removeClass('visibilityHidden');
            }
            else if(ui.value == 6) {
                next_ul.find('li').addClass('visibilityHidden');
                next_ul.find('li:nth-child(6)').removeClass('visibilityHidden');
            }
        }
    });
    $('.pagination').on('click', 'li', function() {
        $('.pagination li').removeClass('disabledLi');
        $('.pagination li a').removeClass('disabledLi');
        var current = $(this).parent().find('.active');
        var content = $('.paginate-content .tab-pane.active');
        if ($(this).hasClass('next')) {
            var nextPage = current.next();
            var nextView = content.next();
        }
        else if ($(this).hasClass('prev')) {
            var nextPage = current.prev();
            var nextView = content.prev();
        }
        current.removeClass('active');
        nextPage.addClass('active');
        content.removeClass('active');
        nextView.addClass('active');
        var index = $(this).parent().find('li.active').index();
        if (index == 1) {
            $('.pagination li:first-child').addClass('disabledLi');
            $('.pagination li:first-child a').addClass('disabledLi');
        }
        else if (index == $('.pagination li').length - 2) {
            $('.pagination li:last-child').addClass('disabledLi');
            $('.pagination li:last-child a').addClass('disabledLi');
        }
    });

    $('.assment_checkbox').on('change', function() {
        if($(this).is(':checked')) {
            $(this).parent().parent().parent().find('.h-slider').addClass('not-active');
            $(this).parent().parent().parent().find('.h-slider .ui-slider-handle').css('left', 0+'%');
            $(this).parent().parent().parent().find('.rate li').addClass('visibilityHidden');
            $(this).parent().parent().parent().find('.rate li:first-child').removeClass('visibilityHidden');
        }
        else {
            $(this).parent().parent().parent().find('.h-slider').removeClass('not-active');
        }
    });
});
