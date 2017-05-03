$(document).ready(function() {

    $('.nation').hide();
    $('#water').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("water tribe");
    });
    $('#water').on('mouseout', function() {
        $('.nation').hide();
    });

    $('.nation').hide();
    $('#air').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("air nomads");
    });
    $('#air').on('mouseout', function() {
        $('.nation').hide();
    });

    $('.nation').hide();
    $('#fire').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("fire nation");
    });
    $('#fire').on('mouseout', function() {
        $('.nation').hide();
    });

    $('.nation').hide();
    $('#earth').on('mouseover', function() {
        $('.nation').show();
        $(".nation .element").html("earth kingdom");
    });
    $('#earth').on('mouseout', function() {
        $('.nation').hide();
    });

});
