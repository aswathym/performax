$(document).ready(function() {
    $('#textAreaPopup').Editor({
        'texteffects': false,
        'aligneffects': false,
        'textformats': false,
        'fonteffects': false,
        'actions': false,
        'insertoptions': false,
        'extraeffects': false,
        'advancedoptions': false,
        'screeneffects': false,
        'bold': true,
        'italics': true,
        'underline': false,
        'ol': false,
        'ul': true,
        'undo': false,
        'redo': false,
        'l_align': true,
        'r_align': true,
        'c_align': true,
        'justify': false,
        'insert_link': false,
        'unlink': false,
        'insert_img': false,
        'hr_line': false,
        'block_quote': true,
        'source': false,
        'font_size': false,
        'fonts': false,
        'splchars': false,
        'color': false,
        'styles': false,
        'strikeout': false,
        'indent': false,
        'outdent': false,
        'print': false,
        'rm_format': false,
        'status_bar': false,
        'insert_table': false,
        'select_all': false,
        'togglescreen': false
    });

    if ($('#create_promo_code_form')) {
        $('.calender').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });
    }
    $('#create_promo_code_form #radio2').click(function() {
        $('.number_field').focus();
    })

    $("#edit_icon").click(function() {
        $("#update_finance").prop('disabled', false);
        $("#update_finance").css('height', '150px');
        $("#update_button").css('display', 'block');
        $(this).parent().parent().find('textarea').focus();
    });
    $('#register_button').click(function() {
        var email = $('#email_reg').val();
        var company_id = $('#company_id').val();
        $('.error_span_email_reg').text('');
        $('.error_span_cmp_id').text('');
        if ((email === "") && (company_id === "")) {
            $('.error_span_email_reg').text('Email should not be Empty');
            $('.error_span_cmp_id').text('Company ID should not be Empty');
        } else if (email === "") {
            $('.error_span_email_reg').text('Email should not be Empty');
        } else if (company_id === "") {
            $('.error_span_cmp_id').text('Company ID should not be Empty');
        } else if (validateEmail(email)) {
            debugger;
            if ($('.agree_conditons').prop('checked')) {
                alert('Registration successfully completed');
            } else {
                $('.error_span_email_reg').text('Agree the Terms and Conditions');
            }
        } else {
            $('.error_span_email_reg').text('The Email is not Valid');
        }
    });
    $('#login_button').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        $('.error_span_email').text('');
        $('.error_span_pass').text('');
        if (email === "") {
            $('.error_span_email').text('Email should not be Empty');
        }
        if (password === "") {
            $('.error_span_pass').text('Password should not be Empty');
        } else if (validateEmail(email)) {
            if (validatePassword(email, password)) {
                location.pathname = "/assessments.html";
            } else {
                $('.error_span_email').text('The Email and Password do not match');
            }
        } else {
            $('.error_span_email').text('The Email is not Valid');
        }
    })

    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);

    }

    function validatePassword(email, pass) {
        var ret = (email == 'admin@qburst.com') && (pass == 'admin') ? true : false;
        return ret;
    }
    $(".dropdown-menu li a").click(function() {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText).css("color","black");
    });


});
