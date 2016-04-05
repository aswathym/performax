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

    $("#edit_icon").click(function() {
        $("#update_finance").prop('disabled', false);
        $("#update_finance").css('height', '150px');
        $("#update_button").css('display', 'block');
        $(this).parent().parent().find('textarea').focus();
  });

    $('#login_button').click(function () {
        var email = $('#email').val(),
        var  password = $('#pass').val();
        if(validateEmail(email)) {
            if(validatePassword(email, password)) {
                location.pathname = "/assessments.html";
            }
        }
        if (email === "") {
            e.preventDefault();
            self.showLoginError("Please Enter Username");
            return false;
        } else if (password === "" ){
            e.preventDefault();
            self.showLoginError("Please Enter Password");
            return false;
        }
    })
    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }
    function validatePassword(email, pass) {
        var ret = (email == 'admin@qburst.com')&&(pass == 'admin') ? true : false;
        return ret;
    }
    
});
