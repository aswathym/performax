$(document).ready(function() {
	$('#h-slider1').slider({
        animate: 'fast',
        min: 1,
        max: 6,
        value: 4,
        step: 1,
        slide: function(event, ui) {
            if (ui.value == 1) {
            	$('#rate1 li').addClass('visibilityHidden');
                $('#rate1 li:nth-child(1)').removeClass('visibilityHidden');
            }
            else if(ui.value == 2) {
                $('#rate1 li').addClass('visibilityHidden');
                $('#rate1 li:nth-child(2)').removeClass('visibilityHidden');
            }
            else if(ui.value == 3) {
                $('#rate1 li').addClass('visibilityHidden');
                $('#rate1 li:nth-child(3)').removeClass('visibilityHidden');
            }
            else if(ui.value == 4) {
                $('#rate1 li').addClass('visibilityHidden');
                $('#rate1 li:nth-child(4)').removeClass('visibilityHidden');
            }
            else if(ui.value == 5) {
                $('#rate1 li').addClass('visibilityHidden');
                $('#rate1 li:nth-child(5)').removeClass('visibilityHidden');
            }
            else if(ui.value == 6) {
                $('#rate1 li').addClass('visibilityHidden');
                $('#rate1 li:nth-child(6)').removeClass('visibilityHidden');
            }
        }
    });
    $('#h-slider2').slider({
        animate: 'fast',
        min: 1,
        max: 6,
        value: 6,
        step: 1,
        slide: function(event, ui) {
            if (ui.value == 1) {
            	$('#rate2 li').addClass('visibilityHidden');
                $('#rate2 li:nth-child(1)').removeClass('visibilityHidden');
            }
            else if(ui.value == 2) {
                $('#rate2 li').addClass('visibilityHidden');
                $('#rate2 li:nth-child(2)').removeClass('visibilityHidden');
            }
            else if(ui.value == 3) {
                $('#rate2 li').addClass('visibilityHidden');
                $('#rate2 li:nth-child(3)').removeClass('visibilityHidden');
            }
            else if(ui.value == 4) {
                $('#rate2 li').addClass('visibilityHidden');
                $('#rate2 li:nth-child(4)').removeClass('visibilityHidden');
            }
            else if(ui.value == 5) {
                $('#rate2 li').addClass('visibilityHidden');
                $('#rate2 li:nth-child(5)').removeClass('visibilityHidden');
            }
            else if(ui.value == 6) {
                $('#rate2 li').addClass('visibilityHidden');
                $('#rate2 li:nth-child(6)').removeClass('visibilityHidden');
            }
        }
    });
    $('#h-slider3').slider({
        animate: 'fast',
        min: 1,
        max: 6,
        value: 5,
        step: 1,
        slide: function(event, ui) {
            if (ui.value == 1) {
            	$('#rate3 li').addClass('visibilityHidden');
                $('#rate3 li:nth-child(1)').removeClass('visibilityHidden');
            }
            else if(ui.value == 2) {
                $('#rate3 li').addClass('visibilityHidden');
                $('#rate3 li:nth-child(2)').removeClass('visibilityHidden');
            }
            else if(ui.value == 3) {
                $('#rate3 li').addClass('visibilityHidden');
                $('#rate3 li:nth-child(3)').removeClass('visibilityHidden');
            }
            else if(ui.value == 4) {
                $('#rate3 li').addClass('visibilityHidden');
                $('#rate3 li:nth-child(4)').removeClass('visibilityHidden');
            }
            else if(ui.value == 5) {
                $('#rate3 li').addClass('visibilityHidden');
                $('#rate3 li:nth-child(5)').removeClass('visibilityHidden');
            }
            else if(ui.value == 6) {
                $('#rate3 li').addClass('visibilityHidden');
                $('#rate3 li:nth-child(6)').removeClass('visibilityHidden');
            }
        }
    });
});
