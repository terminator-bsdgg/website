$(document).ready(function() {
    $(".veen .rgstr-btn button").click(function() {
        $('.veen .wrapper').addClass('move');
        $('.body').css('background', '#3b8a88');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function() {
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background', '#0b2b4d');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});