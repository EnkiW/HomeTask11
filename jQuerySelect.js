$(document).ready(function() {
    $("#moveButton").click(function () {
        $('#object').fadeIn(2000);
        var box = $('#object');
        box.animate({
            left: 350
        });
        box.animate({
            top: 350
        });
        box.animate({
            left: 0
        });
        box.animate({
            top: 0
        });
        $('#object').fadeOut(2000);
    });
    $("#moveButton2").click(function () {
        $('#object').fadeIn(2000);
        var box = $('#object');
        box.animate({
            left: 175
        });
        box.animate({
            left: 350,
            top: 350
        });
        box.animate({
            left: 0
        });
        box.animate({
            left:175,
            top: 0
        });
        box.animate({
            left:0
        });
        $('#object').fadeOut(2000);
    });
    var isLarge = false;
    $('#object').fadeOut();
    $("#moveButton3").click(function () {
        if (isLarge) {
            $("#object").animate(
                {
                    width: "50px",
                    height: "50px",
                },
                1000
            );
            $('#object').fadeIn(2000);
            isLarge = false;
        } else {
            $("#object").animate(
                {
                    width: "400px",
                    height: "400px",
                },
                1000
            );
            $('#object').fadeIn(2000);
            isLarge = true;
        }
    });
    $("#reset").click(function () {
        $('#object').fadeOut();
    });
});