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
    $('#home_wheel').mapster({
        fillColor: '000000',
        fillOpacity: 0.4,
        fade: true,
        staticState: false
    });
    $(".area_wheel").on("click", function(e){
        e.preventDefault();
        console.log(e.target.alt);
        var name = e.target.alt;
        $('.mapster_el').attr('src','../images/'+name+'.png');
        $('#home_wheel').attr('src','../images/'+name+'.png');
        if (e.target.alt === 'act') {
            $('.img-center-div').find('.number').css('color', '#2FB2E3');
            $('.img-center-div').find('.number h3').html('5');
            $('.wheel-details').css('border-color', '#2FB2E3');
        }
        else if (e.target.alt === 'track') {
            $('.img-center-div').find('.number').css('color', '#6BCBD5');
            $('.img-center-div').find('.number h3').html('6');
            $('.wheel-details').css('border-color', '#6BCBD5');
        }
        else if (e.target.alt === 'focus') {
            $('.img-center-div').find('.number').css('color', '#FECA5A');
            $('.img-center-div').find('.number h3').html('1');
            $('.wheel-details').css('border-color', '#FECA5A');
        }
        else if (e.target.alt === 'customize') {
            $('.img-center-div').find('.number').css('color', '#F79032');
            $('.img-center-div').find('.number h3').html('2');
            $('.wheel-details').css('border-color', '#F79032');
        }
        else if (e.target.alt === 'engage') {
            $('.img-center-div').find('.number').css('color', '#E34A57');
            $('.img-center-div').find('.number h3').html('3');
            $('.wheel-details').css('border-color', '#E34A57');
        }
        else if (e.target.alt === 'evaluate') {
            $('.img-center-div').find('.number').css('color', '#0C4B75');
            $('.img-center-div').find('.number h3').html('4');
            $('.wheel-details').css('border-color', '#0C4B75');
        }
        $('.wheel_container').find('.wheel-details').css('display', 'inline-block');
        $('.wheel_container').find('.arrow-right').css('display', 'inline-block');
    });
    if ($('#create_promo_code_form')) {
        $('.calender').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });
    }

    $('#sideMenu a').on('click', function(){
         var count = $(this).next('.collapse').find('a').length;
         if(count > 1) {
            //  $(this).next('.collapse').addClass('in');
            $(this).next('.collapse').find('a').first().addClass('actives');
         }
    })

    $('#create_promo_code_form #radio2').click(function() {
        $('.number_field').focus();
    });

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
        if (first_name == '') {
            $('#profile .form-content input[name=first_name]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if (last_name == '') {
            $('#profile .form-content input[name=last_name]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if (company == '') {
            $('#profile .form-content input[name=company]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if (job_title == '') {
            $('#profile .form-content input[name=job_title]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if (phone == '') {
            $('#profile .form-content input[name=phone]').css('border-color', 'rgba(156, 3, 3, 0.4)');
        }
        if (zip_code == '') {
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
        $(this).prevAll('li').addClass('another_active');
        $(this).addClass('active')
    });


    $("#v-slider").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 100,
        value: 0,
        step: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));
    $("#v-slider2").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 100,
        value: 10,
        step: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));
    $("#v-slider3").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 100,
        value: 20,
        step: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));
    $("#v-slider4").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 100,
        value: 10,
        step: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));
    $("#v-slider5").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 100,
        value: 10,
        step: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));
    $("#v-slider6").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 100,
        value: 100,
        step: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));
    $('.list-group-item').click(function(e) {
        e.preventDefault();
        $('.list-group-item').removeClass('actives');
        // $(this).('actives');
        $('.list-group-item').removeClass('actives');
        $(this).next().find('a').first().trigger('click');
        $(this).next().find('a').first().addClass('actives');

    });
    var add_button = $(".add_field_button"),
        remove_button = $('.remove_field_button'),
        challenge_no = 2;

    $(add_button).click(function(e) {
        challenge1 = $('.challenge1').val();
        challenge2 = $('.challenge2').val();
        if (challenge1 != "" && challenge2 != "") {
            e.preventDefault();
            challenge_no++;
            $(".challenge_wrapper").append('<div class="challenge"><label>Challenge ' + challenge_no + ' :</label><input type="text" name="challenge" autocomplete="off"></div>');
            $('.remove_field_button').css('display', 'inline-block');
        } else {
            alert('fill existing fields');
        }

    });

    $(remove_button).click(function(e) { //user click on remove text
        e.preventDefault();
        if ($(".challenge_wrapper div").length > 2) {
            $(".challenge_wrapper div:last").remove()
            challenge_no--;
        } else {
            alert('Remove not possible');
            $('.remove_field_button').css('display', 'none');
        }
    })

    $("#challengeMapper").submit(function(e) {
        debugger;
        var values = 0;

        $('input[name="challenge"]').each(function() {
            if ($(this).val() != '') {
                values++;
            }

        });

        if (values == 0) {
            $("#challenge_valMessage").removeClass("displayNone");
            e.preventDefault();

        } else {
            $("#challenge_valMessage").addClass("displayNone");
        }

    });

    $('input[name="challenge"]').change(function() {
        $("#challenge_valMessage").addClass("displayNone");
    });

});

function toggleMode(ev) {
    var el = ev.target;
    if ($(el).hasClass('fa-toggle-on')) {
        $(el).removeClass('fa-toggle-on');
        $(el).addClass('fa-toggle-off');
    } else {
        $(el).addClass('fa-toggle-on');
        $(el).removeClass('fa-toggle-off');
    }
}
