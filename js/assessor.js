$(document).ready(function() {
	setSlider($('.h-slider'));
    setSlider($('.h-slider-extra'));
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
            $(this).parent().parent().parent().find('.h-slider').addClass('disabled-slider');
            $(this).parent().parent().parent().find('.h-slider .ui-slider-handle').css('left', 0+'%');
            $(this).parent().parent().parent().find('.rate li').addClass('visibilityHidden');
            $(this).parent().parent().parent().find('.rate li:first-child').removeClass('visibilityHidden');
        }
        else {
            $(this).parent().parent().parent().find('.h-slider').removeClass('disabled-slider');
        }
    });

    $('#analytics_and_insights .add_and_remove_button').on('click', 'button', function() {
        if ($(this).parent().parent().find('.extra_rating').hasClass('displayNone')) {
            $(this).parent().parent().find('.extra_rating').removeClass('displayNone');
            $(this).removeClass('btn-primary');
            $(this).addClass('btn-danger');
            $(this).html("Remove");      
        }
        else {
            $(this).parent().parent().find('.extra_rating').addClass('displayNone');
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-danger');
            $(this).html("Add More");
            $(this).parent().parent().find('.extra_rating .rate li').addClass('visibilityHidden');
            $(this).parent().parent().find('.extra_rating .rate li:first-child').removeClass('visibilityHidden');
            setSlider($(this).parent().parent().find('.h-slider-extra'));
            $('.extra-note-space').val("");
        }
    });
    $('#analytics_and_insights').on('click', '.add_more_text', function() {
        if ($(this).parent().parent().find('.extra-text-space').hasClass('displayNone')) {
            $(this).parent().parent().find('.extra-text-space').removeClass('displayNone')
            $(this).removeClass('btn-primary');
            $(this).addClass('btn-danger');
            $(this).html("Remove");  
        }
        else {
            $(this).parent().parent().find('.extra-text-space').addClass('displayNone')
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-danger');
            $(this).html("Add More");
             $('.extra-text-space').val("");
        }
    });
});
 
var setSlider = function(hslider) {
    hslider.slider({
        animate: 'fast',
        min: 1,
        max: 5,
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
        }
    });
}