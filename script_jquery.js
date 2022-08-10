$(function () {
    $('button').click(function () {
        $('h1').hide();
    });

});

$(function () {
    $('button').click(function () {
        $('#unico').css("color", "red");
    });

});

$(function () {
    $('#azul').click(function () {
        $('p')
            .css("background-color", "blue")
            .fadeOut()
            .delay(1000)
            .fadeIn()
    });

});

$(function () {
    $('#vermelho').click(function () {
        $('p').css("background-color", "red");
        $('p').fadeOut('slow');
        $('p').fadeIn(5000);
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({ color: 'red', border: '1px solid blue' })
            .delay(3000)
            .fadeOut(1000)
            .addClass('green');
        $('button').removeClass('red');
    });

});

$(function () {
    $('#l1').click(function () {
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
    });

    $('#l2').click(function () {
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
    });

    $('#l3').click(function () {
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
    });
});

