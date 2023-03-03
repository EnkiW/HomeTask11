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
});