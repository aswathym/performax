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

    for (var i = 0; i < 14; i++) {
        $('.slider_number').append('<li>'+(i)+'</li>')        
    }

    var tab_array = $('#assessment_internal_tabs ul li')
    var width = 200;
    tab_array.each(function(item) {
        width += $(this).width();
    });

    $('#assessment_internal_tabs ul').css('width', width+'px');
    $('#assessment_internal_tabs').mCustomScrollbar({
        axis:"x",
        theme:"dark"
    });
    $('.wheel-details .item').mCustomScrollbar({
        axis:"y",
        theme:"dark"
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
    $('#learning_wheel').mapster({
        fillColor: '000000',
        fillOpacity: 0.4,
        fade: true,
        staticState: false
    });
    $('#register').click(function() {
    $('nav ul li').toggleClass('active');
    });
    // To hide the Wheel Details Container on clicking outside of the contaier
    $(document).mouseup(function (e) {
        if ($('.wheel-details')) {
            var container = $('.wheel-details');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        }
    });
    $(".close_button").click(function () {
        $(this).parent().slideUp("slow", function () {
            // Animation complete.
        });
    });
    $(".learning_section").on("mouseover", function(e){
        e.preventDefault();
        var name = e.target.alt;
        if (name === 'video' ) {
            $('.learning_center .video-tutorial').addClass('transformImage');
        }
        else if (name === 'brochures' ) {
            $('.learning_center .brochures').addClass('transformImage');
        }
        else if (name === 'live' ) {
            $('.learning_center .live-demo').addClass('transformImage');
        }
        else if (name === 'webinars' ) {
            $('.learning_center .webinars').addClass('transformImage');
        }
        else if (name === 'papers' ) {
            $('.learning_center .white-papers').addClass('transformImage');
        }
    });

    $(".learning_section").on("mouseout", function(e){
        $('.learning_center .each_tiles').removeClass('transformImage');
    })
    $('.area_wheel').on('click', function (e) {
        $('.wheel_container').find('.wheel-details').css('display', 'inline-block');
        $('.wheel_container').find('.arrow-right').css('display', 'inline-block');
        var name = e.target.alt;
        if (e.target.alt === 'act') {
            $('.wheel-details').css('border-color', '#2FB2E3');
            $('.wheel_wrapper').find('.wheel-details .item').addClass('displayNone');
            $('.wheel_wrapper').find('.wheel-details .item:nth-child(5)').removeClass('displayNone');
        }
        else if (e.target.alt === 'monitor') {
            $('.wheel-details').css('border-color', '#6BCBD5');
            $('.wheel_wrapper').find('.wheel-details .item').addClass('displayNone');
            $('.wheel_wrapper').find('.wheel-details .item:nth-child(6)').removeClass('displayNone');
        }
        else if (e.target.alt === 'focus') {
            $('.wheel-details').css('border-color', '#FECA5A');
            $('.wheel_wrapper').find('.wheel-details .item').addClass('displayNone');
            $('.wheel_wrapper').find('.wheel-details .item:nth-child(1)').removeClass('displayNone');
        }
        else if (e.target.alt === 'customize') {
            $('.wheel-details').css('border-color', '#F79032');
            $('.wheel_wrapper').find('.wheel-details .item').addClass('displayNone');
            $('.wheel_wrapper').find('.wheel-details .item:nth-child(2)').removeClass('displayNone');
        }
        else if (e.target.alt === 'engage') {
            $('.wheel-details').css('border-color', '#E34A57');
            $('.wheel_wrapper').find('.wheel-details .item').addClass('displayNone');
            $('.wheel_wrapper').find('.wheel-details .item:nth-child(3)').removeClass('displayNone');
        }
        else if (e.target.alt === 'evaluate') {
            $('.wheel-details').css('border-color', '#0C4B75');
            $('.wheel_wrapper').find('.wheel-details .item').addClass('displayNone');
            $('.wheel_wrapper').find('.wheel-details .item:nth-child(4)').removeClass('displayNone');
        }
    })
    $(".area_wheel").on("mouseover", function(e){
        e.preventDefault();
        var name = e.target.alt;
        $('.wheel_container .mapster_el').attr('src','../images/'+name+'.png');
        $('#home_wheel').attr('src','../images/'+name+'.png');
        if (e.target.alt === 'act') {
            $('.img-center-div').find('.number li').addClass('displayNone');
            $('.img-center-div').find('.number li:nth-child(5)').removeClass('displayNone');
        }
        else if (e.target.alt === 'monitor') {
            $('.img-center-div').find('.number li').addClass('displayNone');
            $('.img-center-div').find('.number li:nth-child(6)').removeClass('displayNone');
        }
        else if (e.target.alt === 'focus') {
            $('.img-center-div').find('.number li').addClass('displayNone');
            $('.img-center-div').find('.number li:nth-child(1)').removeClass('displayNone');
        }
        else if (e.target.alt === 'customize') {
            $('.img-center-div').find('.number li').addClass('displayNone');
            $('.img-center-div').find('.number li:nth-child(2)').removeClass('displayNone');
        }
        else if (e.target.alt === 'engage') {
            $('.img-center-div').find('.number li').addClass('displayNone');
            $('.img-center-div').find('.number li:nth-child(3)').removeClass('displayNone');
        }
        else if (e.target.alt === 'evaluate') {
            $('.img-center-div').find('.number li').addClass('displayNone');
            $('.img-center-div').find('.number li:nth-child(4)').removeClass('displayNone');
        }
    });

    if ($('#create_promo_code_form')) {
        $('.calender').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true
        });
    }

    $('#exspon_home_page .customer_says .slider_wrapper').ready(function() {
        var ul = $('#exspon_home_page .customer_says .slider_wrapper');
        if(ul.find('li').length == 0) {
            $('#exspon_home_page .customer_says').find('.fa').addClass('disable_icon');
        }
    });
    $('#exspon_home_page .customer_says').find('.fa-chevron-left').click(function() {
        var element = $(this).parent().siblings('ul').find('.active');
        element.removeClass('active');
        $('#exspon_home_page .customer_says').find('.fa').removeClass('disable_icon');
        var nextElement;
        if (element.prevAll().length == 1) {
            $(this).addClass('disable_icon');
            nextElement = element.prev();
        }
        else {
            nextElement = element.prev();
        }
        nextElement.removeClass('left right');
        nextElement.addClass('active');
        nextElement.prevAll().addClass('left');
        nextElement.nextAll().addClass('right');
    });
    $('#exspon_home_page .customer_says').find('.fa-chevron-right').click(function() {
        var element = $(this).parent().siblings('ul').find('.active');
        element.removeClass('active');
        $('#exspon_home_page .customer_says').find('.fa').removeClass('disable_icon');
        var nextElement;
        if (element.nextAll().length == 1) {
            $(this).addClass('disable_icon');
            nextElement = element.next();
        }
        else {
            nextElement = element.next();
        }
        nextElement.removeClass('left right');
        nextElement.addClass('active');
        nextElement.prevAll().addClass('left');
        nextElement.nextAll().addClass('right');
    });
    $('#exspon_home_page .live_updates .view_more').click(function (event) {
        event.preventDefault();
        $('#exspon_home_page .live_updates .updates_wrapper').css('height', 'auto');
        $('#exspon_home_page .live_updates .view_more').hide();
    });

    // Live updates 'View more' button behavoiur
    $('.live_updates').ready(function () {
        var sum = 20;
        $('.live_updates').find('.updates_wrapper li:lt(4)').each(function() {
           sum += $(this).height();
        });
        $('#exspon_home_page .live_updates .updates_wrapper').css('height', sum+'px');
    })

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
        var intputElements = document.getElementsByTagName("INPUT");
        for (var i = 0; i < intputElements.length; i++) {
            intputElements[i].oninvalid = function (e) {
                e.target.setCustomValidity("");
                if (!e.target.validity.valid) {
                    if (e.target.name == "company_id") {
                        e.target.setCustomValidity("Company ID should not be empty");
                    }
                    else if (e.target.name == "email_reg"){
                        if(e.target.value == ""){
                            e.target.setCustomValidity("Email should not be empty");
                        }
                        else{
                            e.target.setCustomValidity("Enter a valid email address");
                        }
                    }
                }

            };
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
        return item === '' || item === undefined ? true : false;
    }

    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }

    function validatePassword(email, pass) {
        var ret = (email == 'admin@qburst.com') && (pass == 'admin') ? true : false;
        return ret;
    }

    // $('.flow_nav li').click(function(eve) {
    //     $(this).siblings().removeClass('active');
    //     $(this).siblings().removeClass('another_active');
    //     $(this).prevAll('li').addClass('another_active');
    //     $(this).addClass('active')
    // });
    $(".v-slider").slider({
        orientation: "vertical",
        animate: 'fast',
        min: 0,
        max: 13,
        value: 0,
        step: 1,
        slide: function(event, ui) {
            $(this).find('.timeline').html(ui.value)
        }
    });
    $("#amount").val($(".v-slider").slider("value"));

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
       $('.remove_field_button').parent().removeClass('displayNone');
       } else {
           alert('fill existing fields');
       }
   });

    $(remove_button).click(function(e) { //user click on remove text
        e.preventDefault();
        if ($(".challenge_wrapper div").length > 2) {
            $(".challenge_wrapper div:last").remove()
            challenge_no--;
            if (challenge_no == 2) {
                $('.remove_field_button').parent().addClass('displayNone');
            }
        } else {
            $('.remove_field_button').parent().addClass('displayNone');
        }
    });

    $('#company_id_no').click(function() {
        $('#company-id-box').addClass('displayNone');
        $('#error_span_email_reg').addClass('displayNone');
    });
    $('#company_id_yes').click(function() {
        $('#company-id-box').removeClass('displayNone');
    });

    $("#challengeMapper").submit(function(e) {
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

/* for multiple column layout for list */
// As soon as the document's structure has been loaded:
document.addEventListener( "DOMContentLoaded", function() {
    // For each html elem:
    elems = document.getElementsByTagName("*"); // OL and UL wanted: chose all (*) here and select later.
    for ( var e = 0; e < elems.length; e++ ) {
        // Check if elem is a list (ordered/unordered) and has class name "cols":
        if ( ( elems[e].tagName == "OL" || elems[e].tagName == "UL" ) && elems[e].className.search("cols") > -1 ) {
            // Collect list items and number of columns (from the rel attribute):
            var list = elems[e];
            var listItems = list.getElementsByTagName("LI");
            var Ncols = list.getAttribute("rel")*1; // *1 converts rel from string to int.
            // Determine total number of items, items per column and column width:
            var Ntotal = listItems.length;
            var Npercol = Math.ceil( Ntotal/Ncols );
            var colWidth = Math.floor( 100/Ncols )+"%";
            // For each column:
            for ( var c = 0; c < Ncols; c++ ) {
                // Create column div:
                var colDiv = document.createElement("DIV");
                colDiv.style.cssFloat = "left";
                colDiv.style.width = colWidth;
                // Add list items to column div:
                var i_start = c*Npercol;
                var i_end = Math.min( (c+1)*Npercol, Ntotal );
                for ( var i = i_start; i < i_end; i++ )
                    colDiv.appendChild( listItems[0] ); // Using listItems[0] instead of listItems[i], because items are moved to colDiv!
                // Add column div to list:  
                list.appendChild( colDiv );
            }
        }
    }
} );
