$(document).ready(function() {

    $('a').on('mouseover', function() {
        $('.overlay').show();
    });
    $('a').on('mouseout', function() {
        $('.overlay').hide();
    });

});
