$(document).ready(function() {

    $('.nation').hide();
    $('#water').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("water");
    });
    $('#water').on('mouseout', function() {
        $('.nation').hide();
    });

    $('.nation').hide();
    $('#air').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("air");
    });
    $('#air').on('mouseout', function() {
        $('.nation').hide();
    });

    $('.nation').hide();
    $('#fire').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("fire");
    });
    $('#fire').on('mouseout', function() {
        $('.nation').hide();
    });

    $('.nation').hide();
    $('#earth').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("earth");
    });
    $('#earth').on('mouseout', function() {
        $('.nation').hide();
    });

});
