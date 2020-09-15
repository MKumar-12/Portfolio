$("#contact-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-pane").offset().top
    }, 2000);
});

$(document).ready(function() {
    $('#btn-submit').click(function() {
        $('#form1').attr('action',
                       'mailto:mkubn04@gmail.com?subject=' +
                       $('#tb3').val() + '&body=' + $('#tb4').val());
        $('#form1').submit();
    });
});