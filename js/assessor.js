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
});
