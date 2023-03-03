$(document).ready(function() {
    $("#moveButton").click(function () {
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
    });
    $("#moveButton2").click(function () {
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
    });
});