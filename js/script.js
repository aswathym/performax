$(document).ready(function() {
	$("#edit_icon").click(function() {
	    $("#update_finance").prop('disabled',false);
        $("#update_finance").css('height','150px');
        $("#update_button").css('display','block');
        $(this).parent().parent().find('textarea').focus();
	});
});
