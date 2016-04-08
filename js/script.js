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

    $(".dropdown-menu").on('click', 'li a', function() {
        $(".dd_btn").text($(this).text());
        // $(".btn:first-child").val($(this).text());
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
                location.pathname = "/performax/Admin/assessments.html";
            } else {
                $('.error_span_email').text('The Email and Password do not match');
            }
        } else {
            $('.error_span_email').text('The Email is not Valid');
        }
    })

    $('.profile_pic').click(function() {
        var check = $('.profile_pic_hover').hasClass('displayNone');
        if (check) {
            $('.profile_pic_hover').removeClass('displayNone');
        } else {
            $('.profile_pic_hover').addClass('displayNone');
        }
    });

    $('#profile .form-content input[type=text]').keyup(function(ev) {
        var val = ev.which;
        if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122) || (val == 08)) {
            $(this).css('border-color', '#dedede');
        } else {
            $(this).css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
    })
    $('#profile .form-content input[type=tel]').keyup(function(ev) {
        var val = ev.which;
        debugger;
        if ((val >= 48 && val <= 57) || (val == 08)) {
            $(this).css('border-color', '#dedede');
        } else {
            $(this).css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
    })
    $('#setupProfileSaveBtn').click(function() {
        var first_name = $('#profile .form-content input[name=first_name]').val(),
            last_name = $('#profile .form-content input[name=last_name]').val(),
            company = $('#profile .form-content input[name=company]').val(),
            phone = $('#profile .form-content input[name=phone]').val(),
            zip_code = $('#profile .form-content input[name=zip_code]').val(),
            job_title = $('#profile .form-content input[name=job_title]').val();
        if(first_name == '') {
            $('#profile .form-content input[name=first_name]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if(last_name == '') {
            $('#profile .form-content input[name=last_name]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if(company == '') {
            $('#profile .form-content input[name=company]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if(job_title == '') {
            $('#profile .form-content input[name=job_title]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if(phone == '') {
            $('#profile .form-content input[name=phone]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if(zip_code == '') {
            $('#profile .form-content input[name=zip_code]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
    })

    function checkEmpty(item) {
        return item === '' ? true : false;
    }

    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);

    }

    function validatePassword(email, pass) {
        var ret = (email == 'admin@qburst.com') && (pass == 'admin') ? true : false;
        return ret;
    }
    $('.flow_nav li').click(function(eve) {
        $(this).siblings().removeClass('active');
        $(this).siblings().removeClass('another_active');
            console.log($(this).prev('li'));
            $(this).prevAll().addClass('another_active');
        $(this).addClass('active')
    })
});
