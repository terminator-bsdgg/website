$(document).ready(function() {
    var fullName;
    var mailAdress;
    var password;
    var username;

    $("#loginbutton").click(function(event) {
        event.preventDefault();

        mailAdress = $("#mailvalue").val();
        password = $("#passwordvalue").val();

        console.log(mailAdress, password);
    });

    $("#registerbutton").click(function(event) {
        event.preventDefault();

        fullName = $("#fullnamevalue").val();
        mailAdress = $("#mailregvalue").val();
        password = $("#passwordregvalue").val();
        username = $("#usernamevalue").val();

        if (!(fullName.trim() && mailAdress.trim() && password.trim() && username.trim()))
            return $.notify("Jedes Feld muss Daten enthalten", "error");

        if (!mailAdress.includes("@"))
            return $.notify("Die E-Mail Adresse beinhaltet kein At-Zeichen.", "error");

        if (username.length < 6)
            return $.notify("Der Benutzername muss mindestens 6 Zeichen beinhalten!", "error");

        if (password.length < 6)
            return $.notify("Das Passwort muss aus mindestens 6 Zeichen bestehen!", "error");

        if (/[^A-Z a-z0-9]/.test(username))
            return $.notify("Der Username darf keine Sonderzeichen enthalten!", "error");

        var data = {};
        data.title = "title";
        data.message = "message";

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:3000/test',
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });

    });

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