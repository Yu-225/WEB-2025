$(document).ready(function() {
    $("#draggable").draggable();


    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $("#accordion2").accordion({
        collapsible: true,
        heightStyle: "content"
    });


    $("#datepicker").datepicker();


    $("#menu").menu();


    $("#tabs").tabs({
        collapsible: true,
        disable: [1, 2]
    });


    $('.zoom-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });

    $('.my-slider').magnificPopup({
        delegate: 'img', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });

});